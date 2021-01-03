import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Image} from 'react-native';

import StyledText from '../StyledText';
import {compose} from '../../helpers/stylecompose';
import Loader from '../Loader';
import OptimizedImage from '../OptimizedImage';

const activeOpacity = 0.6;

export default class NewsCard extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      loading: false,
    };
  }

  // const [loading, setLoading] = useState(false);

  // const index = title.toLowerCase().indexOf(highlight.toLowerCase());
  // const first = title.slice(0, index);
  // const middle = title.slice(index, first.length + highlight.length);
  // const last = title.slice(first.length + middle.length);

  handleClick = () => {
    const {onPress} = this.state;

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
      imageUrl,
      title,
      highlight,
      onPress,
      containerStyle,
      ...rest
    } = this.props;

    const index = title.toLowerCase().indexOf(highlight.toLowerCase());
    const first = title.slice(0, index);
    const middle = title.slice(index, first.length + highlight.length);
    const last = title.slice(first.length + middle.length);

    return (
      <TouchableOpacity
        activeOpacity={activeOpacity}
        onPress={this.handleClick}>
        <View style={compose(styles.newsCard, containerStyle)} {...rest}>
          {index > -1 ? (
            <StyledText styles={styles.newsCard__title} numberOfLines={1}>
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
            <StyledText styles={styles.newsCard__title} numberOfLines={1}>
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
        </View>
      </TouchableOpacity>
    );
  }
}

// imageUrl,
//   title,
//   highlight,
//   onPress,
//   containerStyle,
// ...rest

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
    fontSize: 20,
  },

  'newsCard__title--bold': {
    fontWeight: 'bold',
    color: '#000',
    backgroundColor: 'rgba(255,254,178,0.73)',
  },

  newsCard__wrapImg: {
    marginTop: 10,
  },

  newsCard__img: {
    borderWidth: 2,
    borderColor: '#f5f5f5',
    width: '100%',
    height: 150,
  },
});
