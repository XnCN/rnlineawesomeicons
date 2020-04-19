import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSnowboardingSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M21 4c-1.645 0-3 1.355-3 3s1.355 3 3 3 3-1.355 3-3-1.355-3-3-3zM10.531 5.156L8.875 6.281l2.313 3.407a1.99 1.99 0 001.156.812l2.187.563-3.187 3.093a2.196 2.196 0 00-.344 2.69l1.344 2.312-.938 1.063-1.941 2.168 2.26.474 1.181-1.299 1.438-1.625.469-.53-.344-.626-1.75-2.937a.207.207 0 01.031-.25l4-3.906.938.78-2.563 2.688a2.023 2.023 0 00-.031 2.75l1.531 1.69-.094 1.343-.232 2.887 1.98.416.252-3.146.125-1.815.032-.404-.282-.346-1.843-1.969 2.687-2.812 4.375 3.656 1.281-1.562-7.187-5.94-.157-.156-.218-.031-4.5-1.156-2.313-3.407zM21 6c.563 0 1 .438 1 1s-.438 1-1 1-1-.438-1-1 .438-1 1-1zM4.895 21.553l-1.79.894.137.274a4.967 4.967 0 003.442 2.656l15.746 3.314a4.975 4.975 0 003.265-.421l.752-.375-.894-1.79-.752.375a2.988 2.988 0 01-1.96.254L7.097 23.42a2.99 2.99 0 01-2.065-1.596l-.136-.271z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgSnowboardingSolid;
