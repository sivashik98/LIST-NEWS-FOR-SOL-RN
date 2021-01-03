import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Word = (props) => (
  <Svg width={19} height={18} viewBox="0 0 19 18" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 2h7.097c.499 0 .903.433.903.968v13.064c0 .535-.405.968-.903.968H11V2zm0 1h7v13h-7V3zM0 2.008L11 0v18L0 15.994V2.008z"
      fill="#2372BA"
    />
    <Path
      fill="#2372BA"
      d="M11 4h6v1h-6zM11 6h6v1h-6zM11 8h6v1h-6zM11 14h6v1h-6zM11 10h6v1h-6zM11 12h6v1h-6z"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 6.527l1.104-.095.676 4.015.929-4.1 1.183-.11.98 4.409.833-4.552L9 6l-1.497 6-1.344-.066-.926-4.09-.904 3.987-1.225-.123L2 6.528z"
      fill="#fff"
    />
  </Svg>
);

export default Word;
