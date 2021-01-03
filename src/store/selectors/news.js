export const getNews = (store) => {
  return store.news.news;
};

export const getFetchingStatus = (store) => {
  return store.news.isFetching;
};

export const getLoadingStatus = (store) => {
  return store.news.isLoading;
};

export const getWarning = (store) => {
  return store.news.warning;
};
