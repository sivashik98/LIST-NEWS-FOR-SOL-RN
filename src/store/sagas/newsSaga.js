import {takeEvery, takeLatest, put, call} from 'redux-saga/effects';

import {FETCH_NEWS, FILTER_NEWS, LOAD_NEWS} from '../constants';
import {
  showFetchedWarning,
  pushFetchedNews,
  pushLoadedNews,
  showLoadedWarning,
  pushFilteredNews,
} from './../actions/news';

const apiUrl = 'https://test.spaceflightnewsapi.net/api/v2/articles';
const limit = 20;
const queryFilter = '_where[title_contains]=';

const delay = () => {
  return new Promise((resolve) => setTimeout(() => resolve(), 100));
};

const fetchHelper = (queryStr) => () => {
  return fetch(`${apiUrl}?${queryStr}`).then((response) => response.json());
};

function* fetchNewsWorker() {
  const queryStr = `_limit=${limit}`;

  try {
    const news = yield call(fetchHelper(queryStr));
    yield call(delay);

    yield put(pushFetchedNews(news));
  } catch (e) {
    const warning = 'Ошибка запроса новостей';

    yield put(showFetchedWarning(warning));
  }
}

function* loadNewsWorker({payload}) {
  const queryStr = `_start=${payload}&_limit=${limit}`;

  try {
    const news = yield call(fetchHelper(queryStr));
    yield call(delay);

    yield put(pushLoadedNews(news));
  } catch (e) {
    const warning = 'Ошибка подгрузки новостей';

    yield put(showLoadedWarning(warning));
  }
}

function* filterNewsWorker({payload}) {
  const queryStr = `${queryFilter}${payload}`;

  try {
    const news = yield call(fetchHelper(queryStr));
    // yield call(delay);
    // console.log(news);
    yield put(pushFilteredNews(news));
  } catch (e) {
    // const warning = 'Ошибка запроса новостей';
    //
    // yield put(showFetchedWarning(warning));
  }
}

export default function* newsSaga() {
  yield takeEvery(FETCH_NEWS, fetchNewsWorker);
  yield takeLatest(LOAD_NEWS, loadNewsWorker);
  yield takeLatest(FILTER_NEWS, filterNewsWorker);
}
