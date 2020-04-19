import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgKaggle(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M10.352 4c-.234 0-.352.117-.352.352v23.293c0 .233.117.351.352.351h2.296c.234 0 .354-.116.354-.351v-4.836l1.808-1.723 5.239 6.664c.142.165.306.25.496.25h3.172c.166 0 .26-.048.283-.143l-.066-.359-6.91-8.588 6.626-6.412c.123-.128.08-.498-.252-.498h-3.28c-.167 0-.333.086-.499.252L13 18.975V4.352c0-.235-.117-.352-.352-.352h-2.296z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgKaggle;
