import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgShoppingBagSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 3c-2.746 0-5 2.254-5 5v1H6.062L6 9.938l-1 18L4.937 29h22.125L27 27.937l-1-18L25.937 9H21V8c0-2.746-2.254-5-5-5zm0 2a3 3 0 013 3v1h-6V8a3 3 0 013-3zm-8.063 6H11v3h2v-3h6v3h2v-3h3.063l.875 16H7.063l.875-16z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgShoppingBagSolid;
