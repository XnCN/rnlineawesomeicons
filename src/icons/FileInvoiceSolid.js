import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFileInvoiceSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M6 3v26h20V9.6l-.3-.3-6-6-.3-.3H6zm2 2h10v6h6v16H8V5zm12 1.4L22.6 9H20V6.4zM10 13v2h12v-2H10zm0 5v2h7v-2h-7zm9 0v2h3v-2h-3zm-9 4v2h7v-2h-7zm9 0v2h3v-2h-3z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgFileInvoiceSolid;
