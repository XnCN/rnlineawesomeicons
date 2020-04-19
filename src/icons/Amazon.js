import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgAmazon(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16.2 4c-3.3 0-6.9 1.2-7.7 5.3-.1.4.2.7.5.7l3.3.3c.3 0 .6-.3.6-.6.3-1.4 1.5-2.1 2.8-2.1.7 0 1.5.3 1.9.9.5.7.4 1.7.4 2.5v.5c-2 .2-4.6.4-6.5 1.2-2.2.9-3.7 2.8-3.7 5.7 0 3.6 2.3 5.4 5.2 5.4 2.5 0 3.8-.6 5.7-2.5.6.9.9 1.4 2 2.3.3.1.6.1.8-.1.7-.6 2-1.7 2.7-2.3.3-.2.2-.6 0-.9-.6-.9-1.3-1.6-1.3-3.2v-5.4c0-2.3.2-4.4-1.5-6C20.1 4.4 17.9 4 16.2 4zm.9 10.3h.9v.8c0 1.3.1 2.5-.6 3.7-.5 1-1.4 1.6-2.4 1.6-1.3 0-2.1-1-2.1-2.5 0-2.7 2-3.4 4.2-3.6zm9.6 8.1c-.9 0-1.9.2-2.7.8-.2.2-.2.4.1.4.9-.1 2.8-.4 3.2.1.4.5-.4 2.3-.7 3.1-.1.2.1.3.3.2 1.5-1.2 1.9-3.8 1.6-4.2-.2-.3-.9-.4-1.8-.4zm-23 .4c-.2 0-.3.3-.1.4 3.3 3 7.6 4.7 12.4 4.7 3.4 0 7.4-1.1 10.2-3.1.5-.3.1-.9-.4-.7-3.1 1.3-6.4 1.9-9.5 1.9-4.5 0-8.8-1.2-12.4-3.3-.1.2-.2.1-.2.1z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgAmazon;
