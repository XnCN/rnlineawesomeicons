import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCcAmex(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 6C3.355 6 2 7.355 2 9v14c0 1.645 1.355 3 3 3h22c1.645 0 3-1.355 3-3V9c0-1.645-1.355-3-3-3H5zm0 2h22c.566 0 1 .434 1 1v14c0 .566-.434 1-1 1H5c-.566 0-1-.434-1-1V9c0-.566.434-1 1-1zm2.063 5.25L5 18.75h1.25l.406-1.25H9l.406 1.25h2.344v-4.125l1.5 4.125h1.094l1.531-4v4h1.094v-5.5h-1.782l-1.374 3.719-1.376-3.719H10.5v5.219L8.562 13.25h-1.5zm11.406 0v5.5h4.406l1.375-1.781 1.375 1.781H27L24.937 16 27 13.25h-1.5l-1.375 1.656L23 13.25h-4.531zM7.75 14.344l.688 1.937H7.062l.688-1.937zm11.813.156h2.75l1.125 1.5-1.25 1.656h-2.625v-1.093h2.5v-1.125h-2.5V14.5z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgCcAmex;
