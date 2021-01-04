import {
  FETCH_NEWS,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAIL,
  LOAD_NEWS,
  LOAD_NEWS_SUCCESS,
  LOAD_NEWS_FAIL,
  SORT_NEWS,
  SORT_NEWS_SUCCESS,
  SORT_NEWS_FAIL,
  REFRESH_NEWS,
  REFRESH_NEWS_SUCCESS,
  REFRESH_NEWS_FAIL,
  HIDE_WARNING,
  SHOW_WARNING,
} from '../constants';

const initialState = {
  news: [],
  isFetching: false,
  isLoading: false,
  isSorting: false,
  isRefreshing: false,
  warning: null,
};

const handleNews = (state = initialState, action) => {
  const {news} = state;

  // Fetching
  if (action.type === FETCH_NEWS) {
    return {
      ...state,
      isFetching: true,
    };
  }

  if (action.type === FETCH_NEWS_SUCCESS) {
    return {
      ...state,
      news: [...action.news],
      isFetching: false,
    };
  }

  if (action.type === FETCH_NEWS_FAIL) {
    return {...state, isFetching: false, warning: action.warning};
  }

  // Loading
  if (action.type === LOAD_NEWS) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === LOAD_NEWS_SUCCESS) {
    return {
      ...state,
      news: [...news, ...action.news],
      isLoading: false,
    };
  }

  if (action.type === LOAD_NEWS_FAIL) {
    return {...state, isLoading: false, warning: action.warning};
  }

  // Sorting
  if (action.type === SORT_NEWS) {
    return {
      ...state,
      isSorting: !!action.sortLetters,
    };
  }

  if (action.type === SORT_NEWS_SUCCESS) {
    return {
      ...state,
      news: [...action.news],
    };
  }

  // TODO: Он не нужен
  // if (action.type === SORT_NEWS_FAIL) {
  //   return {...state, warning: action.warning};
  // }

  // Refreshing
  if (action.type === REFRESH_NEWS) {
    return {
      ...state,
      isRefreshing: true,
    };
  }

  if (action.type === REFRESH_NEWS_SUCCESS) {
    return {
      ...state,
      news: [...action.news],
      isRefreshing: false,
    };
  }

  if (action.type === REFRESH_NEWS_FAIL) {
    return {...state, isRefreshing: false, warning: action.warning};
  }

  //
  if (action.type === SHOW_WARNING) {
    return {...state, warning: action.warning};
  }

  if (action.type === HIDE_WARNING) {
    return {...state, warning: null};
  }

  return state;
};

export default handleNews;
