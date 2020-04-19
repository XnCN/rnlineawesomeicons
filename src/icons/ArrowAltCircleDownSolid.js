import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgArrowAltCircleDownSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3zm0 2c6.086 0 11 4.914 11 11s-4.914 11-11 11S5 22.086 5 16 9.914 5 16 5zm-1 4v10h-3l4 4 4-4h-3V9h-2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgArrowAltCircleDownSolid;
