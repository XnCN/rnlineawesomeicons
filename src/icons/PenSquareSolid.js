import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgPenSquareSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 5v22h22V5H5zm2 2h18v18H7V7zm13.127 1.877a3 3 0 00-2.125.875l-8.266 8.266-.03.312-.47 3.315-.218 1.343 1.343-.218 3.313-.47.312-.03 8.268-8.266c1.16-1.16 1.16-3.09 0-4.25a3.005 3.005 0 00-2.127-.877zm0 2c.254 0 .52.082.719.281a.978.978 0 01.031 1.375l-.031.032-7.797 7.828-1.656.218.218-1.656 7.828-7.797a.937.937 0 01.688-.281z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgPenSquareSolid;
