import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgTapeSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M12 5C5.935 5 1 9.935 1 16s4.935 11 11 11h19v-2H18.305C21.139 23.008 23 19.72 23 16c0-6.065-4.935-11-11-11zm0 2c4.962 0 9 4.037 9 9s-4.038 9-9 9-9-4.037-9-9 4.038-9 9-9zm0 5c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 2c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgTapeSolid;
