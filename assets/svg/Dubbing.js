import React from 'react';
import Svg, {Path} from 'react-native-svg';

function Dubbing(props) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <Path
        d="M13.333.833h-10c-.917 0-1.667.75-1.667 1.667v11.667h1.667V2.5h10V.833zM12.5 4.167l5 5V17.5c0 .917-.75 1.667-1.667 1.667H6.658C5.741 19.167 5 18.417 5 17.5l.008-11.667c0-.916.742-1.666 1.659-1.666H12.5zM11.666 10h4.584l-4.584-4.583V10z"
        fill="#5BB1FF"
      />
    </Svg>
  );
}

export default Dubbing;
