import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFacebookSquare(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M7 5c-1.094 0-2 .906-2 2v18c0 1.094.906 2 2 2h18c1.094 0 2-.906 2-2V7c0-1.094-.906-2-2-2H7zm0 2h18v18h-5.188v-6.75h2.594l.375-3h-2.968v-1.938c0-.874.214-1.468 1.468-1.468h1.625V9.125c-.277-.035-1.238-.094-2.343-.094-2.305 0-3.875 1.387-3.875 3.969v2.25h-2.625v3h2.624V25H7V7z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgFacebookSquare;
