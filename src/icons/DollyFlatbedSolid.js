import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgDollyFlatbedSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M19 6c-1.645 0-3 1.355-3 3h-6v12h18V9h-6c0-1.645-1.355-3-3-3zM4 7v2h1c.555 0 1 .445 1 1v11c0 2.21 1.79 4 4 4h18v-2H10c-1.191 0-2-.809-2-2V10c0-1.645-1.355-3-3-3H4zm20.5 18a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-12 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM19 8c.555 0 1 .445 1 1h-2c0-.555.445-1 1-1zm-7 3h14v8H12v-8z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgDollyFlatbedSolid;
