import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSatelliteDishSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16.5 4.5v2c4.984 0 9 4.016 9 9h2c0-6.063-4.938-11-11-11zm0 4v2c2.773 0 5 2.227 5 5h2c0-3.855-3.145-7-7-7zm-8.594.094l-.687.687c-4.27 4.27-4.27 11.23 0 15.5s11.23 4.27 15.5 0l.687-.687-.687-.719-5.5-5.5C18.242 17.562 19 16.629 19 15.5c0-1.379-1.121-2.5-2.5-2.5-1.129 0-2.063.758-2.375 1.781l-5.5-5.5-.719-.687zm.157 2.969l12.374 12.374c-3.519 2.793-8.554 2.696-11.812-.562-3.258-3.258-3.355-8.293-.563-11.813z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgSatelliteDishSolid;
