import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgHouseDamageSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 2.59l-.72.69-13 13 1.44 1.44L5 16.44V28h8.83L16 22h-3.62l3.63-6.21L16 20h3.55l-1.61 8H27V16.44l1.28 1.28 1.44-1.44-13-13-.72-.69zm0 2.85l9 9V26h-4.62L22 18h-4v-6h-2.1L10 22.11V24h3.15l-.72 2H7V14.44l9-9z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgHouseDamageSolid;
