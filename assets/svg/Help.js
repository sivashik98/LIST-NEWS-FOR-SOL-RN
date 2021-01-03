import React from 'react';
import {Platform} from 'react-native';
import Svg, {Rect, Path} from 'react-native-svg';

function SvgComponent({fill, ...props}) {
  return Platform.OS === 'ios' ? (
    <Svg width={22} height={22} viewBox="0 0 22 22" fill="none" {...props}>
      <Rect width={22} height={22} rx={11} fill={fill || '#fff'} />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 11c0 5.52 4.48 10 10 10s10-4.48 10-10S16.52 1 11 1 1 5.48 1 11zm8.85 4.4h1.9v1.9h-1.9v-1.9zm3.867-5.463l-.856.875c-.684.693-1.111 1.263-1.111 2.688h-1.9v-.475c0-1.045.428-1.995 1.111-2.689L12.14 9.14c.352-.341.561-.816.561-1.339 0-1.045-.855-1.9-1.9-1.9s-1.9.855-1.9 1.9H7C7 5.7 8.7 4 10.8 4c2.1 0 3.8 1.7 3.8 3.8 0 .836-.342 1.596-.883 2.138z"
        fill="#314173"
      />
    </Svg>
  ) : (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 0C4.48 0 0 4.48 0 10s4.48 10 10 10 10-4.48 10-10S15.52 0 10 0zm1 17H9v-2h2v2zm2.07-7.75l-.9.92C11.45 10.9 11 11.5 11 13H9v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H6c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"
        fill={fill || '#fff'}
        fillOpacity={0.5}
      />
    </Svg>
  );
}

export default SvgComponent;
