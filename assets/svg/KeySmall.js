import React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = ({color = '#fff', ...props}) => (
  <Svg width={19} height={20} viewBox="0 0 19 20" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.491 15.903a1.637 1.637 0 000 2.338 1.69 1.69 0 002.368 0l.473-.462 1.972 1.943a.864.864 0 001.216 0l2.939-2.896a.835.835 0 000-1.198l-1.972-1.943 3.512-3.466a5.53 5.53 0 002.512.599c3.032 0 5.489-2.421 5.489-5.409C19 2.422 16.543 0 13.511 0 10.48 0 8.023 2.422 8.023 5.409c0 .89.22 1.735.608 2.476L.49 15.903zm10.91-10.494c0-1.148.945-2.08 2.11-2.08 1.166 0 2.111.932 2.111 2.08 0 1.148-.945 2.08-2.11 2.08-1.166 0-2.112-.932-2.112-2.08z"
      fill={color}
    />
  </Svg>
);

export default SvgComponent;
