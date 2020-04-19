import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgPowerOffSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M15 4v12h2V4h-2zm-3 .688C7.348 6.34 4 10.785 4 16c0 6.617 5.383 12 12 12s12-5.383 12-12c0-5.215-3.348-9.66-8-11.313v2.157C23.527 8.39 26 11.91 26 16c0 5.516-4.484 10-10 10S6 21.516 6 16c0-4.09 2.473-7.61 6-9.156V4.687z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgPowerOffSolid;
