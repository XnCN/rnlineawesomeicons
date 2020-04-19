import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgPlayCircle(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 4C9.383 4 4 9.383 4 16s5.383 12 12 12 12-5.383 12-12S22.617 4 16 4zm0 2c5.535 0 10 4.465 10 10s-4.465 10-10 10S6 21.535 6 16 10.465 6 16 6zm-4 3.125v13.75L13.5 22l9-5.125L24 16l-1.5-.875-9-5.125-1.5-.875zm2 3.438L19.969 16 14 19.438v-6.875z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgPlayCircle;
