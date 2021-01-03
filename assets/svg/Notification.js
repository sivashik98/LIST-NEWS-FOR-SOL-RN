import React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = ({color = '#fff', ...props}) => (
  <Svg width={19} height={20} viewBox="0 0 19 20" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.173 20c1.106 0 2-.894 2-2h-4c0 1.106.895 2 2 2zM15.96 9.044c0-3.266-2.261-5.999-5.316-6.723v-.723C10.643.714 9.928 0 9.044 0 8.16 0 7.447.714 7.447 1.598v.723A6.907 6.907 0 002.13 9.044v5.14L0 16.314v1.066h18.088v-1.066l-2.13-2.13v-5.14z"
      fill={color}
    />
  </Svg>
);

export default SvgComponent;
