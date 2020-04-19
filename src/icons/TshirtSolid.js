import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgTshirtSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 3c-.926 0-1.945.27-2.813.531-.851.258-1.476.524-1.5.531h-.03l-2.876.97-.094.03a4.16 4.16 0 00-.374.125L8 5.282v.032c-.836.359-2.145 1.136-2.906 2.75C4.059 10.25 4 12.968 4 12.968V15h4v14h16V15h4v-2.094s-.086-.847-.25-1.875c-.164-1.027-.332-2.16-.906-3.062A7.173 7.173 0 0024 5.375v-.094l-.406-.125c-.059-.027-.047-.011-.094-.031l-.188-.063-2.968-1h-.032c-.023-.007-.648-.273-1.5-.53C17.945 3.27 16.927 3 16 3zm0 2c.434 0 1.426.23 2.219.469.207.062.195.066.375.125-.063.093-.11.183-.188.281C17.938 6.457 17.281 7 16 7c-1.281 0-1.938-.543-2.406-1.125-.078-.098-.125-.188-.188-.281.18-.059.168-.063.375-.125C14.574 5.23 15.566 5 16 5zm-4.563 1.219c.149.285.34.59.594.906A5.026 5.026 0 0016 9c1.906 0 3.23-.957 3.969-1.875.254-.316.445-.621.593-.906l1.438.5V27H10V6.719l1.438-.5zM8 7.562V13H6c.004-.055.156-2.477.906-4.063.301-.636.7-1.078 1.094-1.374zm16 .157c.367.308.773.71 1.156 1.312.16.254.473 1.375.625 2.313.145.886.211 1.578.219 1.656h-2V7.719z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgTshirtSolid;
