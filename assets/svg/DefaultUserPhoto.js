import React from 'react';
import Svg, {Defs, Ellipse, Path, G, Mask, Use} from 'react-native-svg';

import {compose} from '../../src/helpers/stylecompose';

const DefaultUserPhoto = (props) => {
  const {style, width, height} = props;

  return (
    <Svg
      viewBox="0 0 50 51"
      width={50 || width}
      height={51 || height}
      style={compose(style)}
      {...props}>
      <Defs>
        <Ellipse id="prefix__a" cx={25} cy={24.992} rx={25} ry={24.992} />
        <Path
          id="prefix__c"
          d="M34.349 8.183c3.724.98 11.172 2.891 11.172 2.891 1.568.539 2.793 1.715 3.479 3.234v4.802s-15.604 5.055-24.5 5.055C17.062 24.165 0 19.11 0 19.11v-4.802a5.818 5.818 0 013.479-3.234s7.448-1.911 11.172-2.891c1.176-.294 3.479-.882 3.479-2.842V0h12.74v5.341c0 1.96 2.303 2.548 3.479 2.842z"
        />
      </Defs>
      <G transform="translate(0 .869)" fill="none" fillRule="evenodd">
        <Mask id="prefix__b" fill="#fff">
          <Use xlinkHref="#prefix__a" />
        </Mask>
        <Use fill="#DBE2EE" xlinkHref="#prefix__a" />
        <G mask="url(#prefix__b)">
          <G transform="translate(1 29.89)">
            <Mask id="prefix__d" fill="#fff">
              <Use xlinkHref="#prefix__c" />
            </Mask>
            <G mask="url(#prefix__d)" fill="#C0CADA">
              <Path d="M34.349 8.183c3.724.98 11.172 2.891 11.172 2.891 1.568.539 2.793 1.715 3.479 3.234v4.802s-16.266 6.993-24.5 6.993C16.4 26.103 0 19.11 0 19.11v-4.802a5.818 5.818 0 013.479-3.234s7.448-1.911 11.172-2.891c1.176-.294 3.479-.882 3.479-2.842V0h12.74v5.341c0 1.96 2.303 2.548 3.479 2.842z" />
            </G>
            <Path
              d="M24.598-24.5h.098c1.617 0 4.018.098 5.586.98 1.617.931 3.577 2.744 4.165 5.929 1.176 6.713-1.029 17.346-3.087 20.776-1.96 3.283-4.802 4.508-6.615 4.606H24.451c-1.813-.098-4.655-1.323-6.615-4.606-2.058-3.43-4.263-14.063-3.087-20.776.588-3.185 2.548-4.998 4.165-5.929 1.568-.882 3.969-.98 5.586-.98h.098z"
              fill="#A6AFC1"
              mask="url(#prefix__d)"
            />
          </G>
          <Path
            d="M25.304 7.84c9.359 0 10.143 6.762 10.192 7.399.539 5.831-1.47 13.769-3.332 16.513-1.96 2.891-4.802 3.969-6.615 4.067h-.245c-1.862-.147-4.704-1.225-6.664-4.116-1.862-2.744-3.871-10.682-3.332-16.562.049-.588.637-7.301 9.996-7.301z"
            fill="#C9D1DF"
          />
        </G>
      </G>
    </Svg>
  );
};

export default DefaultUserPhoto;
