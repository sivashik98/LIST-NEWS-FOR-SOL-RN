import React, {useState, useEffect, useRef, useMemo} from 'react';
import {View, StyleSheet, FlatList, Linking} from 'react-native';

import SearchBar from '../../components/SearchBar';
import NewsCard from '../../components/NewsCard';
import StyledModal from '../../components/StyledModal';
import Loader from '../../components/Loader';

const initialNumToRender = 8;
const onEndReachedThreshold = 0.5;

const ListNews = ({
  news,
  warning,
  isFetching,
  isLoading,
  onFetchData,
  onLoadData,
  onFilter,
  onHideWarning,
}) => {
  const [refreshing, setRefreshing] = useState(false);
  const [highlight, setHighlight] = useState('');
  const refTextInput = useRef(null);

  useEffect(() => {
    onFetchData && onFetchData();
  }, []);

  const handlePress = (link) => async () => {
    const supported = await Linking.canOpenURL(`ы${link}`);

    if (supported) {
      await Linking.openURL(link);
    } else {
      // setError('Некорректная ссылка');
    }
  };

  const handleScroll = ({nativeEvent}) => {
    refTextInput.current.blur();
  };

  // const handleFilterNews = (text) => {
  //   setNews(
  //     newsConst.current.filter((el) => el.title.toLowerCase().includes(text)),
  //   );
  //
  //   setHighlight(text);
  // };

  // const handleRefresh = () => {
  //   setRefreshing(true);
  //
  //   return () => {
  //     setRefreshing(false);
  //   };
  // };

  const handleLoadMore = () => {
    onLoadData && onLoadData();
  };

  const renderItem = ({item}) => {
    // console.log(index);
    return (
      <NewsCard
        title={item.title}
        highlight={highlight}
        imageUrl={item.imageUrl}
        onPress={handlePress(item.url)}
      />
    );
  };

  const renderFooterLoader = () => {
    return (
      <View style={styles.listNews__footer}>
        <Loader />
      </View>
    );
  };

  if (isFetching) {
    return <Loader size={'large'} />;
  }
  // console.log(news);
  return (
    <View style={styles.home}>
      <SearchBar
        ref={refTextInput}
        onFilter={onFilter}
        onHighlight={setHighlight}
      />

      <FlatList
        data={news}
        renderItem={renderItem}
        keyExtractor={(item: object) => item.id}
        onScroll={handleScroll}
        // onRefresh={handleRefresh}
        refreshing={refreshing}
        removeClippedSubviews={true}
        windowSize={11}
        // ListEmptyComponent={() => {}}
        ListFooterComponent={isLoading && renderFooterLoader}
        // ListFooterComponentStyle={() => {}}
        initialNumToRender={initialNumToRender}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={onEndReachedThreshold}
      />

      <StyledModal
        state={warning}
        text={warning}
        isTransparent={true}
        isButton={true}
        onClose={onHideWarning}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: '#fff',
  },

  listNews__footer: {
    height: 60,
  },
});

export default ListNews;

// TODO: 1) При load контента думаю лучше в саге юзать takeLatest + 2) Скролл не отрубать не юзабельно +
// 3) Повторяющийся контент проверить мой ли это косяк с редьюсером или чем еще + 4) И допиливать остальное

// 5) Узнать когда закончились посты чтобы выключать Loader в футере скролла
