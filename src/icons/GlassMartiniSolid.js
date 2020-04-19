import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgGlassMartiniSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 5v1.34l10 13V26h-5v2h12v-2h-5v-6.66l10-13V5H5zm3.031 2H23.97l-1.54 2H11.92l1.54 2h7.434L16 17.36 8.031 7z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgGlassMartiniSolid;
