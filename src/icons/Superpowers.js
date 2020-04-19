import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSuperpowers(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M29 3L14.877 5.057l-.889.129.014.005C8.888 6.135 5 10.618 5 16c0 3.032 1.235 5.782 3.227 7.773L3 29l14.123-2.057.889-.129-.014-.005C23.112 25.865 27 21.382 27 16c0-3.033-1.235-5.782-3.227-7.773L29 3zM16 7c4.963 0 9 4.037 9 9s-4.037 9-9 9-9-4.037-9-9 4.037-9 9-9z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgSuperpowers;
