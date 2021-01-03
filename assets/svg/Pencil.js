import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {compose} from '../../src/helpers/stylecompose';

function Pencil(props) {
  const {style} = props;

  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <G style={compose({fill: '#1F88E5'}, style)}>
        <Path d="M3 17.253v3.75h3.75l11.06-11.06-3.75-3.75L3 17.253zm17.71-10.21a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83zM11 19h10v2H11z" />
      </G>
    </Svg>
  );
}

export default Pencil;
