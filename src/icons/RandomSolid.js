import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgRandomSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M23 3v4h-4.594l-.281.5-3.625 6.469L10.594 7H4v2h5.406l3.938 7-3.938 7H4v2h6.594l9-16H23v4l5-5-5-5zm-6.219 15l-1.156 2.063L18.406 25H23v4l5-5-5-5v4h-3.406l-2.813-5z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgRandomSolid;
