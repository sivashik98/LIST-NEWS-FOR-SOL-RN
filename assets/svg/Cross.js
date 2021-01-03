import React from 'react';
import Svg, {Rect} from 'react-native-svg';

const Cross = ({color, fill, ...props}) => (
  <Svg width={18} height={18} viewBox="0 0 18 18" fill="none" {...props}>
    <Rect
      x={3.751}
      y={5.249}
      width={2.121}
      height={12.728}
      rx={1.061}
      transform="rotate(-45 3.75 5.25)"
      fill={color || fill || '#4E81AD'}
    />
    <Rect
      x={5.25}
      y={14.249}
      width={2.121}
      height={12.728}
      rx={1.061}
      transform="rotate(-135 5.25 14.25)"
      fill={color || fill || '#4E81AD'}
    />
  </Svg>
);

export default Cross;
