import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgAppStore(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3zm0 2c6.086 0 11 4.914 11 11s-4.914 11-11 11S5 22.086 5 16 9.914 5 16 5zm-.031 3.25a.78.78 0 00-.25.094l-.5.281a.616.616 0 00-.219.844l4.281 7.344 1.563-.907-4.282-7.344c-.128-.218-.355-.343-.593-.312zm-1.313 2.438a.641.641 0 00-.625.312l-.531.938 1.625.937.531-.938a.616.616 0 00-.219-.843l-.562-.313c-.074-.043-.14-.082-.219-.094zm-1.281 1.468l-3.781 6.469 1.594.938 3.78-6.47-1.593-.937zM8 15.094v1.812h2.281l1.063-1.812H8zm6.063 0l-1 1.812h5.843l-1-1.812h-3.843zm6.687 0l.969 1.812h2.25v-1.812H20.75zm.281 1.125l-1.562.906.906 1.563 1.563-.907-.907-1.562zm.813 1.968a.468.468 0 00-.157.063c-.253.145-.62.367-.843.5-.418.25-.094.996 0 1.156.543.91 1.11.793 1.531 1.438.23.351.145.508.219.625.027.043.12.082.156.031.652-.902.473-2.469 0-3.156-.191-.282-.54-.719-.906-.657zm-12.469.782l-.781 2.937a.151.151 0 00.062.157c.047.027.117.007.156-.032L11 19.906l-1.625-.937z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgAppStore;
