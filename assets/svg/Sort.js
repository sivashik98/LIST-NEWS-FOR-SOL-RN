import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Sort = (props) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path fillRule="evenodd" clipRule="evenodd" d="M0 2h16l-6 5H6L0 2z" />
    <Path d="M6 7h4v9H6zM0 0h16v2H0z" />
  </Svg>
);

export default Sort;
