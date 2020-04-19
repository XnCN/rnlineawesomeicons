import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgGoodreadsG(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 3c-4.411 0-8 4.262-8 9.5s3.589 9.5 8 9.5c2.39 0 4.533-1.257 6-3.236V22c0 2.757-2.691 5-6 5-2.455 0-4.567-1.236-5.494-3H8.338c.986 2.887 4.045 5 7.662 5 4.411 0 8-3.141 8-7V4h-2v2.236C20.533 4.257 18.39 3 16 3zm0 2c3.309 0 6 3.364 6 7.5S19.309 20 16 20s-6-3.364-6-7.5S12.691 5 16 5z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgGoodreadsG;
