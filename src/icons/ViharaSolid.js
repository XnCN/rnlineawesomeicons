import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgViharaSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 3.7L8.1 10H10v2.523L5.1 16.2l1.9.924v3.404l-5 3.774 4 1.58V28h2v-2h7v2h2v-2h7v2h2v-2.115l4.1-1.584-5.1-3.848v-3.306l2-.948-5-3.75V10h1.9L16 3.7zm0 2.6L18.2 8h-4.3L16 6.3zM12 10h8v2h-8v-2zm-.6 4h9.3l2.3 1.8-.3.2H9.2l-.2-.2 2.4-1.8zM9 18h14v2H9v-2zm-.7 4H23.7l2.3 1.7-.7.3H6.7l-.7-.3L8.3 22z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgViharaSolid;
