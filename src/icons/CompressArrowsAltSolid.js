import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCompressArrowsAltSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M4.719 3.281L3.28 4.72 10.562 12H5v2h9V5h-2v5.563L4.719 3.28zm22.562 0L20 10.562V5h-2v9h9v-2h-5.563l7.282-7.281L27.28 3.28zM5 18v2h5.563L3.28 27.281 4.72 28.72 12 21.437V27h2v-9H5zm13 0v9h2v-5.563l7.281 7.282 1.438-1.438L21.437 20H27v-2h-9z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgCompressArrowsAltSolid;
