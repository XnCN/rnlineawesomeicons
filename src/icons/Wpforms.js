import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgWpforms(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 5v22h22V5H5zm2 2h.535l5.065 4.3 3.4-3 3.4 3L24.465 7H25v18H7V7zm3.705 0h3.82L12.6 8.7 10.705 7zm6.77 0h3.82L19.4 8.7 17.475 7zM9 13v2h3v-2H9zm5 0v2h9v-2h-9zm-5 4v2h3v-2H9zm5 0v2h9v-2h-9zm4 4v2h5v-2h-5z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgWpforms;
