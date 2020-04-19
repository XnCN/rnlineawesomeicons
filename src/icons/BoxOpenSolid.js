import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgBoxOpenSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 4l-5 4h10l-5-4zM8.5 5L5 9.656V27h22V9.656L23.5 5h-5L21 7h1.5L24 9H8l1.5-2H11l2.5-2h-5zM7 11h18v14H7V11zm5.813 2c-.551.05-.958.543-.907 1.094.051.55.543.957 1.094.906h6c.36.004.695-.184.879-.496a1.01 1.01 0 000-1.008c-.184-.312-.52-.5-.879-.496H12.812z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgBoxOpenSolid;
