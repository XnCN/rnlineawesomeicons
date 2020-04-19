import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFileImportSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M6 4v24h20v-9h-2v7H8V6h16v7h2V4H6zm11.5 7l-4.313 4.281L12.5 16l.688.719L17.5 21l1.406-1.406L16.313 17H28v-2H16.312l2.594-2.594L17.5 11z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgFileImportSolid;
