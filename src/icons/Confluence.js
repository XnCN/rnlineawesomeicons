import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgConfluence(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M22.508 5a.724.724 0 00-.606.32c-.01.01-.019.031-.029.051-1.449 2.423-2.345 3.506-3.877 3.506-1.655 0-4.053-1.266-8.693-3.467a.705.705 0 00-.315-.072.741.741 0 00-.658.414s0 .01-.01.02l-2.254 5.11c-.17.362 0 .792.362.952.992.471 2.965 1.404 4.748 2.266 2.814 1.36 5.15 1.9 7.105 1.9 5.763 0 8.19-4.702 9.612-6.96a.72.72 0 00-.24-.993L22.913 5.12A.743.743 0 0022.508 5zm.416 2.477l2.592 1.601C23.836 11.733 21.929 14 18.28 14c-1.803 0-3.9-.572-6.234-1.701a554.138 554.138 0 00-3.65-1.744L9.62 7.779c.171.082.338.163.502.24 3.854 1.843 5.976 2.858 7.871 2.858 2.303 0 3.644-1.412 4.93-3.4zM13.71 16c-5.764 0-8.189 4.725-9.604 6.965-.21.34-.1.793.24 1.004L9.1 26.89a.726.726 0 001.002-.24c1.442-2.43 2.335-3.514 3.878-3.514 1.654 0 4.05 1.264 8.711 3.472a.721.721 0 00.973-.34c.01 0 .01-.011.01-.021l2.265-5.12a.73.73 0 00-.37-.952c-.993-.472-2.969-1.406-4.743-2.26C18.008 16.545 15.668 16 13.711 16zm0 2c1.804 0 3.905.578 6.25 1.719 1.254.603 2.607 1.245 3.645 1.738l-1.233 2.785-.553-.264c-3.838-1.833-5.952-2.841-7.84-2.841-2.306 0-3.643 1.404-4.918 3.383L6.48 22.934C8.161 20.276 10.065 18 13.71 18z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgConfluence;
