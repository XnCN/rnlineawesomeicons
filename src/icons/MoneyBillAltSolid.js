import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMoneyBillAltSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M2 7v17h28V7H2zm4 2h20a2 2 0 002 2v9a2 2 0 00-2 2H6a2 2 0 00-2-2v-9a2 2 0 002-2zm9 2c0 1.439-.561 2-2 2v2c.776 0 1.437-.151 2-.412V20h2v-9h-2zm-6.5 3a1.5 1.5 0 10.001 3.001A1.5 1.5 0 008.5 14zm15 0a1.5 1.5 0 10.001 3.001A1.5 1.5 0 0023.5 14z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgMoneyBillAltSolid;
