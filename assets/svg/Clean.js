import React from 'react';
import Svg, {Path} from 'react-native-svg';

import {compose} from '../../src/helpers/stylecompose';

const Clean = (props) => {
  const {style, width, height} = props;

  return (
    <Svg
      width={14 || width}
      height={18 || height}
      viewBox="0 0 14 18"
      {...props}>
      <Path
        d="M1 16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4H1v12zM14 1h-3.5l-1-1h-5l-1 1H0v2h14V1z"
        style={compose({fill: '#fff'}, style)}
      />
    </Svg>
  );
};

export default Clean;
