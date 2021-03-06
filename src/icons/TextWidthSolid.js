import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgTextWidthSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M8 6v2h7v14h2V8h7V6H8zm2 15.5L5.625 25 10 28.5V26h12v2.5l4.375-3.5L22 21.5V24H10v-2.5z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgTextWidthSolid;
