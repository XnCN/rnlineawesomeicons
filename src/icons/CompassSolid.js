import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCompassSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12 12-5.383 12-12S22.617 4 16 4zm-1.031 2.063H15V7h2v-.938A9.945 9.945 0 0125.938 15H25v2h.938A9.945 9.945 0 0117 25.938V25h-2v.938A9.945 9.945 0 016.062 17H7v-2h-.938a9.945 9.945 0 018.907-8.938zM22.5 9.5l-8.344 4.656L9.5 22.5l8.344-4.656L22.5 9.5zm-6.5 5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgCompassSolid;
