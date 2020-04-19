import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgLevelDownAltSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M4.5 4.5v3h15v15.355l-3.781-3.78-2.145 2.144 6.358 6.357L21 28.598l1.068-1.022 6.358-6.357-2.145-2.145-3.781 3.781V4.5h-18zm1 1h16v19.77l4.781-4.782.73.73-5.642 5.643-.369.354-.37-.354-5.642-5.642.73-.73 4.782 4.78V6.5h-15v-1z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgLevelDownAltSolid;
