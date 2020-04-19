import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMousePointerSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M9 2.594v25.562l1.656-1.375 4.031-3.375 2.032 4.032.437.906.907-.469 3.093-1.594.875-.437-.437-.907-1.844-3.625 5.063-.625 2.03-.25L25.407 19 10.72 4.281 9 2.594zm2 4.844l11.563 11.53-4.5.532-1.407.188.657 1.28 2.062 4-1.313.688-2.156-4.312-.594-1.125-.968.812L11 23.844V7.437z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgMousePointerSolid;
