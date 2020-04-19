import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function SvgMeetup(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <G clipPath="url(#meetup_svg__clip0)">
        <Path
          d="M9.5 1a.5.5 0 100 1 .5.5 0 000-1zm9 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM14 5a5.996 5.996 0 00-5.656 4.016A4.492 4.492 0 004 13.5c0 .707.178 1.368.469 1.963A5 5 0 007.01 23.9c-.001.033-.01.065-.01.099a5 5 0 005 5c1.213 0 2.31-.449 3.176-1.168a3.987 3.987 0 006.687-1.85A5.498 5.498 0 0027 20.5c0-1.152-.355-2.22-.96-3.104.591-.627.96-1.466.96-2.396 0-1.401-.829-2.6-2.018-3.16.007-.113.018-.225.018-.34A5.5 5.5 0 0019.5 6c-.623 0-1.22.108-1.777.299A5.973 5.973 0 0014 5zM7 6a1 1 0 100 2 1 1 0 000-2zm20 3a1 1 0 100 2 1 1 0 000-2zm-9.994.992c.146-.013.309-.005.498.026.51.074.807.423 1.195.792.314.32.542.123.72.018.278-.16.494-.3 1.32-.281.861.018 1.847.332 2.056 1.81.228 1.657-2.655 5.912-2.465 7.883.135 1.386 2.464.4 2.654 1.668.248 1.65-2.898 1.035-3.601.684-1.127-.567-1.816-1.85-1.533-3.117.234-.948 2.308-4.822 2.394-5.4.074-.617-.244-.673-.435-.673-.265-.018-.456.107-.721.495-.228.35-2.816 5.615-3.043 6.052-.721 1.392-2.587 1.164-2.377-.246.055-.419 1.711-4.186 1.78-4.783.054-.351-.018-.74-.37-.932-.35-.179-.775.106-.898.315-.18.302-2.501 6.48-2.748 6.935-.437.788-.882 1.035-1.565 1.073-1.6.091-2.8-1.265-2.271-2.903.228-.739 1.772-6.294 2.566-7.705.53-.948 1.99-1.667 2.994-1.23.53.228 1.27.596 1.479.7.493.235 1.02-.382 1.23-.56.411-.355.702-.581 1.14-.62zM30.5 13a.5.5 0 100 1 .5.5 0 000-1zm-29 1a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM29 16a1 1 0 100 2 1 1 0 000-2zM5.5 25a.5.5 0 100 1 .5.5 0 000-1zm18 2a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM15 29a1 1 0 100 2 1 1 0 000-2z"
          fill={props.fill}
        />
      </G>
      <Defs>
        <ClipPath id="meetup_svg__clip0">
          <Path fill="#fff" d="M0 0h32v32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgMeetup;
