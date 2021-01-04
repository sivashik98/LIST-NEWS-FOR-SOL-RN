import React from 'react';
import {SafeAreaView} from 'react-navigation';
import {useDispatch, useSelector} from 'react-redux';

import ListNews from '../../pages/ListNews';
import {
  fetchNews,
  loadNews,
  sortNews,
  refreshNews,
  hideWarning,
  showWarning,
} from '../../store/actions/news';
import {
  getNews,
  getFetchingStatus,
  getLoadingStatus,
  getSortingStatus,
  getRefreshingStatus,
  getWarning,
} from '../../store/selectors/news';

const ListNewsScreen = () => {
  const dispatch = useDispatch();
  const news = useSelector(getNews);
  const isFetching = useSelector(getFetchingStatus);
  const isLoading = useSelector(getLoadingStatus);
  const isSorting = useSelector(getSortingStatus);
  const isRefreshing = useSelector(getRefreshingStatus);
  const storedWarning = useSelector(getWarning);

  const handleFetchData = () => {
    dispatch(fetchNews());
  };

  const handleLoadData = () => {
    const from = news.length;

    dispatch(loadNews(from));
  };

  const handleSortData = (sortLetters) => {
    dispatch(sortNews(sortLetters));
  };

  const handleRefreshData = () => {
    dispatch(refreshNews());
  };

  const handleHideWarning = () => {
    dispatch(hideWarning());
  };

  const handleShowWarning = (warning) => {
    dispatch(showWarning(warning));
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ListNews
        news={news}
        warning={storedWarning}
        isLoading={isLoading}
        isFetching={isFetching}
        isSorting={isSorting}
        isRefreshing={isRefreshing}
        onFetchData={handleFetchData}
        onLoadData={handleLoadData}
        onSort={handleSortData}
        onRefresh={handleRefreshData}
        onShowWarning={handleShowWarning}
        onHideWarning={handleHideWarning}
      />
    </SafeAreaView>
  );
};

export default ListNewsScreen;
