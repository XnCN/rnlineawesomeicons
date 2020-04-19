import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgIdCardAltSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M15 5c-1.094 0-2 .906-2 2v1H4v18h24V8h-9V7c0-1.094-.906-2-2-2h-2zm0 2h2v2h-2V7zm-9 3h7v1h6v-1h7v14H6V10zm10 2c-2.2 0-4 1.8-4 4a3.98 3.98 0 001.215 2.855A5.001 5.001 0 0011 23h2c0-1.668 1.332-3 3-3s3 1.332 3 3h2a5.001 5.001 0 00-2.215-4.145A3.98 3.98 0 0020 16c0-2.2-1.8-4-4-4zm0 2c1.117 0 2 .883 2 2s-.883 2-2 2-2-.883-2-2 .883-2 2-2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgIdCardAltSolid;
