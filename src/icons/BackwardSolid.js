import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgBackwardSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M17 5l-1.594 1.188-12 9L2.344 16l1.062.813 12 9L17 27v-7.375l8.406 6.188L27 26.968V5.03l-1.594 1.157L17 12.375V5zm8 3.969V23.03l-8.406-6.187L15.469 16l1.125-.844L25 8.97zM15 9v14l-9.313-7L15 9z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgBackwardSolid;
