import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgHourglassHalfSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M7 4v2h2v4a7.001 7.001 0 003.406 6A7.001 7.001 0 009 22v4H7v2h18v-2h-2v-4a7.001 7.001 0 00-3.406-6A7.001 7.001 0 0023 10V6h2V4H7zm4 2h10v4c0 2.773-2.227 5-5 5s-5-2.227-5-5V6zm1.156 5c.446 1.723 1.98 3 3.844 3 1.863 0 3.398-1.277 3.844-3h-7.688zM16 17c2.773 0 5 2.227 5 5v4h-1c0-2.21-1.79-4-4-4s-4 1.79-4 4h-1v-4c0-2.773 2.227-5 5-5z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgHourglassHalfSolid;
