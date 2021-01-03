import React from 'react';
import Svg, {G, Path} from 'react-native-svg';

const Folder = (props) => (
  <Svg width={19} height={19} viewBox="0 0 19 19" {...props}>
    <G fill="none" fillRule="evenodd">
      <Path fill="#FDD54A" d="M.065 2.464L10.67.459v17.97L.065 16.428z" />
      <Path
        d="M10.64 2.253h4.87c.817 0 1.48 1.315 1.48 1.315s0-.537 0 0V8.69l1.798 1.294v2.553a4.102 4.102 0 01-4.097 4.1h-4.074c-.033 0-.018-14.383.022-14.383z"
        fill="#D9AF45"
      />
    </G>
  </Svg>
);

export default Folder;
