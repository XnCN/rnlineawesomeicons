import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMercurySolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M11 2c0 1.477.66 2.8 1.688 3.719C9.93 6.984 8 9.777 8 13c0 4.066 3.066 7.438 7 7.938V24h-4v2h4v4h2v-4h4v-2h-4v-3.063c3.934-.5 7-3.87 7-7.937 0-3.223-1.93-6.016-4.688-7.281C20.34 4.8 21 3.477 21 2h-2c0 1.668-1.332 3-3 3s-3-1.332-3-3h-2zm5 5c3.324 0 6 2.676 6 6s-2.676 6-6 6-6-2.676-6-6 2.676-6 6-6z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgMercurySolid;
