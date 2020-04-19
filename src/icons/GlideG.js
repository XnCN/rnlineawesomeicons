import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgGlideG(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16.035 3C10.19 3 7 8.773 7 13.074c0 4.464 2.837 6.938 7.27 6.938.609 0 .558-.05.558.193-.858 6.546-4.611 6.76-4.611 4.805 0-1.991 2.75-2.486 2.775-2.608C12.976 21.782 10.604 21 10 21c-1.721.005-3 2.108-3 3.535C7 27.171 8.54 29 11.217 29c3.93 0 6.804-3.952 7.687-7.385.767-3.072.57-3.212 1-3.431 1.635-.823 2.921-.612 4.764-.612.904 0 1.548.189 2.99.428.147 0 .34-.147.34-.295.001-.406-1.617-3.365-1.998-3.512-.178-.07-.588-.193-.781-.193-1.884 0-3.237.384-4.826 1.283l-.045-.045C20.704 12.836 22 10.285 22 7.822 22 4.192 19.6 3 16.035 3zm.254 2.828c.945 0 1.477.39 1.477 1.172-.005.726-.137 1.446-.285 2.152-.473 2.27-1.405 4.838-1.872 7.108-.117.518-.675.394-1.117.394-1.945 0-2.492-2.122-2.492-3.71 0-2.388.919-5.55 3.143-6.774.355-.208.75-.342 1.146-.342z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgGlideG;
