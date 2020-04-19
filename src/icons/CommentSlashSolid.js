import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCommentSlashSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M3.707 2.293L2.293 3.707l26 26 1.414-1.414L27.414 26H29V6H7.414L3.707 2.293zM3 7.243V26h9.586L16 29.414 19.414 26h2.344l-2-2h-1.172L16 26.586 13.414 24H5V9.242l-2-2zM9.414 8H27v16h-1.586l-16-16z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgCommentSlashSolid;
