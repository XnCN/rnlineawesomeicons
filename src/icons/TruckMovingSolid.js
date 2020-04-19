import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgTruckMovingSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M1 4v21h3.156c.446 1.719 1.992 3 3.844 3 1.852 0 3.398-1.281 3.844-3h8.312c.446 1.719 1.992 3 3.844 3 1.852 0 3.398-1.281 3.844-3H31V14.594l-.281-.313-6-6L24.406 8H19V4H1zm2 2h14v17h-5.156c-.446-1.719-1.992-3-3.844-3-1.852 0-3.398 1.281-3.844 3H3V6zm16 4h4.563L29 15.438V23h-1.156c-.446-1.719-1.992-3-3.844-3-1.852 0-3.398 1.281-3.844 3H19V10zM8 22c1.117 0 2 .883 2 2s-.883 2-2 2-2-.883-2-2 .883-2 2-2zm16 0c1.117 0 2 .883 2 2s-.883 2-2 2-2-.883-2-2 .883-2 2-2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgTruckMovingSolid;
