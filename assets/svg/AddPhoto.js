import React from 'react';
import Svg, {Circle, G, Path, Defs, ClipPath} from 'react-native-svg';

function AddPhoto(props) {
  return (
    <Svg width={30} height={30} viewBox="0 0 30 30" fill="none" {...props}>
      <Circle
        cx={15}
        cy={15}
        r={13.5}
        fill="#1F88E5"
        stroke="#fff"
        strokeWidth={3}
      />
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M9.75 10V8.35h1.1V10h1.65v1.1h-1.65v1.65h-1.1V11.1H8.1V10h1.65zm1.65 3.3v-1.65h1.65V10h3.85l1.007 1.1h1.743c.605 0 1.1.495 1.1 1.1v6.6c0 .605-.495 1.1-1.1 1.1h-8.8c-.605 0-1.1-.495-1.1-1.1v-5.5h1.65zm3.85 4.95a2.751 2.751 0 000-5.5 2.751 2.751 0 000 5.5zm-1.76-2.75c0 .974.787 1.76 1.76 1.76.974 0 1.76-.787 1.76-1.76s-.786-1.76-1.76-1.76c-.973 0-1.76.787-1.76 1.76z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M8.1 7.8h13.2V21H8.1z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default AddPhoto;
