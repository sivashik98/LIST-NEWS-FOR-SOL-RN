import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Excel = (props) => (
  <Svg width={19} height={18} viewBox="0 0 19 18" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 2h7.097c.499 0 .903.433.903.968v13.064c0 .535-.405.968-.903.968H11V2zm0 1h7v13h-7V3zM0 2.008L11 0v18L0 15.994V2.008z"
      fill="#08743B"
    />
    <Path
      fill="#08743B"
      d="M11 4h6v1h-6zM11 6h6v1h-6zM11 8h6v1h-6zM11 14h6v1h-6zM11 10h6v1h-6zM11 12h6v1h-6z"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.034 9.992L3.77 11.855 2 11.795l2.197-2.992-1.775-2.621 1.79-.061.83 1.444.885-1.503L7.747 6l-1.86 2.8L8 12l-1.763-.06-1.203-1.948z"
      fill="#fff"
    />
  </Svg>
);

export default Excel;
