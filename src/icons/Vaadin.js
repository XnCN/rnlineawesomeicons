import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgVaadin(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M4 4c-.6 0-1 .4-1 1v2.5C3 9.4 4.6 11 6.5 11h7.1c.8 0 1.4.6 1.4 1.4v.6c0 .6.4 1 1 1s1-.4 1-1v-.6c0-.8.6-1.4 1.4-1.4h7.1c1.9 0 3.5-1.6 3.5-3.5V5c0-.6-.4-1-1-1s-1 .4-1 1v.6c0 .8-.6 1.4-1.4 1.4H19c-1.7 0-3 1.3-3 3 0-1.7-1.3-3-3-3H6.4C5.6 7 5 6.4 5 5.6V5c0-.6-.4-1-1-1zm6.352 11.027c-.19.018-.376.072-.551.172-.7.4-1.002 1.3-.602 2l5.5 10c.2.5.801.801 1.301.801.5 0 1.1-.3 1.3-.8l5.5-10c.4-.7.1-1.6-.6-2-.7-.4-1.6-.1-2 .6L16 23.4l-4.2-7.6a1.537 1.537 0 00-1.448-.773z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgVaadin;
