import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMoneyBillSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M2 7v17h28V7H2zm4 2h20a2 2 0 002 2v9a2 2 0 00-2 2H6a2 2 0 00-2-2v-9a2 2 0 002-2zm10 2c-2.211 0-4 2.016-4 4.5s1.789 4.5 4 4.5c2.211 0 4-2.016 4-4.5S18.211 11 16 11zm0 2c1.102 0 2 1.121 2 2.5s-.898 2.5-2 2.5c-1.102 0-2-1.121-2-2.5s.898-2.5 2-2.5zm-7.5 1a1.5 1.5 0 10.001 3.001A1.5 1.5 0 008.5 14zm15 0a1.5 1.5 0 10.001 3.001A1.5 1.5 0 0023.5 14z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgMoneyBillSolid;
