import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMagnetSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 5C9.937 5 5 9.938 5 16v11h8V16c0-1.668 1.332-3 3-3s3 1.332 3 3v11h8V16c0-6.063-4.938-11-11-11zm0 2c4.984 0 9 4.016 9 9v5h-4v-5c0-2.75-2.25-5-5-5s-5 2.25-5 5v5H7v-5c0-4.984 4.016-9 9-9zM7 23h4v2H7v-2zm14 0h4v2h-4v-2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgMagnetSolid;
