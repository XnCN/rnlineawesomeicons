import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgEvernote(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M11.98 2.992a.991.991 0 00-.543.18c-.027.02-.05.039-.074.055l-.008.007a.894.894 0 00-.062.059l-.012.012-6.988 6.988-.004.004c-.004.004-.008.008-.012.015a.995.995 0 00-.27.91c.013 1.352.266 3.903.891 6.36.329 1.289.747 2.527 1.352 3.527.574.953 1.43 1.793 2.574 1.875.031.008 1.29.258 2.711.387.719.066 1.477.102 2.184.047.703-.055 1.383-.106 1.988-.711a.994.994 0 00.273-.512l.426-2.137c.032.04.043.083.075.118.324.386.78.824 1.519.824h4v-2h-3.867c-.012-.008-.051-.031-.121-.113-.149-.176-.344-.496-.508-.829-.328-.663-.55-1.359-.55-1.359a.994.994 0 00-1.009-.695.998.998 0 00-.925.8l-.907 4.524c-.066.008-.16.067-.55.098-.512.039-1.192.011-1.848-.047a26.723 26.723 0 01-2.52-.36A1.07 1.07 0 009 21c-.262 0-.605-.21-1.04-.92-.429-.712-.823-1.81-1.124-2.99-.504-1.976-.637-3.847-.7-5.09H12c.55 0 1-.448 1-1V5h2c.633.001 1.086.33 1.457.813C16.828 6.297 17 7.027 17 7a1 1 0 00.969 1c.84.027 2.23.07 3.453.508 1.219.433 2.207 1.136 2.61 2.734.437 1.754.714 6.035.468 9.691-.121 1.829-.371 3.528-.734 4.672-.18.57-.399 1-.563 1.211-.168.211-.187.184-.203.184h-2.145a.84.84 0 01-.855-.855C20 25.5 20.5 25 21.145 25H22v-2h-.855A3.163 3.163 0 0018 26.145c0 .269.105.527.297.714.348 1.18 1.27 2.14 2.558 2.14H23c.734 0 1.371-.433 1.777-.948.403-.516.668-1.133.895-1.844.45-1.418.7-3.219.828-5.14.254-3.844.031-8.063-.531-10.31-.57-2.28-2.254-3.554-3.875-4.132-1.38-.496-2.57-.5-3.453-.531-.153-.496-.207-.989-.598-1.5C17.414 3.777 16.367 3 15 3h-2.855a.77.77 0 00-.165-.008zM11 6.414V10H7.414L11 6.414zM21.809 14C20 14 19.98 15.91 20 16c1.809 0 2.34.66 2.71 1 .169-.23.903-3-.901-3z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgEvernote;
