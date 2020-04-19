import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function SvgNs8(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <G clipPath="url(#ns8_svg__clip0)">
        <Path
          d="M29.02 10.021c-2.034-.001-4.155 1.155-3.569 3.014v.004c-2.19.435-3.714 1.34-4.709 2.41-.15-.49-.679-.83-1.699-.83h-4.38c-.466 0-.645-.114-.575-.369.08-.275.094-.34.184-.61.104-.32.39-.355.665-.355h6.674l.487-1.574c-6.985 0-7.225-.027-8.006.059-.615.065-1.177.24-1.532.75-.34.495-.718 1.78-.878 2.355-.27.97-.032 1.43 1.638 1.43h4.366c.39 0 .44.135.384.33-.055.22-.14.5-.224.73-.08.21-.235.37-.69.37h-6.34l-.58 1.976c6.995 0 7.264-.03 8.045-.115.33-.035.651-.106.926-.246.01.185.026.366.06.54.27 1.526 1.37 2.615 2.84 2.975 2.43.595 5.434-.84 6.754-3.4.935-1.81.705-3.81-.17-5.275h.006c1.48-.295 3.515-1.1 3.285-2.53-.145-.9-1.195-1.404-2.105-1.564a5.015 5.015 0 00-.857-.075zm-.36.977c.149-.002.296.011.432.041.765.17.986.796.246 1.22-.535.306-1.181.406-1.711.481-.21-.3-.49-.924-.125-1.314.251-.27.713-.42 1.158-.428zm-19.305.705v.002l-1.709 5.686-2.726-5.686H2.45L0 19.711h2.244l1.557-5.326 2.53 5.326h2.845l2.424-8.008H9.355zm16.823 2.803c.335.704.514 1.6.36 2.39-.296 1.476-1.831 2.39-3.081 2.196-1.545-.24-1.925-1.975-.705-3.24.81-.84 2.26-1.201 3.426-1.346z"
          fill={props.fill}
        />
      </G>
      <Defs>
        <ClipPath id="ns8_svg__clip0">
          <Path fill="#fff" d="M0 0h32v32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgNs8;
