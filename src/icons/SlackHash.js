import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSlackHash(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M17.656 3a2.266 2.266 0 00-.875.125 2.136 2.136 0 00-1.343 2.719l.906 2.656-5.125 1.719-.844-2.563a2.136 2.136 0 00-2.719-1.343c-1.133.378-1.754 1.59-1.375 2.718l.844 2.531-2.656.907c-1.13.379-1.723 1.62-1.344 2.75a2.136 2.136 0 002.719 1.344l2.656-.875 1.719 5.093-2.563.844a2.136 2.136 0 00-1.343 2.719c.378 1.133 1.59 1.754 2.718 1.375l2.531-.844.907 2.656c.379 1.13 1.62 1.723 2.75 1.344a2.136 2.136 0 001.344-2.719l-.875-2.656 5.093-1.719.844 2.563a2.136 2.136 0 002.719 1.343c1.133-.378 1.754-1.59 1.375-2.718l-.844-2.532 2.656-.906c1.13-.379 1.723-1.62 1.344-2.75a2.136 2.136 0 00-2.719-1.343l-2.656.874-1.719-5.093 2.563-.844a2.136 2.136 0 001.343-2.719c-.378-1.129-1.59-1.754-2.718-1.375l-2.532.844-.906-2.656A2.155 2.155 0 0017.656 3zm.032 9.594l1.718 5.094-5.093 1.718-1.72-5.093 5.095-1.72z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgSlackHash;
