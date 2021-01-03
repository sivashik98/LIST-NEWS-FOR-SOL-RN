import React from 'react';
import Svg, {Path} from 'react-native-svg';

function Restore(props) {
  return (
    <Svg width={24} height={30} viewBox="0 0 24 30" fill="none" {...props}>
      <Path
        d="M17.333 2.667V0L22 4.667l-4.667 4.666V6.6C14 6.6 11.667 7.667 10 10c.667-3.333 2.667-6.667 7.333-7.333zM6 25c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V13H6v12z"
        fill="#fff"
      />
      <Path
        d="M.925 1.76l1.33 3.237-.546 1.305 1.9 4.626 1.305.545 1.33 3.237 1.85-.76L2.774 1l-1.85.76z"
        fill="#fff"
      />
    </Svg>
  );
}

export default Restore;
