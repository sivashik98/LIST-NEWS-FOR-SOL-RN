import React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = (props) => (
  <Svg width={14} height={20} viewBox="0 0 14 20" fill="none" {...props}>
    <Path
      d="M7 0C3.13 0 0 3.13 0 7c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"
      fill="#A7B3C9"
    />
  </Svg>
);

export default SvgComponent;
