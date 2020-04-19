import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgDigitalTachographSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M4.018 7A2.017 2.017 0 002 9.018v13.964C2 24.097 2.903 25 4.018 25h22.964A2.017 2.017 0 0029 22.982V9.018A2.017 2.017 0 0026.982 7H4.018zM4 9h23v14H4V9zm2 2v2h10v-2H6zm0 4v2h2v-2H6zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm-8 4v2h10v-2H6zm12 0v2h7v-2h-7z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgDigitalTachographSolid;
