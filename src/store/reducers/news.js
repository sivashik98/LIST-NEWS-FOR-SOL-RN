import {
  FETCH_NEWS,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAIL,
  LOAD_NEWS,
  LOAD_NEWS_SUCCESS,
  LOAD_NEWS_FAIL,
  FILTER_NEWS,
  FILTER_NEWS_SUCCESS,
  HIDE_WARNING,
} from '../constants';

const initialState = {
  news: [],
  isFetching: false,
  isLoading: false,
  // isRefreshing: false,
  warning: null,
};

const handleNews = (state = initialState, action) => {
  const {news} = state;

  if (action.type === FETCH_NEWS) {
    return {
      ...state,
      isFetching: true,
    };
  }

  if (action.type === FETCH_NEWS_SUCCESS) {
    return {
      ...state,
      news: [...action.payload],
      isFetching: false,
    };
  }

  if (action.type === FETCH_NEWS_FAIL) {
    return {...state, isFetching: false, warning: action.payload};
  }

  if (action.type === LOAD_NEWS) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === LOAD_NEWS_SUCCESS) {
    return {
      ...state,
      news: [...news, ...action.payload],
      isLoading: false,
    };
  }

  if (action.type === LOAD_NEWS_FAIL) {
    return {...state, isLoading: false, warning: action.payload};
  }

  // if (action.type === FILTER_NEWS) {
  //   return {
  //     ...state,
  //   };
  // }

  if (action.type === FILTER_NEWS_SUCCESS) {
    return {
      ...state,
      news: [...action.payload],
    };
  }
  //
  // if (action.type === LOAD_NEWS_FAIL) {
  //   return {...state, isLoading: false, warning: action.payload};
  // }

  if (action.type === HIDE_WARNING) {
    return {...state, warning: null};
  }

  // if (action.type === TOGGLE_LIKE_POST) {
  //   return {
  //     ...state,
  //     posts: posts.map((el) =>
  //       el.id === action.payload ? {...el, liked: !el.liked} : el,
  //     ),
  //   };
  // }

  return state;
};

export default handleNews;
