import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgUbuntu(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12 12-5.383 12-12S22.617 4 16 4zm0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16 10.465 6 16 6zm3.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM16 11c-2.75 0-5 2.25-5 5s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5zm0 2c1.668 0 3 1.332 3 3s-1.332 3-3 3-3-1.332-3-3 1.332-3 3-3zm-6.5 2a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm10 5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgUbuntu;
