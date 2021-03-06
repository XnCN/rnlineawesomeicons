import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgHeadingSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M6 5v2h1v18H6v2h8v-2h-1v-6h6v6h-1v2h8v-2h-1V7h1V5h-8v2h1v6h-6V7h1V5H6zm3 2h2v8h10V7h2v18h-2v-8H11v8H9V7z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgHeadingSolid;
