import React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = ({color = '#fff', ...props}) => (
  <Svg width={21} height={20} viewBox="0 0 21 20" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.92 3.706h-4.422V2.08c0-1.154-.926-2.08-2.08-2.08H8.257c-1.155 0-2.08.926-2.08 2.08v1.626H2.08c-1.155 0-2.07.925-2.07 2.08L0 17.684c0 1.155.925 2.08 2.08 2.08h16.84c1.154 0 2.08-.925 2.08-2.08V5.786c0-1.155-.926-2.08-2.08-2.08zM8.191 2.08h4.161v1.626h-4.16V2.08z"
      fill={color}
    />
  </Svg>
);

export default SvgComponent;
