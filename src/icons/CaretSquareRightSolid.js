import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCaretSquareRightSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 5v22h22V5H5zm2 2h18v18H7V7zm7.219 2.281L12.78 10.72 18.062 16l-5.28 5.281 1.437 1.438 6-6 .687-.719-.687-.719-6-6z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgCaretSquareRightSolid;
