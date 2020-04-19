import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSkatingSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M22.5 4A3.514 3.514 0 0019 7.5c0 1.922 1.578 3.5 3.5 3.5S26 9.422 26 7.5 24.422 4 22.5 4zm0 2c.855 0 1.5.645 1.5 1.5S23.355 9 22.5 9 21 8.355 21 7.5 21.645 6 22.5 6zM9 9v2h8.594L14 14.594a1.995 1.995 0 000 2.812l2 2V24h2v-4.594c0-.527-.219-1.031-.594-1.406l-2-2L19 12.406a1.987 1.987 0 00.438-2.156C19.151 9.566 18.44 9 17.593 9H9zm3.625 8.813L9 21.438l1.406 1.406 3.625-3.625-1.406-1.407zM7 21c-.55 0-1 .45-1 1s.45 1 1 1c.277 0 .54-.102.719-.281.18-.18.281-.442.281-.719 0-.55-.45-1-1-1zm.719 1.719c-.18.18-.313.41-.313.687 0 .551.45 1 1 1 .278 0 .54-.101.719-.281.18-.18.281-.441.281-.719 0-.55-.449-1-1-1-.277 0-.508.133-.687.313zm1.406 1.406c-.18.18-.313.41-.313.688 0 .55.45 1 1 1 .551 0 1-.45 1-1 0-.551-.449-1-1-1-.277 0-.507.132-.687.312zm5.938.875c-.551 0-1 .45-1 1s.449 1 1 1c.55 0 1-.45 1-1s-.45-1-1-1zm1 1c0 .55.449 1 1 1 .55 0 1-.45 1-1s-.45-1-1-1c-.551 0-1 .45-1 1zm2 0c0 .55.449 1 1 1 .55 0 1-.45 1-1s-.45-1-1-1c-.551 0-1 .45-1 1z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgSkatingSolid;
