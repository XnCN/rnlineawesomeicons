import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFileUploadSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M6 3v26h20V9.6l-.3-.3-6-6-.3-.3H6zm2 2h10v6h6v16H8V5zm12 1.4L22.6 9H20V6.4zM16 13l-4 4h3v5h2v-5h3l-4-4zm-4 10v2h8v-2h-8z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgFileUploadSolid;
