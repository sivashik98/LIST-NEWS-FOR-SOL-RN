import React from 'react';
import Svg, {G, Path} from 'react-native-svg';

const Text = (props) => (
  <Svg width={19} height={19} viewBox="0 0 19 19" {...props}>
    <G fill="#000" fillRule="evenodd">
      <Path d="M10.685 2.265h7.212c.507 0 .918.415.918.927V15.7a.923.923 0 01-.918.927h-7.212V2.266zm0 .728h7.343v12.905h-7.342V2.993z" />
      <Path d="M.065 2.464L10.685.459v17.97L.065 16.428V2.464zm.655.762l9.182-1.787v16.01L.72 15.665V3.225zM10.685 4.184h6.228v.794h-6.228zM10.685 6.103h6.228v.794h-6.228zM10.685 8.023h6.228v.794h-6.228zM10.685 9.942h6.228v.794h-6.228zM10.685 11.861h6.228v.794h-6.228zM10.685 13.846h6.228v.794h-6.228z" />
    </G>
  </Svg>
);

export default Text;
