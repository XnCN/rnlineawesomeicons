import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgEnvira(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 5c2.614 8.976 2.362 13.181 6.896 16.693 3.97 3.025 7.94 2.236 10.112 1.914L25.398 27h2l-3.98-3.98C23.393 20.613 29.01 5 5 5zm3.084 2.002c.135.011.45.121 1.047.396 3.999 1.85 5.408 4.592 6.931 7.4 1.096 2.023 3.018 5.103 4.373 6.095 1.357.983 2.837 1.709-.287.398-3.134-1.311-5.417-5.032-6.931-7.85-1.164-2.162-2.163-4.153-4.336-5.613 0 0-1.203-.86-.797-.826z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgEnvira;
