import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgPlugSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M22 3.594l-4 3.969-2.281-2.282L14.28 6.72l.75.75-5.125 5.125a3.126 3.126 0 000 4.406l1.844 1.844-7.469 7.437L5.72 27.72l7.437-7.469L15 22.094a3.126 3.126 0 004.406 0l5.125-5.125.75.75 1.438-1.438L24.437 14l3.97-4L27 8.594l-4 3.969L19.437 9l3.97-4L22 3.594zm-5.563 5.281l6.688 6.688L18 20.686c-.387.387-1.207.387-1.594 0l-5.093-5.093c-.387-.387-.387-1.207 0-1.594l5.124-5.125z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgPlugSolid;
