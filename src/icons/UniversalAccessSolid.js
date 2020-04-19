import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgUniversalAccessSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12 12-5.383 12-12S22.617 4 16 4zm0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16 10.465 6 16 6zm0 2a1.999 1.999 0 100 4 1.999 1.999 0 100-4zm-5.781 4.031L9.78 13.97l4.219.937V19l-.969 4.813 1.938.375 1-5 .031-.094.031.093 1 5 1.938-.375L18 19v-4.094l4.219-.937-.438-1.938L17.5 13h-3l-4.281-.969z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgUniversalAccessSolid;
