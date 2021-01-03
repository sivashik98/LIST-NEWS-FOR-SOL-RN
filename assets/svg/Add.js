import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Add = (props) => (
  <Svg width={14} height={14} viewBox="0 0 14 14" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 0v6H0v2h6v6h2V8h6V6H8V0H6z"
      fill="#1F88E5"
    />
  </Svg>
);

export default Add;
