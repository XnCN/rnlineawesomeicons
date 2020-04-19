import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgLinkedin(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M7.5 5A2.518 2.518 0 005 7.5v17C5 25.867 6.133 27 7.5 27h17c1.367 0 2.5-1.133 2.5-2.5v-17C27 6.133 25.867 5 24.5 5h-17zm0 2h17c.285 0 .5.215.5.5v17c0 .285-.215.5-.5.5h-17a.489.489 0 01-.5-.5v-17c0-.285.215-.5.5-.5zm2.938 1.719a1.719 1.719 0 100 3.437 1.719 1.719 0 000-3.437zm9.03 4.562c-1.433 0-2.386.785-2.78 1.531h-.063V13.5h-2.813V23h2.938v-4.688c0-1.238.246-2.437 1.781-2.437 1.512 0 1.532 1.398 1.532 2.5V23H23v-5.219c0-2.554-.543-4.5-3.531-4.5zM9 13.5V23h2.969v-9.5H9z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgLinkedin;
