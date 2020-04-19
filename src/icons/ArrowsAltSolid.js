import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgArrowsAltSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 1.586l-5.707 5.707 1.414 1.414L15 5.414V15H5.414l3.293-3.293-1.414-1.414L1.586 16l5.707 5.707 1.414-1.414L5.414 17H15v9.586l-3.293-3.293-1.414 1.414L16 30.414l5.707-5.707-1.414-1.414L17 26.586V17h9.586l-3.293 3.293 1.414 1.414L30.414 16l-5.707-5.707-1.414 1.414L26.586 15H17V5.414l3.293 3.293 1.414-1.414L16 1.586z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgArrowsAltSolid;
