import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgPhotoVideoSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M10 2v7h2V4h2v1h2V4h9v1h2V4h2v12h-2v-1h-2v3h6V2H10zm4 5v2h2V7h-2zm11 0v2h2V7h-2zM2 11v18h21V11H2zm23 0v2h2v-2h-2zM4 13h17v9.781l-2.594-2.593-.718-.688-2.813 2.813L10.594 18l-.688-.719L4 23.188V13zm11.5 2a1.5 1.5 0 10-.001 2.999A1.5 1.5 0 0015.5 15zm-5.596 5.125l5 5 .69-.719 2.094-2.093L21 25.625V27H4v-.969l5.904-5.906z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgPhotoVideoSolid;
