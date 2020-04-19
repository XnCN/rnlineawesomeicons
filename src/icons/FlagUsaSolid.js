import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFlagUsaSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M3 7v10h26v-2H17v-2h12v-2H17V9h12V7H3zm2 1a1 1 0 110 2 1 1 0 010-2zm4 0a1 1 0 110 2 1 1 0 010-2zm4 0a1 1 0 110 2 1 1 0 010-2zm-6 3a1 1 0 110 2 1 1 0 010-2zm4 0a1 1 0 110 2 1 1 0 010-2zm4 0a1 1 0 110 2 1 1 0 010-2zM5 14a1 1 0 110 2 1 1 0 010-2zm4 0a1 1 0 110 2 1 1 0 010-2zm4 0a1 1 0 110 2 1 1 0 010-2zM3 19v2h26v-2H3zm0 4v2h26v-2H3z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgFlagUsaSolid;
