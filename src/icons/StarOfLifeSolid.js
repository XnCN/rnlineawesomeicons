import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgStarOfLifeSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M13 4v6.805L7.107 7.402l-3 5.198L10 16l-5.893 3.4 3 5.198L13 21.195V28h6v-6.805l5.893 3.403 3-5.198L22 16l5.893-3.4-3-5.198L19 10.805V4h-6zm2 2h2v8.27l7.16-4.135 1 1.73L18 16l7.16 4.135-1 1.73L17 17.731V26h-2v-8.27l-7.16 4.135-1-1.73L14 16l-7.16-4.135 1-1.73L15 14.27V6z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgStarOfLifeSolid;
