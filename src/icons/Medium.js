import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMedium(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M26 10.36h-.79c-.296 0-.71.425-.71.699v9.933c0 .277.414.649.71.649H26V24h-7.168v-2.36h1.5V11.2h-.07L16.758 24h-2.711l-3.461-12.8H10.5v10.44H12V24H6v-2.36h.77c.316 0 .73-.37.73-.648V11.06c0-.274-.414-.7-.73-.7H6V8h7.504l2.46 9.262h.071L18.52 8H26v2.36z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgMedium;
