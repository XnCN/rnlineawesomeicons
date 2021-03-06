import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCoffeeSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M11 3v4h2V3h-2zm4 1v3h2V4h-2zM4.875 8L5 9.094l1.813 17.218c.16 1.52 1.472 2.688 3 2.688h9.374c1.528 0 2.84-1.168 3-2.688l.47-4.312H25c1.645 0 3-1.355 3-3v-3c0-1.645-1.355-3-3-3h-1.406L24 9.094 24.125 8H4.875zm2.25 2h14.75l-1.688 16.094c-.054.52-.48.906-1 .906H9.813c-.519 0-.945-.387-1-.906L7.125 10zm16.25 5H25c.566 0 1 .434 1 1v3c0 .566-.434 1-1 1h-2.156l.531-5z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgCoffeeSolid;
