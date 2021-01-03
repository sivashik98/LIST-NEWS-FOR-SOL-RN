import React from 'react';
import Svg, {Path} from 'react-native-svg';

const LogOut = (props) => (
  <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <Path
      d="M8.602 11.278l.672.722L13 8.003 9.28 4l-.673.722 1.716 1.891c.297.334.652.604 1.044.793h.034H0V8.6h11.4-.055a3.338 3.338 0 00-1.022.763l-1.721 1.915z"
      fill="#1F88E5"
    />
    <Path
      d="M5 3.462h1.1V1.154h8.8v13.692H6.1V12.54H5V16h11V0H5v3.462z"
      fill="#1F88E5"
    />
  </Svg>
);

export default LogOut;
