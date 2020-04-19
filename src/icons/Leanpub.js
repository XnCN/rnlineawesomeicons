import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgLeanpub(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M10.344 6c-3.39 0-6.938 1.906-6.938 1.906l-.469.25-.062.531L1 24.875l-.188 1.719 1.594-.688s4.117-1.718 8-1.718c2.301 0 5.063 1.656 5.063 1.656l.531.343.531-.343s2.762-1.657 5.063-1.657c3.883 0 8 1.72 8 1.72l1.593.687L31 24.875 29.125 8.687l-.063-.53-.468-.25S25.047 6 21.656 6C18.777 6 16.684 7.258 16 7.688 15.316 7.258 13.223 6 10.344 6zm0 2c2.586 0 5.094 1.625 5.094 1.625L16 10l.563-.375S19.07 8 21.655 8c2.278 0 4.864 1.188 5.532 1.5l1.625 14.031c-1.532-.55-4.055-1.343-7.22-1.343-2.722 0-4.917 1.277-5.593 1.687-.676-.41-2.871-1.688-5.594-1.688-3.164 0-5.687.793-7.219 1.344L4.813 9.5C5.48 9.187 8.066 8 10.343 8zm0 1.5c-1.446 0-3.239.633-4.156 1l-1.25 10.938c1.96-.489 3.792-.75 5.468-.75 2.13 0 4.18.777 5.594 1.468 1.508-.734 3.781-1.55 6.031-1.437l-1.25-11.125c-1.812.277-3.386 1.27-3.406 1.281L16 11.813l-1.406-.938c-.02-.012-2.102-1.375-4.25-1.375z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgLeanpub;
