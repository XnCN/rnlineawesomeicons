import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgListOlSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5.969 3l-.313.344S4.898 4 4.406 4v2c.68 0 1.149-.277 1.594-.531V10h2V3H5.969zM11 6v2h17V6H11zm-4.5 6A2.497 2.497 0 004 14.5v.5h2v-.5c0-.215.285-.5.5-.5.215 0 .5.285.5.5l-.094.094-2.593 2.5-.313.281V19h5v-2H7.281l.875-.875.125-.094L8.25 16c.5-.41.75-1.02.75-1.5C9 13.117 7.883 12 6.5 12zm4.5 3v2h17v-2H11zm-7 6v2h1.375l-.25.406-.125.219V25h1.5c.215 0 .5.285.5.5 0 .215-.285.5-.5.5H4v2h2.5C7.883 28 9 26.883 9 25.5c0-1.004-.68-1.695-1.531-2.094l.406-.687.125-.25V21H4zm7 3v2h17v-2H11z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgListOlSolid;
