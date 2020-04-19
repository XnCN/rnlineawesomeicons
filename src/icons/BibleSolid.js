import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgBibleSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M9 4C7.355 4 6 5.355 6 7v18c0 1.645 1.355 3 3 3h17V4H9zm0 2h15v16H9a2.95 2.95 0 00-1 .188V7c0-.566.434-1 1-1zm6 2v3h-3v2h3v7h2v-7h3v-2h-3V8h-2zM9 24h15v2H9c-.566 0-1-.434-1-1 0-.566.434-1 1-1z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgBibleSolid;
