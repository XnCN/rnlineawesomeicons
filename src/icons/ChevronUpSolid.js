import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgChevronUpSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 5.688L1.594 20.093l.687.718 3.906 3.907.72.687L16 16.313l9.094 9.093.718-.687 3.907-3.907.687-.718L16 5.687zm0 2.843l11.563 11.594-2.438 2.438-8.406-8.375L16 13.5l-.719.688-8.406 8.374-2.438-2.437L16 8.531z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgChevronUpSolid;
