import React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = ({color = '#fff', ...props}) => (
  <Svg width={22} height={20} viewBox="0 0 22 20" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.53 2.35l1.34-.56v9.03L.44 4.96C.03 3.94.52 2.77 1.53 2.35zm19.5 3.7l-4.96 11.97c-.31.75-1.04 1.21-1.81 1.23-.26 0-.53-.04-.79-.15L6.1 16.05a1.999 1.999 0 01-1.08-2.6L9.98 1.48A1.998 1.998 0 0112.58.4l7.36 3.05c1.02.42 1.51 1.59 1.09 2.6zM4.88 2.25c0-1.1.9-2 2-2h1.45L4.88 8.59V2.25z"
      fill={color}
    />
  </Svg>
);

export default SvgComponent;
