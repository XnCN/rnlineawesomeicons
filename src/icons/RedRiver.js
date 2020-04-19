import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgRedRiver(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 5v22h22V5H5zm2 2h18v18H7V7zm5 4a1 1 0 00-1 1v6a2 2 0 002-2v-2a1 1 0 011-1h2a2 2 0 002-2h-6zm4 4a1 1 0 00-1 1v6a2 2 0 002-2v-2a1 1 0 011-1h2a2 2 0 002-2h-6z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgRedRiver;
