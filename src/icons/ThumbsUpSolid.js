import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgThumbsUpSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16.688 3l-.313.281L9.594 10H5v16h16.844c1.41 0 2.64-.996 2.937-2.375l2.157-10C27.331 11.777 25.887 10 24 10h-5.75l.188-.75c.203-.156.332-.223.625-.625.468-.64.937-1.633.937-2.969C20 4.23 18.71 3 17.094 3h-.407zm.718 2.094c.422.082.594.254.594.562 0 .903-.273 1.461-.531 1.813-.258.351-.438.437-.438.437l-.343.188-.125.406-.594 2.25-.313 1.25H24c.66 0 1.105.574.969 1.219l-2.125 10c-.102.468-.524.781-1 .781H11V11.406l6.406-6.312zM7 12h2v12H7V12z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgThumbsUpSolid;
