import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgTractorSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M7 5v7.25c-1.348.305-2.582.883-3.625 1.719l1.25 1.562A6.958 6.958 0 019 14c3.879 0 7 3.121 7 7h4.563A3.929 3.929 0 0020 23c0 2.2 1.8 4 4 4s4-1.8 4-4c0-1.027-.418-1.945-1.063-2.656l2-4.969.063-.188V13h-5v-3c0-.566.434-1 1-1V7c-1.645 0-3 1.355-3 3v3h-3.313l-2.75-7.344-.25-.656H7zm2 2h5.313l2.75 7.344.25.656h9.593l-1.593 4H17.75c-.918-3.996-4.48-7-8.75-7V7zm0 8c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm0 2c2.223 0 4 1.777 4 4s-1.777 4-4 4-4-1.777-4-4 1.777-4 4-4zm0 2a1.999 1.999 0 100 4 1.999 1.999 0 100-4zm15 2c1.117 0 2 .883 2 2s-.883 2-2 2-2-.883-2-2 .883-2 2-2z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgTractorSolid;
