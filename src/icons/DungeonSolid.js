import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgDungeonSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 5c-1.038 0-2.04.155-2.994.428l1.441 3.752C14.947 9.066 15.466 9 16 9s1.053.066 1.553.18l1.441-3.752A10.897 10.897 0 0016 5zm-4.86 1.152a11.11 11.11 0 00-3.826 3.135l3.385 2.154c.096-.11.199-.215.301-.32v.01c.03-.05.08-.101.13-.131h-.017a7.005 7.005 0 011.467-1.104l-1.44-3.744zm9.72 0l-1.44 3.746A7.024 7.024 0 0120.877 11h-.008c.05.03.101.08.131.13v-.015c.167.17.326.348.475.535l3.464-2.021a11.101 11.101 0 00-4.08-3.477zM6.233 10.971A10.899 10.899 0 005 16h4c0-1.024.227-1.994.623-2.871L6.234 10.97zM16 11c-.34 0-.68.03-1 .1V25h2V11.1c-.32-.07-.66-.1-1-.1zm9.95.354l-3.466 2.021c.33.812.516 1.697.516 2.625h4c0-1.66-.385-3.232-1.05-4.646zM13 12c-1.21.91-2 2.37-2 4v9h2V12zm6 0v13h2v-9c0-1.63-.79-3.09-2-4zM5 18v4h4v-4H5zm18 0v4h4v-4h-4zM5 24v3h4v-3H5zm18 0v3h4v-3h-4z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgDungeonSolid;
