import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgVialSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M18.688 3.273l-1.416 1.414 1.32 1.32L5.5 19.1c-2 2-2 5.4 0 7.4 1 1 2.4 1.5 3.7 1.5 1.4 0 2.7-.5 3.7-1.5l13.092-13.092 1.25 1.248 1.414-1.414-9.968-9.969zm1.304 4.135l4.6 4.6L20.6 16h-9.2l8.592-8.592zM9.4 18h9.2l-7.1 7.1c-1.3 1.3-3.3 1.3-4.6 0-1.3-1.3-1.3-3.3 0-4.6L9.4 18z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgVialSolid;
