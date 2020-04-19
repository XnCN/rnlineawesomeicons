import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgApplePay(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M8.828 9c-.585 0-1.263.335-1.691.83-.336.41-.698 1.049-.567 1.69.603.072 1.256-.3 1.63-.793A2.343 2.343 0 008.827 9zm-4.03 2.66C3.215 11.66 2 13.037 2 15.027 2 17.627 3.825 20 4.953 20c.69 0 .946-.451 1.848-.451.839 0 1.1.451 1.828.451 1.35 0 2.47-2.755 2.512-2.928-.222-.098-1.524-.723-1.524-2.209 0-1.434 1.188-2.08 1.238-2.111-.646-.976-1.69-1.092-2.082-1.092-.907 0-1.71.494-2.138.494-.448 0-1.102-.494-1.836-.494zM13 12v8h2v-3h.5c.98 0 1.674-.667 2.082-1.5H18v-1c0-1.37-1.13-2.5-2.5-2.5H13zm7.223 0L18 18.842V20h2v-.842l.05-.158h1.9l.05.158V20h2v-1.158L21.777 12h-1.554zM24 12v1.297l2 3.076V20h2v-3.627l2-3.076V12h-2v.703l-1 1.54-1-1.54V12h-2zm-9 2h.5c.287 0 .5.213.5.5 0 .287-.213.5-.5.5H15v-1zm6 2.08l.299.92H20.7l.299-.92z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgApplePay;
