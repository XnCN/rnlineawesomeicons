import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgQuestionCircleSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12 12-5.383 12-12S22.617 4 16 4zm0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16 10.465 6 16 6zm0 4c-2.2 0-4 1.8-4 4h2c0-1.117.883-2 2-2s2 .883 2 2a1.78 1.78 0 01-1.219 1.688l-.406.124A2.02 2.02 0 0015 17.72V19h2v-1.281l.406-.125A3.807 3.807 0 0020 14c0-2.2-1.8-4-4-4zm-1 10v2h2v-2h-2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgQuestionCircleSolid;
