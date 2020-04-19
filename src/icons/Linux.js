import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgLinux(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 5C10.488 5 6 9.488 6 15v8c0 1.117-.883 2-2 2v2c2.2 0 4-1.8 4-4v-8c0-4.43 3.57-8 8-8 1.016 0 1.984.188 2.875.531-.293.414-.137 1.145.406 1.688.586.586 1.39.734 1.782.344.144-.145.187-.368.187-.594A7.978 7.978 0 0124 15v8c0 2.2 1.8 4 4 4v-2c-1.117 0-2-.883-2-2v-8c0-5.512-4.488-10-10-10zm-3 6c-1.52 0-2.668.852-3.25 1.875C9.168 13.898 9 15.047 9 16c0 1.355.414 2.348.875 2.969.043.058.082.101.125.156-.613.656-1 1.469-1 2.375 0 1.43.973 2.598 2.25 3.344C12.527 25.59 14.184 26 16 26c1.816 0 3.473-.41 4.75-1.156C22.027 24.098 23 22.93 23 21.5c0-.906-.387-1.719-1-2.375.043-.055.082-.098.125-.156.46-.621.875-1.614.875-2.969 0-.953-.168-2.102-.75-3.125A3.707 3.707 0 0019 11a3.687 3.687 0 00-3 1.5 3.687 3.687 0 00-3-1.5zm0 2c.867 0 1.21.313 1.531.875.32.563.469 1.418.469 2.125h2c0-.707.148-1.563.469-2.125.32-.563.664-.875 1.531-.875.867 0 1.21.313 1.531.875.32.563.469 1.418.469 2.125 0 .96-.277 1.48-.5 1.781-.07.098-.11.14-.156.188-.227-.114-.446-.25-.688-.344.211-.273.344-.672.344-1.125 0-.828-.45-1.5-1-1.5s-1 .672-1 1.5c0 .266.078.504.156.719A10.956 10.956 0 0016 17c-.758 0-1.469.082-2.156.219.078-.215.156-.453.156-.719 0-.828-.45-1.5-1-1.5s-1 .672-1 1.5c0 .453.133.852.344 1.125-.242.094-.461.23-.688.344a1.34 1.34 0 01-.156-.188c-.223-.3-.5-.82-.5-1.781 0-.707.148-1.563.469-2.125.32-.563.664-.875 1.531-.875zm3 6c1.5 0 2.855.352 3.75.875S21 20.996 21 21.5s-.355 1.102-1.25 1.625c-.895.523-2.25.875-3.75.875s-2.855-.352-3.75-.875S11 22.004 11 21.5s.355-1.102 1.25-1.625C13.145 19.352 14.5 19 16 19zm-2.5 1.438l-1 1.718S13.926 23 16 23s3.5-.844 3.5-.844l-1-1.718S17.547 21 16 21c-1.547 0-2.5-.563-2.5-.563z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgLinux;
