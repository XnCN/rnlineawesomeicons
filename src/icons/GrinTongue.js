import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgGrinTongue(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3zm0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16 9.935 5 16 5zm-4.5 7a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm9 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-8.734 5.357l-1.534 1.286c.877 1.044 2.22 1.783 3.768 2.13V22c0 1.1.9 2 2 2s2-.9 2-2v-1.227c1.549-.347 2.89-1.085 3.766-2.13l-1.534-1.286C19.384 18.371 17.763 19 16 19c-1.763 0-3.385-.63-4.234-1.643z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgGrinTongue;
