import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgBackspaceSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M11.594 7l-.313.281-8 8-.687.719.687.719 8 8 .313.281H29V7H11.594zm.844 2H27v14H12.437l-7-7 7-7zm2.718 2.75l-1.406 1.406L16.594 16l-2.844 2.844 1.406 1.406L18 17.406l2.844 2.844 1.406-1.406L19.406 16l2.844-2.844-1.406-1.406L18 14.594l-2.844-2.844z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgBackspaceSolid;
