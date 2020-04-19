import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgStumbleupon(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 4c-3.859 0-7 3.14-7 7v9.5c0 .827-.673 1.5-1.5 1.5S6 21.327 6 20.5V16H1v4.5C1 24.084 3.916 27 7.5 27s6.5-2.916 6.5-6.5V11c0-1.103.897-2 2-2s2 .897 2 2v1.922l1.889.879L23 12.877V11c0-3.86-3.141-7-7-7zm10 12v4.5c0 .827-.673 1.5-1.5 1.5s-1.5-.673-1.5-1.5v-4.494l-3.348.996L18 16.231V20.5c0 3.584 2.916 6.5 6.5 6.5s6.5-2.916 6.5-6.5V16h-5z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgStumbleupon;
