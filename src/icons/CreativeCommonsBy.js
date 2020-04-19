import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCreativeCommonsBy(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 3C8.855 3 3 8.855 3 16s5.855 13 13 13 13-5.855 13-13S23.145 3 16 3zm0 2c6.055 0 11 4.945 11 11s-4.945 11-11 11S5 22.055 5 16 9.945 5 16 5zm0 3c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 5c-1.7 0-3 1.3-3 3v3l1 1v4h4v-4l1-1v-3c0-1.7-1.3-3-3-3z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgCreativeCommonsBy;
