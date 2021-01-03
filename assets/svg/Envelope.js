import React from 'react';
import Svg, {Path} from 'react-native-svg';

function Envelope(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.135 16.83L18 15l5.923-5.077-.808-.808L14.5 16.5 5.885 9.115l-.808.808L11 15l-5.923 5.077.808.808 5.99-5.135L14.5 18l2.625-2.25 2.441 2.093A6.477 6.477 0 0019 20.5c0 .886.177 1.73.498 2.5H4.004A1.994 1.994 0 012 21.006V8.994A2 2 0 014.004 7h20.992C26.11 7 27 7.893 27 8.994v5.18A6.52 6.52 0 0025.5 14a6.493 6.493 0 00-5.365 2.83zM25.5 26a5.5 5.5 0 100-11 5.5 5.5 0 000 11z"
        fill="#fff"
      />
      <Path
        d="M26.25 19.375v-1.5l2.625 2.625-2.625 2.625v-1.538c-1.875 0-3.188.6-4.125 1.913.375-1.875 1.5-3.75 4.125-4.125z"
        fill="#1F88E5"
      />
    </Svg>
  );
}

export default Envelope;
