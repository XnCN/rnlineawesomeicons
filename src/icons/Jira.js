import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgJira(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16.021 2.2L3.582 14.601a1.989 1.989 0 000 2.802l12.44 12.397.707-.703a7497.28 7497.28 0 007.182-7.16l1.356-1.358c.077-.076.163-.164.248-.26l.078-.074-.006-.008.062-.078 2.764-2.758c.38-.374.588-.871.588-1.402 0-.53-.208-1.026-.586-1.4-1.663-1.66-3.58-3.583-5.508-5.516a2606.12 2606.12 0 00-6.177-6.182l-.707-.703zm0 2.823c1.68 1.676 3.58 3.58 5.47 5.473a3265.54 3265.54 0 005.495 5.502c-1.354 1.35-2.308 2.302-2.96 2.99a13.9 13.9 0 00-.381.366c-.224.22-.444.432-.493.478l.018.02a8891.289 8891.289 0 01-7.147 7.125L4.993 16.016 16.02 5.023zm0 5.903L10.928 16l5.093 5.074L21.117 16l-5.096-5.074zm0 2.822L18.284 16l-2.262 2.252L13.761 16l2.26-2.252z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgJira;
