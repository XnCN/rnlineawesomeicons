import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgItalicSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M11.75 5l-.063.938-.187 3L11.437 10h2l-.874 12h-2l-.063.938-.188 3L10.22 27H20.25l.063-.938.187-3L20.563 22h-2l.875-12h2l.062-.938.188-3L21.78 5H11.75zm1.875 2h6l-.063 1h-2l-.062.938-1 14L16.437 24h2l-.062 1h-6l.063-1h2l.062-.938 1-14L15.563 8h-2l.062-1z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgItalicSolid;
