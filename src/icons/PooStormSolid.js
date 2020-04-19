import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgPooStormSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M17 4c-2.838 0-6 2.613-6 6.363V11h-1c-2.206 0-4 1.794-4 4 0 .408.064.811.188 1.195A4.51 4.51 0 003 20.5C3 22.981 5.019 25 7.5 25H15v-.59L10.77 23H7.5A2.502 2.502 0 015 20.5C5 19.121 6.121 18 7.5 18h2.535l-1.512-1.672A1.988 1.988 0 018 15c0-1.103.897-2 2-2h3v-2.637c0-2 1.426-3.636 2.953-4.175.073 1.904.899 2.691 1.883 3.421.7.521 1.164.865 1.164 2.391v1h3c1.103 0 2 .897 2 2 0 .483-.186.954-.523 1.328L21.965 18H24.5c1.379 0 2.5 1.121 2.5 2.5S25.879 23 24.5 23h-2.576L21 25h3.5c2.481 0 4.5-2.019 4.5-4.5a4.508 4.508 0 00-3.188-4.305A3.89 3.89 0 0026 15c0-2.206-1.794-4-4-4h-1.066c-.257-1.773-1.194-2.468-1.907-2.996-.747-.555-1.242-.923-1.033-2.899L18.111 4H17zm0 11.5l-3 6.469 3 1V28.5l3-6.5-3-1v-5.5z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgPooStormSolid;
