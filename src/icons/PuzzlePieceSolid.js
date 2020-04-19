import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgPuzzlePieceSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M17 3c-2.21 0-4 1.79-4 4H7v5c-2.21 0-4 1.79-4 4s1.79 4 4 4v5h6c0 2.21 1.79 4 4 4s4-1.79 4-4h6v-7h-2c-1.191 0-2-.809-2-2 0-1.191.809-2 2-2h2V7h-6c0-2.21-1.79-4-4-4zm0 2c1.191 0 2 .809 2 2v2h6v3c-2.21 0-4 1.79-4 4s1.79 4 4 4v3h-6v2c0 1.191-.809 2-2 2-1.191 0-2-.809-2-2v-2H9v-5H7c-1.191 0-2-.809-2-2 0-1.191.809-2 2-2h2V9h6V7c0-1.191.809-2 2-2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgPuzzlePieceSolid;
