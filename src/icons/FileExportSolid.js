import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFileExportSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M6 4v24h20v-8l-2 2v4H8V6h16v4l2 2V4H6zm16.406 7L21 12.406 23.563 15h-9.657v2h9.656L21 19.594 22.406 21l4.313-4.281.687-.719-.687-.719L22.406 11z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgFileExportSolid;
