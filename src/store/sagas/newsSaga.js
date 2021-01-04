import {takeEvery, takeLatest, put, call} from 'redux-saga/effects';

import {FETCH_NEWS, SORT_NEWS, LOAD_NEWS, REFRESH_NEWS} from '../constants';
import {
  showFetchedWarning,
  pushFetchedNews,
  pushLoadedNews,
  showLoadedWarning,
  pushSortedNews,
  pushRefreshedNews,
  showRefreshedWarning,
} from './../actions/news';

const apiUrl = 'https://test.spaceflightnewsapi.net/api/v2/articles';
const querySort = '_where[title_contains]=';
const queryFrom = '_start=';
const queryLimit = '_limit=15';
const querySortLimit = '_limit=50';

const delay = () => {
  return new Promise((resolve) => setTimeout(() => resolve(), 300));
};

const fetchHelper = (queryStr) => () => {
  return fetch(`${apiUrl}?${queryStr}`).then((response) => response.json());
};

function* fetchNewsWorker() {
  try {
    const news = yield call(fetchHelper(queryLimit));
    // yield call(delay);

    yield put(pushFetchedNews(news));
  } catch (e) {
    const warning = 'Ошибка запроса новостей';

    yield put(showFetchedWarning(warning));
  }
}

function* loadNewsWorker({from}) {
  const queryStr = `${queryFrom + from}&${queryLimit}`;

  try {
    const news = yield call(fetchHelper(queryStr));
    // yield call(delay);

    yield put(pushLoadedNews(news));
  } catch (e) {
    const warning = 'Ошибка подгрузки новостей';

    yield put(showLoadedWarning(warning));
  }
}

function* sortNewsWorker({sortLetters}) {
  const queryStr = `${querySort + sortLetters}&${querySortLimit}`;

  try {
    const news = yield call(fetchHelper(queryStr));
    // yield call(delay);

    yield put(pushSortedNews(news));
  } catch (e) {
    console.log(e);
  }
}

function* refreshNewsWorker() {
  try {
    const news = yield call(fetchHelper(queryLimit));
    // yield call(delay);

    yield put(pushRefreshedNews(news));
  } catch (e) {
    const warning = 'Ошибка обновления новостей';

    yield put(showRefreshedWarning(warning));
  }
}

export default function* newsSaga() {
  yield takeEvery(FETCH_NEWS, fetchNewsWorker);
  yield takeLatest(LOAD_NEWS, loadNewsWorker);
  yield takeLatest(SORT_NEWS, sortNewsWorker);
  yield takeLatest(REFRESH_NEWS, refreshNewsWorker);
}
