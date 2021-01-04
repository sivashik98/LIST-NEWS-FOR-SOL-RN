import React from 'react';
import moment from 'moment';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

import StyledText from '../../../components/StyledText';
import {compose} from '../../../helpers/stylecompose';
import Loader from '../../../components/Loader';
import OptimizedImage from '../../../components/OptimizedImage';

const activeOpacity = 0.6;
const numberOfLines = 2;

export default class NewsCard extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
    };
  }

  handlePress = () => {
    const {onPress} = this.props;

    onPress && onPress();
  };

  handleLoadStart = () => {
    this.setState({loading: true});
  };

  handleLoadEnd = () => {
    this.setState({loading: false});
  };

  render() {
    const {loading} = this.state;
    const {
      title,
      highlightText,
      imageUrl,
      source,
      published,
      onPress,
      containerStyle,
      ...rest
    } = this.props;

    const index = title.toLowerCase().indexOf(highlightText.toLowerCase());
    const first = title.slice(0, index);
    const middle = title.slice(index, first.length + highlightText.length);
    const last = title.slice(first.length + middle.length);
    const date =
      moment(published).format('MMMM Do ') +
      ' at ' +
      moment(published).format('h:mm');

    return (
      <TouchableOpacity
        activeOpacity={activeOpacity}
        onPress={this.handlePress}>
        <View style={compose(styles.newsCard, containerStyle)} {...rest}>
          {index > -1 ? (
            <StyledText
              styles={styles.newsCard__title}
              numberOfLines={numberOfLines}>
              {first}
              <StyledText
                styles={[
                  styles.newsCard__title,
                  styles['newsCard__title--bold'],
                ]}>
                {middle}
              </StyledText>
              {last}
            </StyledText>
          ) : (
            <StyledText
              styles={styles.newsCard__title}
              numberOfLines={numberOfLines}>
              {title}
            </StyledText>
          )}

          <View style={styles.newsCard__wrapImg}>
            {loading && <Loader />}

            <OptimizedImage
              styles={styles.newsCard__img}
              source={imageUrl}
              resizeMode="cover"
              onLoadStart={this.handleLoadStart}
              onLoadEnd={this.handleLoadEnd}
            />
          </View>

          <View style={styles.newsCard__subTitleWrp}>
            <StyledText
              style={
                styles.newsCard__subTitle
              }>{`Source: ${source}`}</StyledText>

            <StyledText
              style={[
                styles.newsCard__subTitle,
                styles['newsCard__subTitle--date'],
              ]}>
              {date}
            </StyledText>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  newsCard: {
    padding: 20,
    margin: 5,
    backgroundColor: '#e5e2e3',
    borderWidth: 1,
    borderColor: '#dad7d8',
    borderRadius: 2,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {width: 0, height: 1},
    elevation: 3,
  },

  newsCard__title: {
    fontSize: 18,
  },

  'newsCard__title--bold': {
    fontWeight: 'bold',
    color: '#000',
    backgroundColor: 'rgba(255,254,178,0.73)',
  },

  newsCard__subTitleWrp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },

  newsCard__subTitle: {
    flex: 1,
    color: '#000',
    fontSize: 16,
  },

  'newsCard__subTitle--date': {
    textAlign: 'right',
    fontSize: 14,
  },

  newsCard__wrapImg: {
    marginTop: 10,
  },

  newsCard__img: {
    borderWidth: 2,
    borderColor: '#f5f5f5',
    width: '100%',
    height: 150,
    borderRadius: 8,
  },
});
