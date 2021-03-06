import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgEllo(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3zm0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16 9.935 5 16 5zM9.08 17c.488 3.387 3.401 6 6.92 6s6.432-2.613 6.92-6h-2.022A5.008 5.008 0 0116 21a5.008 5.008 0 01-4.898-4H9.08z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgEllo;
