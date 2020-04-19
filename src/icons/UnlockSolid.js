import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgUnlockSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 3c-3.035 0-5.586 1.965-6.625 4.625l1.844.75C11.977 6.434 13.836 5 16 5c2.754 0 5 2.246 5 5v3H6v16h20V13h-3v-3c0-3.844-3.156-7-7-7zM8 15h16v12H8V15z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgUnlockSolid;
