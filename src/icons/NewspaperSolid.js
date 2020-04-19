import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgNewspaperSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M3 5v18c0 2.21 1.79 4 4 4h18c2.21 0 4-1.79 4-4V12h-6V5H3zm2 2h16v16c0 .73.223 1.41.563 2H7c-1.191 0-2-.809-2-2V7zm2 2v5h12V9H7zm2 2h8v1H9v-1zm14 3h4v9c0 1.191-.809 2-2 2-1.191 0-2-.809-2-2v-9zM7 15v2h5v-2H7zm7 0v2h5v-2h-5zm-7 3v2h5v-2H7zm7 0v2h5v-2h-5zm-7 3v2h5v-2H7zm7 0v2h5v-2h-5z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgNewspaperSolid;
