import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgMarsStrokeSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M17 4v2h7.563L20 10.563 17.719 8.28 16.28 9.72 18.563 12l-1.688 1.688C15.523 12.645 13.832 12 12 12c-4.406 0-8 3.594-8 8 0 4.406 3.594 8 8 8 4.406 0 8-3.594 8-8 0-1.832-.645-3.523-1.688-4.875L20 13.437l2.281 2.282 1.438-1.438L21.437 12 26 7.437V15h2V4H17zm-5 10c3.324 0 6 2.676 6 6s-2.676 6-6 6-6-2.676-6-6 2.676-6 6-6z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgMarsStrokeSolid;
