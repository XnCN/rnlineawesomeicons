import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgChevronLeftSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M19.75 2.594l-.719.687-12 12-.687.719.687.719 12 12 .719.687.719-.687 3.593-3.625.688-.688-.688-.718L16.375 16l7.688-7.688.687-.718-.688-.688-3.593-3.625-.719-.687zm0 2.844l2.188 2.187-7.688 7.656-.719.719.719.719 7.688 7.656-2.188 2.188L9.187 16 19.75 5.437z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgChevronLeftSolid;
