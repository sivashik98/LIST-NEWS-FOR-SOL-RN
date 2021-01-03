import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Key = (props) => (
  <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
      fill="#1F88E5"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.695 16.017a.994.994 0 000 1.404.99.99 0 001.402 0l.28-.277 1.168 1.167c.2.2.52.2.72 0l1.74-1.74c.2-.2.2-.52 0-.72l-1.168-1.167 2.08-2.082a3.25 3.25 0 10-1.403-1.403l-4.82 4.818zm6.46-6.306a1.25 1.25 0 112.5.001 1.25 1.25 0 01-2.5 0z"
      fill="#fff"
    />
  </Svg>
);

export default Key;
