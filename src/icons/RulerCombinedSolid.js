import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgRulerCombinedSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M4 4v24h24v-9H13V4H4zm2 2h5v2H8v2h3v2H8v2h3v2H8v2h3v1.586l-5 5V6zm6.414 15H14v3h2v-3h2v3h2v-3h2v3h2v-3h2v5H7.414l5-5z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgRulerCombinedSolid;
