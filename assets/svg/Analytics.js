import React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = ({color = '#fff', ...props}) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.5 20h5V0h-5v20zM0 20h5V10H0v10zm15 0h5V6.25h-5V20z"
      fill={color}
    />
  </Svg>
);

export default SvgComponent;
