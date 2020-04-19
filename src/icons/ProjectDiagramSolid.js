import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgProjectDiagramSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M3 6v8h5.635L12 19.908V27h8v-8h-6.217l-2.845-5H11v-3h10v3h8V6h-8v3H11V6H3zm2 2h4v4H5V8zm18 0h4v4h-4V8zm-8.582 13H18v4h-4v-3.762l.418-.238z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgProjectDiagramSolid;
