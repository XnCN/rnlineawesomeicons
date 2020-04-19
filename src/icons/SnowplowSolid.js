import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSnowplowSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M10.5 6a3.005 3.005 0 00-2.875 2.188l-1.313 4.53-2-.655-.625 1.874 1.47.5-.282.282A2.93 2.93 0 004 16.813V19h-.813l-.156.813-1 5L1.781 26H30.22l-.25-1.188-1-5-.157-.812H28v-2.188a2.93 2.93 0 00-.875-2.093l-.281-.281 1.468-.5-.625-1.876-2 .657-1.312-4.531A3.005 3.005 0 0021.5 6h-11zm0 2h11a.96.96 0 01.938.719L23.655 13H8.344l1.219-4.281A.96.96 0 0110.5 8zm-3.063 7h17.125l1.157 1.125a.944.944 0 01.281.688V19h-2v-2h-4v2h-8v-2H8v2H6v-2.188c0-.265.094-.5.281-.687L7.438 15zm-2.625 6h22.375l.594 3H4.22l.593-3z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgSnowplowSolid;
