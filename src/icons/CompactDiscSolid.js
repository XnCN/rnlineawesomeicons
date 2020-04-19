import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCompactDiscSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12 12-5.383 12-12S22.617 4 16 4zm0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16 10.465 6 16 6zm-2.781 2.5A8.04 8.04 0 008.5 13.219l1.875.687a6.015 6.015 0 013.531-3.531L13.22 8.5zM16 13c-1.645 0-3 1.355-3 3s1.355 3 3 3 3-1.355 3-3-1.355-3-3-3zm0 2c.563 0 1 .438 1 1 0 .563-.438 1-1 1-.563 0-1-.438-1-1 0-.563.438-1 1-1zm5.625 3.094a6.015 6.015 0 01-3.531 3.531l.687 1.875a8.04 8.04 0 004.719-4.719l-1.875-.687z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgCompactDiscSolid;
