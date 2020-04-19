import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgOilCanSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M11 9v2h2v2H7.562l-1.718-2.563L5.53 10H1v5.688l5 2V25h14.531l.282-.438L29.5 12H31v-2h-3.344l-.25.188L21 15v-2h-6v-2h2V9h-6zm-8 3h1.438L6 14.344V15.5l-3-1.188V12zm22.781 1.938L19.5 23H8v-8h11v4l1.594-1.188 5.187-3.875zM29.5 16S28 18.672 28 19.5a1.5 1.5 0 003 0c0-.828-1.5-3.5-1.5-3.5z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgOilCanSolid;
