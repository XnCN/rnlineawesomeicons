import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFastForwardSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M15 5v7.375L6.594 6.187 5 5.032V26.97l1.594-1.157L15 19.625V27l1.594-1.188 12-9L29.656 16l-1.062-.813-12-9L15 5zM7 8.969l8.406 6.187 1.125.844-1.125.844L7 23.03V8.97zM17 9l9.313 7L17 23V9z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgFastForwardSolid;
