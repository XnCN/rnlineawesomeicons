import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgRegistered(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3zm0 2c6.086 0 11 4.914 11 11s-4.914 11-11 11S5 22.086 5 16 9.914 5 16 5zm-4 5v12h2v-4h3.406L19 22h2l-1.688-4.25C20.875 17.207 22 15.75 22 14c0-2.21-1.79-4-4-4h-6zm2 2h4c1.191 0 2 .809 2 2 0 1.191-.809 2-2 2h-4v-4z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgRegistered;
