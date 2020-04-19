import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgHeadsetSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 3C9.953 3 5 7.953 5 14v6c0 1.293.844 2.395 2 2.813V23c0 2.746 2.254 5 5 5h1.281c.348.598.98 1 1.719 1h2c1.102 0 2-.898 2-2 0-1.102-.898-2-2-2h-2c-.738 0-1.371.402-1.719 1H12a3 3 0 01-3-3h2v-9H7c0-4.953 4.047-9 9-9s9 4.047 9 9h-4v9h3c1.645 0 3-1.355 3-3v-6c0-6.047-4.953-11-11-11zM7 16h2v5H8c-.555 0-1-.445-1-1v-4zm16 0h2v4c0 .555-.445 1-1 1h-1v-5z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgHeadsetSolid;
