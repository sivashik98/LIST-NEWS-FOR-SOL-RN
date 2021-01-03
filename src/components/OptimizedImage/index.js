import React from 'react';
import FastImage from 'react-native-fast-image';
import {compose} from '../../helpers/stylecompose';

const OptimizedImage = ({
  resizeMode,
  source,
  onLoadStart,
  onLoadEnd,
  styles,
}) => {
  return (
    <FastImage
      source={{
        uri: source,
        // headers: {Authorization: 'someAuthToken'},
        priority: FastImage.priority.high,
      }}
      resizeMode={FastImage.resizeMode[resizeMode]}
      onLoadStart={onLoadStart}
      onLoadEnd={onLoadEnd}
      style={compose(styles)}
    />
  );
};

export default OptimizedImage;
