import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgPrintSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M9 4v7H7c-1.645 0-3 1.355-3 3v10h5v4h14v-4h5V14c0-1.645-1.355-3-3-3h-2V4H9zm2 2h10v5H11V6zm-4 7h18c.566 0 1 .434 1 1v8h-3v-4H9v4H6v-8c0-.566.434-1 1-1zm1 1c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm3 6h10v6H11v-6z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgPrintSolid;
