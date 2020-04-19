import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgUps(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M15.512 2.988C11.549 3.076 7.75 4 5 5.5v12.8c0 6.1 4.4 7.9 11 10.8 6.6-2.9 11-4.7 11-10.8V5.5c-3.4-1.85-7.526-2.6-11.488-2.512zm5.508 2.514a42.91 42.91 0 014.98.197v12.5c0 5.1-3.1 6.701-10 9.701-6.9-3-10-4.6-10-9.7V11c4.5-4.125 9.9-5.38 15.02-5.498zm-4.85 5.53c-1.017-.006-1.983.33-2.47.667V24h1.9v-4c1.4.4 4.1-.1 4.1-4.5 0-3.5-1.836-4.46-3.53-4.469zm6.371.032c-1.27.1-2.441.936-2.441 2.436 0 2.8 3 2.5 3 4.1.1 1.4-1.7 1.3-2.9.3v1.7c2.1 1.3 4.7.5 4.8-1.9.1-3-3.1-2.7-3.1-4.3 0-1.1 1.8-1.2 2.8-.1v-1.6c-.6-.488-1.397-.695-2.159-.636zM7 11.2v5.9c0 4.4 4.7 3.001 5.7 2.301v-8.2h-1.9v7.1c-.3.2-1.9.7-1.9-1.1v-6H7zm9.055 1.361c.689-.06 1.644.315 1.644 2.94.1 4-1.999 3-2.199 3v-5.8a1.99 1.99 0 01.555-.14z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgUps;
