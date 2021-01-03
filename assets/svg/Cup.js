import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Cup = (props) => (
  <Svg width={16} height={14} viewBox="0 0 16 14" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 0c0 6 2.25 12 5 12s5-5.914 5-12H3z"
      fill="#1F88E5"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9 7H7.355V5.08H6v-.96c.968 0 1.548-.8 1.645-1.12H9v4z"
      fill="#fff"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.6 11c-.48.324-1.04.568-1.6.568S6.88 11.324 6.4 11c.32 1.54-2.4 1.297-2.4 3h8c0-1.703-2.72-1.46-2.4-3z"
      fill="#1F88E5"
    />
    <Path
      d="M12 3h3c0 5.229-2.625 2.657-3 6M4 3H1c0 5.229 2.625 2.657 3 6"
      stroke="#1F88E5"
      strokeWidth={2}
    />
  </Svg>
);

export default Cup;
