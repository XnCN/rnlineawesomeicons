import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgRulerSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M20.531 3.594L3.594 20.53l7.875 7.875L28.406 11.47l-7.875-7.875zm0 2.844l5.032 5.03-14.094 14.095-5.031-5.032 1.156-1.156 2.156 2.156 1.438-1.406L9 17.937l1.188-1.156.874.875 1.407-1.437-.875-.844 1.187-1.188 2.156 2.157 1.407-1.407-2.157-2.156 1.188-1.187.844.875 1.437-1.406-.875-.876L17.938 9l2.187 2.188 1.406-1.438-2.156-2.156 1.156-1.157z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgRulerSolid;
