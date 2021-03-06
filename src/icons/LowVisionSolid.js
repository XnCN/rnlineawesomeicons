import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgLowVisionSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M3.719 2.281L2.28 3.72l26 26 1.438-1.438-6.594-6.593c3.313-2.067 5.512-4.786 5.656-4.97l.219-.28v-.907l-.25-.281C28.496 14.953 22.523 8 16 8c-1.902 0-3.68.531-5.281 1.281l-7-7zM16 10c4.648 0 9.281 4.48 10.75 6.031-.813.918-2.652 2.801-5.063 4.219L19.438 18a3.992 3.992 0 00-.625-4.844c-1.316-1.316-3.28-1.492-4.812-.594l-1.75-1.75C13.434 10.337 14.684 10 16 10zm-8.25 1.031c-2.68 1.926-4.402 4.09-4.531 4.25l-.219.25v.938l.25.281C3.512 17.047 9.719 24 16 24c1.398 0 2.75-.273 4-.719L7.75 11.031zm.625 2.063l8.813 8.812A8.54 8.54 0 0116 22c-.484 0-.98-.059-1.469-.156L6.97 14.25a22.09 22.09 0 011.406-1.156zm-2.156 1.844l6.312 6.28c-3.242-1.35-6.152-4.097-7.281-5.25.234-.265.57-.636.969-1.03z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgLowVisionSolid;
