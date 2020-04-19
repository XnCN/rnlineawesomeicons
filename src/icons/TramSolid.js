import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgTramSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M10.75 2L8.562 3.094l.876 1.812L11.25 4h9.5l1.813.906.875-1.812L21.25 2h-10.5zM15 5v1h-3c-3.3 0-6 2.7-6 6v12c0 1.645 1.355 3 3 3l-2 2h2.344l2-2h9.312l2 2H25l-2-2c1.645 0 3-1.355 3-3V12c0-3.3-2.7-6-6-6h-3V5h-2zm-3 3h8c2.219 0 4 1.781 4 4v4H8v-4c0-2.219 1.781-4 4-4zM8 18h16v6c0 .566-.434 1-1 1H9c-.566 0-1-.434-1-1v-6zm3.5 2a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm9 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgTramSolid;
