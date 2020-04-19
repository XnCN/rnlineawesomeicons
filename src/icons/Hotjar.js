import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgHotjar(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M9 4l1.727 1.908c.015.017 1.454 1.681 1.22 3.63-.149 1.243-.96 2.392-2.402 3.403-4.24 2.872-5.525 6.736-3.768 10.485C7.1 26.248 9.997 28 13.113 28h1.815l-1.137-1.611c-.908-1.174-.89-2.516-.674-3.516 1.545 1.169 3.35 1.02 4.604.22 1.15-.733 1.965-2.055 1.992-3.632.258.408.47.883.623 1.41.442 1.531.388 3.866-1.215 5.408L17.451 28h1.574c.891 0 1.785-.166 2.582-.563 2.49-1.235 4.17-3.49 5.055-6.752.721-2.654.26-6.161-1.265-8.89-3.54-6.351-13.398-7.497-13.815-7.543L9 4zm4.453 2.615c2.907.654 8.061 2.319 10.2 6.155 1.262 2.257 1.674 5.098 1.074 7.418-.497 1.94-1.279 3.39-2.397 4.412.395-1.498.286-3.042-.072-4.284-.655-2.268-2.208-3.912-4.055-4.294L16 15.56l1.143 1.95c1.06 1.785.485 3.27-.497 3.895-.783.5-2.062.547-3.095-.968l-.953-1.4-.766 1.51c-.265.524-1.292 2.783-.6 5.157-1.46-.474-2.935-1.534-3.7-3.254-1.622-3.638.81-6.28 3.148-7.863 1.948-1.365 3.045-2.992 3.258-4.834.137-1.191-.126-2.275-.485-3.139z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgHotjar;
