import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgBandcamp(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3zm0 2c6.065 0 11 4.935 11 11s-4.935 11-11 11S5 22.065 5 16 9.935 5 16 5zm-2.617 7l-4 8h9.234l4-8h-9.234zm1.234 2h4.766l-2 4h-4.766l2-4z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgBandcamp;
