import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMicrosoft(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 5v22h22V5H5zm2 2h8v8H7V7zm10 0h8v8h-8V7zM7 17h8v8H7v-8zm10 0h8v8h-8v-8z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgMicrosoft;
