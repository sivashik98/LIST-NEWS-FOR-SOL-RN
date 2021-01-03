import React from 'react';
import Svg, {Path} from 'react-native-svg';

import {compose} from '../../src/helpers/stylecompose';

function Lock(props) {
  const {style} = props;

  return (
    <Svg width={19} height={22} viewBox="0 0 19 22" fill="none" {...props}>
      <Path
        d="M16.498 9.168H5.5V6.6c0-1.924 1.375-3.666 3.3-3.85 2.2-.182 4.033 1.559 4.033 3.667 0 .55.367.917.917.917h.916c.55 0 .917-.367.917-.917A6.398 6.398 0 009.349.002c-3.575-.092-6.6 2.841-6.6 6.416v2.75h-.916A1.839 1.839 0 000 11v6.416C0 19.983 2.016 22 4.583 22h9.166c2.566 0 4.583-2.017 4.583-4.583v-6.416a1.839 1.839 0 00-1.834-1.833zm-6.416 7.058v1.191c0 .458-.458.917-.916.917s-.917-.459-.917-.917v-1.192c-.55-.274-.916-.916-.916-1.558 0-1.008.825-1.833 1.833-1.833s1.833.825 1.833 1.833c0 .642-.367 1.284-.917 1.559z"
        style={compose({fill: '#1F88E5'}, style)}
      />
    </Svg>
  );
}

export default Lock;
