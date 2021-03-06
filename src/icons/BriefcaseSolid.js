import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgBriefcaseSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 3c-1.863 0-3.398 1.277-3.844 3H3v20h26V6h-9.156c-.446-1.723-1.98-3-3.844-3zm0 2c.809 0 1.43.387 1.75 1h-3.5c.32-.613.941-1 1.75-1zM5 8h22v9H5V8zm11 6c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zM5 19h22v5H5v-5z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgBriefcaseSolid;
