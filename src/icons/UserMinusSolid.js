import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgUserMinusSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M14 4c-3.9 0-7 3.1-7 7 0 2.4 1.2 4.6 3.1 5.8C6.5 18.3 4 21.9 4 26h2c0-4.4 3.6-8 8-8 1.4 0 2.7.4 3.8 1-1.1 1.4-1.8 3.1-1.8 5 0 4.4 3.6 8 8 8s8-3.6 8-8-3.6-8-8-8c-1.7 0-3.4.6-4.7 1.5-.4-.3-.9-.5-1.4-.7 1.9-1.3 3.1-3.4 3.1-5.8 0-3.9-3.1-7-7-7zm0 2c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zm10 12c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6zm-4 5v2h8v-2h-8z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgUserMinusSolid;
