import React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

function Success(props) {
  return (
    <Svg width={65} height={65} viewBox="0 0 65 65" fill="none" {...props}>
      <Circle
        cx={32.5}
        cy={32.5}
        r={32}
        fill="#6EBD2F"
        fillOpacity={0.1}
        stroke="#6EBD2F"
      />
      <Path
        d="M26.805 39.724l-8.06-7.774L16 34.579 26.805 45 50 22.629 47.275 20l-20.47 19.724z"
        fill="#6EBD2F"
      />
    </Svg>
  );
}

export default Success;
