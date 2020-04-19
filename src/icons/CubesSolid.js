import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCubesSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 4l-.375.156-6 2.407-.625.25v6.718l-5.406 2.344-.594.281v8.063l.5.312 6 3.344.469.25.469-.219L16 25.125l5.563 2.781.468.219.469-.25 6-3.344.5-.312v-8.063l-.594-.281L23 13.531V6.812l-.625-.25-6-2.406L16 4zm0 2.188l3.281 1.28L16 8.75l-3.281-1.281L16 6.187zm-5 2.75l4 1.53v4.876l-4-1.781V8.936zm10 0v4.624l-4 1.782v-4.875l4-1.531zm-11 6.374l3.625 1.594L10 18.688l-3.625-1.813L10 15.312zm12 0l3.625 1.563L22 18.688l-3.625-1.782 1.125-.5 2.5-1.093zM5 18.407l4 2v4.907l-4-2.25v-4.657zm22 0v4.657l-4 2.25v-4.907l4-2zm-12 .063v4.906l-4 2v-4.969l4-1.937zm2 0l4 1.937v4.969l-4-2v-4.906z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgCubesSolid;
