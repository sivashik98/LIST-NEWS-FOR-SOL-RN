import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Arrow = ({color, ...props}) => (
  <Svg width={8} height={12} viewBox="0 0 8 12" fill="none" {...props}>
    <Path
      d="M7.41 1.41L6 0 0 6l6 6 1.41-1.41L2.83 6l4.58-4.59z"
      fill={color || '#fff'}
    />
  </Svg>
);

export default Arrow;
