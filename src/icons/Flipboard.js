import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFlipboard(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 5v22h22V5H5zm2 2h18v18H7V7zm2 2v14h6v-4h4v-4h4V9H9zm2 2h10v2h-4v4h-4v4h-2V11z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgFlipboard;
