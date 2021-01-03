import React from 'react';
import Svg, {G, Path} from 'react-native-svg';

const Other = (props) => (
  <Svg width={19} height={19} viewBox="0 0 19 19" {...props}>
    <G fill="#56688A" fillRule="evenodd">
      <Path d="M10.689 2.266h7.213c.507 0 .918.414.918.927v12.51a.923.923 0 01-.918.928H10.69V2.266zm0 .728h7.344v12.908H10.69V2.994z" />
      <Path d="M.065 2.465L10.69.459v17.976L.065 16.432z" />
      <Path d="M10.689 4.185h6.23v.794h-6.23zM10.689 6.105h6.23V6.9h-6.23zM10.689 8.025h6.23v.794h-6.23zM10.689 9.945h6.23v.794h-6.23zM10.689 11.864h6.23v.794h-6.23zM10.689 13.85h6.23v.794h-6.23z" />
    </G>
  </Svg>
);

export default Other;
