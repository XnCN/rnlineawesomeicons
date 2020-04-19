import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMicrophoneAltSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M21 4c-3.578 0-6.531 2.715-6.938 6.188L6 21.593l-.469.687.563.594.812.813-2.625 2.593L5.72 27.72l2.562-2.594L9.656 26.5l.719-.5 11.469-8.063C25.304 17.52 28 14.57 28 11c0-3.855-3.145-7-7-7zm0 2c2.773 0 5 2.227 5 5a5 5 0 01-.813 2.75L18.25 6.812A5 5 0 0121 6zm-4.188 2.25l6.938 6.938A5 5 0 0121 16c-2.773 0-5-2.227-5-5a5 5 0 01.813-2.75zm-2.437 4.938a7.068 7.068 0 004.406 4.437l-8.875 6.281-1.781-1.843 6.25-8.875z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgMicrophoneAltSolid;
