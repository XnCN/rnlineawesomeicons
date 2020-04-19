import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgConciergeBellSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M13 6v2h6V6h-6zm3 3C9.703 9 4.574 13.84 4.062 20H2v5h28v-5h-2.063C27.427 13.84 22.297 9 16 9zm0 2a9.927 9.927 0 019.938 9H6.063c.492-5.086 4.71-9 9.937-9zM4 22h24v1H4v-1z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgConciergeBellSolid;
