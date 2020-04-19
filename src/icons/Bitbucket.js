import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgBitbucket(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 5c-2.293 0-4.594.297-6.406.781-.906.242-1.68.496-2.313.875C6.648 7.036 6 7.602 6 8.5c0 .223.055.441.125.625.148.762 2.652 13.8 2.906 15.063.121.601.504 1.046.938 1.375.433.328.93.574 1.531.78 1.203.415 2.75.657 4.5.657s3.29-.242 4.5-.656c.605-.207 1.125-.446 1.563-.782.437-.335.847-.777.937-1.406.02-.14.21-1.343.5-2.843.29-1.5.664-3.38 1.031-5.25.688-3.52 1.266-6.543 1.344-6.938A1.78 1.78 0 0026 8.5c0-.898-.648-1.465-1.281-1.844-.633-.379-1.407-.633-2.313-.875C20.594 5.297 18.293 5 16 5zm0 2c2.125 0 4.32.266 5.906.688.793.21 1.414.468 1.782.687.101.063.109.086.156.125-.047.04-.055.063-.157.125-.367.219-.988.477-1.78.688C20.32 9.733 18.124 10 16 10s-4.32-.266-5.906-.688c-.793-.21-1.414-.468-1.781-.687-.102-.063-.11-.086-.157-.125.047-.04.055-.063.156-.125.368-.219.989-.477 1.782-.688C11.68 7.266 13.875 7 16 7zm-7.531 3.875c.355.125.719.234 1.125.344 1.812.484 4.113.781 6.406.781 2.293 0 4.594-.297 6.406-.781.407-.11.77-.219 1.125-.344-.277 1.36-.492 2.344-.968 4.781-.235 1.196-.418 2.266-.625 3.375-.012.016-.024.004-.125.125-.141.168-.399.453-.813.719-.828.535-2.324 1.125-5 1.125s-4.2-.594-5.031-1.125a3.256 3.256 0 01-.781-.688L10.03 19c-.68-3.508-1.16-6.04-1.562-8.125zM16 13c-1.645 0-3 1.355-3 3s1.355 3 3 3 3-1.355 3-3-1.355-3-3-3zm0 2c.563 0 1 .438 1 1 0 .563-.438 1-1 1-.563 0-1-.438-1-1 0-.563.438-1 1-1zm-5.406 6.906C11.797 22.504 13.512 23 16 23c2.457 0 4.176-.465 5.375-1.063-.152.758-.34 1.657-.375 1.907-.02.027-.074.062-.156.125-.184.14-.508.343-.969.5-.922.312-2.309.531-3.875.531-1.566 0-2.93-.215-3.844-.531-.457-.157-.808-.352-1-.5-.191-.149-.199-.219-.187-.157-.031-.148-.278-1.414-.375-1.906z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgBitbucket;
