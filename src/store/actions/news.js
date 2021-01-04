import {
  FETCH_NEWS,
  FETCH_NEWS_SUCCESS,
  FETCH_NEWS_FAIL,
  HIDE_WARNING,
  LOAD_NEWS,
  LOAD_NEWS_SUCCESS,
  LOAD_NEWS_FAIL,
  SORT_NEWS,
  SORT_NEWS_SUCCESS,
  SORT_NEWS_FAIL,
  REFRESH_NEWS,
  REFRESH_NEWS_SUCCESS,
  REFRESH_NEWS_FAIL,
  SHOW_WARNING,
} from '../constants';

// Fetching
export const fetchNews = () => ({
  type: FETCH_NEWS,
});

export const pushFetchedNews = (news) => ({
  type: FETCH_NEWS_SUCCESS,
  news,
});

export const showFetchedWarning = (warning) => ({
  type: FETCH_NEWS_FAIL,
  warning,
});

// Loading

export const loadNews = (from) => ({
  type: LOAD_NEWS,
  from,
});

export const pushLoadedNews = (news) => ({
  type: LOAD_NEWS_SUCCESS,
  news,
});

export const showLoadedWarning = (warning) => ({
  type: LOAD_NEWS_FAIL,
  warning,
});

// Sorting

export const sortNews = (sortLetters) => ({
  type: SORT_NEWS,
  sortLetters,
});

export const pushSortedNews = (news) => ({
  type: SORT_NEWS_SUCCESS,
  news,
});

// TODO: Он не нужен
// export const showSortedWarning = (warning) => ({
//   type: SORT_NEWS_FAIL,
//   warning,
// });

// Refreshing

export const refreshNews = () => ({
  type: REFRESH_NEWS,
});

export const pushRefreshedNews = (news) => ({
  type: REFRESH_NEWS_SUCCESS,
  news,
});

export const showRefreshedWarning = (warning) => ({
  type: REFRESH_NEWS_FAIL,
  warning,
});

//

export const showWarning = (warning) => ({
  type: SHOW_WARNING,
  warning,
});

export const hideWarning = () => ({
  type: HIDE_WARNING,
});
