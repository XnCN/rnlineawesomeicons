import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSuitcaseSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M14 3c-1.094 0-2 .906-2 2v1H9V5H7v1H5c-1.094 0-2 .906-2 2v16c0 1.094.906 2 2 2h22c1.094 0 2-.906 2-2V8c0-1.094-.906-2-2-2h-2V5h-2v1h-3V5c0-1.094-.906-2-2-2h-4zm0 2h4v1h-4V5zM5 8h22v16h-2V9h-2v15H9V9H7v15H5V8z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgSuitcaseSolid;
