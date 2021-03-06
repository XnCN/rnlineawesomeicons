import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgBatteryThreeQuartersSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M3 8v16h24v-5h2v-6h-2V8H3zm2 2h20v12H5V10zm2 2v8h14v-8H7z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgBatteryThreeQuartersSolid;
