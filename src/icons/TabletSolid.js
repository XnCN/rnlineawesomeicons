import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgTabletSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 6C3.355 6 2 7.355 2 9v14c0 1.645 1.355 3 3 3h22c1.645 0 3-1.355 3-3V9c0-1.645-1.355-3-3-3H5zm0 2h22c.555 0 1 .445 1 1v14c0 .555-.445 1-1 1H5c-.555 0-1-.445-1-1V9c0-.555.445-1 1-1zm1 7c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgTabletSolid;
