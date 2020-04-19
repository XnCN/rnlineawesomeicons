import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFirstAidSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M14 5c-1.094 0-2 .906-2 2v1H6c-1.645 0-3 1.355-3 3v15h26V11c0-1.645-1.355-3-3-3h-6V7c0-1.094-.906-2-2-2h-4zm0 2h4v1h-4V7zm-8 3h20c.566 0 1 .434 1 1v13H5V11c0-.566.434-1 1-1zm9 3v3h-3v2h3v3h2v-3h3v-2h-3v-3h-2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgFirstAidSolid;
