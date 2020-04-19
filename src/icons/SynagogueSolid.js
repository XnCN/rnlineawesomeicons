import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSynagogueSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 4.656l-.656.594L7.625 12H4v15h10v-4c0-1.117.883-2 2-2s2 .883 2 2v4h10V12h-3.625l-7.719-6.75L16 4.656zM6 7c-.582.875-2 1.008-2 2.656 0 .926.656 1.344.656 1.344h2.688S8 10.582 8 9.656C8 7.922 6.656 7.848 6 7zm20 0c-.582.875-2 1.5-2 2.656 0 .926.656 1.344.656 1.344h2.688S28 10.582 28 9.656C28 8.414 26.656 7.848 26 7zm-10 .313l7.344 6.437.281.25H26v11h-6v-2c0-2.2-1.8-4-4-4s-4 1.8-4 4v2H6V14h2.375l.281-.25L16 7.312zm0 4.156l-.875 1.5h-1.719l.844 1.5-.844 1.5h1.719L16 17.5l.875-1.531h1.719l-.844-1.5.844-1.5h-1.719l-.875-1.5z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgSynagogueSolid;
