import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgGavelSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M15.969 1.594l-.719.687-7 7.031-.719.688 4.438 4.438.687-.72.344-.343 2.094 2.094L3.28 27.28 4.72 28.72 16.53 16.906l2.063 2.063-.344.343-.719.688 4.438 4.438.687-.72L30.375 16l-.719-.688-3-3.03-.687-.688-.719.687-.281.281L19.375 7l1-1-.719-.688-3-3.03-.687-.688zm0 2.812L17.563 6l-5.594 5.594L10.375 10l5.594-5.594zM18 8.438L23.563 14 20 17.563 14.437 12 18 8.437zm7.969 5.968L27.562 16l-5.593 5.594L20.375 20l5.594-5.594z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgGavelSolid;
