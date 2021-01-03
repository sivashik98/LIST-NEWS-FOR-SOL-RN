import {
  FETCH_NEWS,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAIL,
  HIDE_WARNING,
  LOAD_NEWS,
  LOAD_NEWS_SUCCESS,
  LOAD_NEWS_FAIL,
  FILTER_NEWS,
  FILTER_NEWS_SUCCESS,
  // TOGGLE_LIKE_POST,
} from '../constants';

export const fetchNews = () => ({
  type: FETCH_NEWS,
});

export const pushFetchedNews = (news) => ({
  type: FETCH_NEWS_SUCCESS,
  payload: news,
});

export const showFetchedWarning = (warning) => ({
  type: FETCH_NEWS_FAIL,
  payload: warning,
});

export const loadNews = (from) => ({
  type: LOAD_NEWS,
  payload: from,
});

export const pushLoadedNews = (news) => ({
  type: LOAD_NEWS_SUCCESS,
  payload: news,
});

export const showLoadedWarning = (warning) => ({
  type: LOAD_NEWS_FAIL,
  payload: warning,
});

export const filterNews = (filterLetters) => ({
  type: FILTER_NEWS,
  payload: filterLetters,
});

export const pushFilteredNews = (news) => ({
  type: FILTER_NEWS_SUCCESS,
  payload: news,
});

export const hideWarning = () => ({
  type: HIDE_WARNING,
});

// export const showLoadedWarning = (warning) => ({
//   type: LOAD_NEWS_FAIL,
//   payload: warning,
// });

// export const toggleLikePost = (id) => ({
//   type: TOGGLE_LIKE_POST,
//   payload: id,
// });
