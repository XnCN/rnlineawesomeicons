import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFaxSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M12 5v5h-2V8H4v18h2v1c0 1.645 1.355 3 3 3s3-1.355 3-3v-1h16V10h-4V5H12zm2 2h8v5h-8V7zm-8 3h2v14H6V10zm4 2h2v2h12v-2h2v12H10V12zm3 4v2h2v-2h-2zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zm-8 4v2h2v-2h-2zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zM8 26h2v1c0 .555-.445 1-1 1-.555 0-1-.445-1-1v-1z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgFaxSolid;
