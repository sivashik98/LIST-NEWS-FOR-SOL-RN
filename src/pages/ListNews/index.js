import React, {useState, useEffect, useRef} from 'react';
import {View, StyleSheet, FlatList, Linking, Dimensions} from 'react-native';

import NewsCard from './NewsCard';
import SearchBar from '../../components/SearchBar';
import StyledModal from '../../components/StyledModal';
import Loader from '../../components/Loader';
import StyledText from '../../components/StyledText';

const initialNumToRender = 8;
const onEndReachedThreshold = 1.5;
const windowHeight = Dimensions.get('window').height - 100;

const ListNews = ({
  news,
  warning,
  isFetching,
  isLoading,
  isSorting,
  isRefreshing,
  onFetchData,
  onLoadData,
  onSort,
  onRefresh,
  onShowWarning,
  onHideWarning,
}) => {
  const [highlightText, setHighlightText] = useState('');
  const refTextInput = useRef(null);
  const refFlatList = useRef(null);

  useEffect(() => {
    onFetchData && onFetchData();
  }, []);

  const handlePress = (link) => async () => {
    const supported = await Linking.canOpenURL(`${link}`);
    const newError = 'Некорректная ссылка';

    if (supported) {
      await Linking.openURL(link);
    } else {
      onShowWarning(newError);
    }
  };

  const handleLoadMore = () => {
    if (!isSorting) {
      onLoadData && onLoadData();
    }
  };

  const handleScroll = () => {
    refTextInput.current.blur();
  };

  const handleRefresh = () => {
    onRefresh && onRefresh();
  };

  const handleScrollToTop = () => {
    refFlatList.current.scrollToOffset({animated: true, y: 0});
  };

  const handleCleanHighlight = () => {
    setHighlightText('');
    onSort && onSort('');
  };

  const renderItem = ({item}) => {
    return (
      <NewsCard
        title={item.title}
        highlightText={highlightText}
        imageUrl={item.imageUrl}
        source={item.newsSite}
        published={item.publishedAt}
        onPress={handlePress(item.url)}
      />
    );
  };

  const renderFooterLoader = () => {
    return <Loader />;
  };

  const renderEmptyList = () => {
    return (
      <View style={styles.listNews__emptyWrp}>
        <StyledText style={styles.listNews__emptyText}>
          Список новостей пуст
        </StyledText>
      </View>
    );
  };

  if (isFetching) {
    return <Loader size={'large'} />;
  }

  return (
    <>
      <SearchBar
        ref={refTextInput}
        text={highlightText}
        onSort={onSort}
        setText={setHighlightText}
        onClean={handleCleanHighlight}
        onScroll={handleScrollToTop}
      />

      <FlatList
        ref={refFlatList}
        data={news}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
        removeClippedSubviews={true}
        scrollEnabled={!!news.length}
        initialNumToRender={initialNumToRender}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={onEndReachedThreshold}
        onScrollBeginDrag={handleScroll}
        ListFooterComponent={isLoading && !isSorting && renderFooterLoader}
        ListEmptyComponent={renderEmptyList}
        ListFooterComponentStyle={styles.listNews__footer}
      />

      <StyledModal
        state={warning}
        text={warning}
        isTransparent={true}
        hasButton={true}
        onClose={onHideWarning}
      />
    </>
  );
};

const styles = StyleSheet.create({
  listNews__emptyWrp: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: windowHeight,
  },

  listNews__emptyText: {
    fontSize: 24,
    color: '#7d869b',
    fontFamily: 'Roboto-Regular',
  },

  listNews__footer: {
    marginTop: 30,
    marginBottom: 30,
  },
});

export default ListNews;
