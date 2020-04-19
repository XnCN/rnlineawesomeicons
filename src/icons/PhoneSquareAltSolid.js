import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgPhoneSquareAltSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 5v22h22V5H5zm2 2h18v18H7V7zm13.127 2c-.512 0-.993.199-1.354.56l-1.15 1.15c-.723.724-.723 1.986 0 2.71l1.707 1.707a14.247 14.247 0 01-1.808 2.154l-.252.25a14.183 14.183 0 01-2.147 1.801l-1.707-1.707a1.9 1.9 0 00-1.354-.56c-.51 0-.992.198-1.355.56l-1.15 1.152a1.919 1.919 0 00.002 2.707l.953.955c.528.526 1.29.7 1.986.454l.13-.043c.504-.165 1.683-.552 3.55-1.813a16.094 16.094 0 002.515-2.098l.235-.234a16.28 16.28 0 002.105-2.521c1.261-1.87 1.647-3.048 1.813-3.551l.043-.131a1.9 1.9 0 00-.455-1.986l-.954-.955A1.903 1.903 0 0020.127 9z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgPhoneSquareAltSolid;
