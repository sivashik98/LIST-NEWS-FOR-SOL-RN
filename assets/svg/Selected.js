import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Selected = ({checked, style, ...props}) => {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      {checked ? (
        <Path
          d="M8 4.25C5.93 4.25 4.25 5.93 4.25 8c0 2.07 1.68 3.75 3.75 3.75 2.07 0 3.75-1.68 3.75-3.75 0-2.07-1.68-3.75-3.75-3.75zM8 .5C3.86.5.5 3.86.5 8c0 4.14 3.36 7.5 7.5 7.5 4.14 0 7.5-3.36 7.5-7.5C15.5 3.86 12.14.5 8 .5zM8 14c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6z"
          fill="#1F88E5"
        />
      ) : (
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 .5C3.875.5.5 3.875.5 8s3.375 7.5 7.5 7.5 7.5-3.375 7.5-7.5S12.125.5 8 .5zM8 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"
          fill="#62ACED"
        />
      )}
    </Svg>
  );
};

export default Selected;
