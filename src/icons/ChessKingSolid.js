import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgChessKingSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 3c-1.094 0-2 .906-2 2 0 .36.11.707.281 1H8v2.375l.219.25L11.875 13c-.55.035-.973.512-.938 1.063.036.55.512.972 1.063.937h.656l-1.562 5.563-.063.156L10.375 22H8.906c-.55.027-.98.496-.953 1.047.027.55.496.98 1.047.953l-1.813 2.406-.187.25V29h18v-2.344l-.188-.25L23 24c.36.004.695-.184.879-.496a1.01 1.01 0 000-1.008c-.184-.312-.52-.5-.879-.496h-1.375l-.656-1.281-.032-.063-.03-.093L19.343 15H20a1.005 1.005 0 001.078-.922A1.005 1.005 0 0020.156 13l3.625-4.375.219-.25V6h-6.281c.172-.293.281-.64.281-1 0-1.094-.906-2-2-2zm-5.688 5h11.376l-4.157 5H14.47l-4.156-5zm4.438 7h2.5l1.781 6.281.032.094.312.625h-6.75l.313-.625.03-.094L14.75 15zm-3.25 9h9l2.25 3H9.25l2.25-3z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgChessKingSolid;
