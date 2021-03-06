import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgBuilding(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M4 3v26h11v-4h2v4h11V3H4zm2 2h20v22h-7v-4h-6v4H6V5zm2 2v2h4V7H8zm6 0v2h4V7h-4zm6 0v2h4V7h-4zM8 11v2h4v-2H8zm6 0v2h4v-2h-4zm6 0v2h4v-2h-4zM8 15v2h4v-2H8zm6 0v2h4v-2h-4zm6 0v2h4v-2h-4zM8 19v2h4v-2H8zm6 0v2h4v-2h-4zm6 0v2h4v-2h-4zM8 23v2h4v-2H8zm12 0v2h4v-2h-4z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgBuilding;
