import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgToiletSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M6 4c-.523 0-1.059.184-1.438.563C4.184 4.94 4 5.476 4 6v11c0 2.79 1.652 5.117 4 6.594V28h15v-4.406c2.348-1.477 4-3.805 4-6.594v-1H14V6c0-.523-.184-1.059-.563-1.438C13.06 4.184 12.524 4 12 4H6zm0 2h6v10H6V6zm2 2v3h2V8H8zM6.312 18h18.375c-.355 1.727-1.367 3.25-3.156 4.219L21 22.5V26H10v-3.5l-.531-.281C7.679 21.25 6.668 19.727 6.313 18z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgToiletSolid;
