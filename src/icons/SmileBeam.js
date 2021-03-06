import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSmileBeam(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3zm0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16 9.935 5 16 5zm-5 7c-2.094 0-3.61 1.207-3.61 1.207l1.22 1.586S9.692 14 11.001 14s2.39.793 2.39.793l1.22-1.586C14.608 13.207 13.093 12 11 12zm10 0c-2.094 0-3.61 1.207-3.61 1.207l1.22 1.586S19.692 14 21.001 14s2.39.793 2.39.793l1.22-1.586C24.608 13.207 23.093 12 21 12zm-10.19 7l-1.72 1a8.111 8.111 0 002.87 2.896 7.914 7.914 0 001.911.815A7.895 7.895 0 0016 24a7.953 7.953 0 005.658-2.367A8.116 8.116 0 0022.91 20l-1.72-1a5.996 5.996 0 01-6.796 2.783 5.923 5.923 0 01-1.435-.611A6.018 6.018 0 0110.81 19z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgSmileBeam;
