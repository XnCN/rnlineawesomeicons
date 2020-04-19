import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgToriiGateSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M2.938 4.969V6.78l.312.313 4 3.656.313.25H9v3H7v2h2v11h2V16h10v11h2V16h2v-2h-2v-3h1.375l.313-.25 4-3.656L29 6.78V4.97l-1.219.281C27.746 5.258 23.527 6 16 6 8.473 6 4.191 5.258 4.156 5.25l-1.218-.281zM6.78 7.562C8.895 7.774 11.914 8 16 8c4.055 0 7.059-.23 9.156-.438L23.594 9H8.344L6.78 7.562zM11 11h3v3h-3v-3zm7 0h3v3h-3v-3z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgToriiGateSolid;
