import React from 'react';
import {SafeAreaView} from 'react-navigation';

import {useDispatch, useSelector} from 'react-redux';
import {
  fetchNews,
  loadNews,
  hideWarning,
  filterNews,
} from '../../store/actions/news';

import ListNews from '../../pages/ListNews';
import {
  getNews,
  getFetchingStatus,
  getLoadingStatus,
  getWarning,
} from '../../store/selectors/news';

const ListNewsScreen = () => {
  const dispatch = useDispatch();
  const news = useSelector(getNews);
  const isFetching = useSelector(getFetchingStatus);
  const isLoading = useSelector(getLoadingStatus);
  const warning = useSelector(getWarning);

  const handleFetchData = () => {
    dispatch(fetchNews());
  };

  const handleLoadData = () => {
    const from = news.length;

    dispatch(loadNews(from));
  };

  const handleFilterData = (filterLetters) => {
    dispatch(filterNews(filterLetters));
  };

  const handleHideWarning = () => {
    dispatch(hideWarning());
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ListNews
        news={news}
        warning={warning}
        isLoading={isLoading}
        isFetching={isFetching}
        onFetchData={handleFetchData}
        onLoadData={handleLoadData}
        onFilter={handleFilterData}
        onHideWarning={handleHideWarning}
      />
    </SafeAreaView>
  );
};

export default ListNewsScreen;
