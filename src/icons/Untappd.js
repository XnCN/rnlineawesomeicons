import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgUntappd(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M18.2 5.3c-.1 0-.1.1-.1.2v.2c0 .2-.2.2-.3.2-.1 0-.1.1-.1.3-5.3 5.4-4.9 5.5-5.7 5.9l-1.2.7c-.5.2-.9.6-1.2 1l-6.3 8.8c-.3.4-.4 1-.1 1.5.7 1.5 2.3 2.7 4 2.9.5 0 1-.2 1.3-.6l6.3-8.8c.3-.4.5-.9.6-1.4l.2-1.4c.1-.9.3-.6 3.7-7.3.2-.2.3-.2.3-.3 0-.1 0-.3.1-.3h.2c.1 0 .1-.1.1-.2-.1-.1-.2-.5-.7-1-.5-.4-.9-.4-1.1-.4zm-4.3.1c-.2 0-.6 0-1.1.4-.5.4-.7.7-.7.9-.1.1-.1.2 0 .2h.2c.1 0 .1.2.1.3 0 .1.1.1.3.3.3.7.7 1.3.9 1.9.5-.5 1.1-1.2 1.9-2-.3-.4-.7-.7-1.1-1.1 0-.2 0-.3-.1-.3s-.3 0-.3-.2v-.2c0-.1 0-.2-.1-.2zm4.6 5.2c-.8 1.6-1.4 2.6-1.7 3.1-.4.8-.5.8-.5 1.1l.2 1.3c.1.5.3 1 .6 1.4l6.3 8.8c.3.4.9.7 1.4.6 1.7-.2 3.3-1.4 4-2.9.3-.4.2-1-.1-1.4l-6.3-8.8c-.3-.4-.7-.8-1.2-1l-1.2-.7c-.4-.2-.5-.4-1.5-1.5z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgUntappd;
