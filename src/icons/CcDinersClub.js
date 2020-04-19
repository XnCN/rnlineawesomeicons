import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCcDinersClub(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M5 6C3.355 6 2 7.355 2 9v14c0 1.645 1.355 3 3 3h22c1.645 0 3-1.355 3-3V9c0-1.645-1.355-3-3-3H5zm0 2h22c.566 0 1 .434 1 1v14c0 .566-.434 1-1 1H5c-.566 0-1-.434-1-1V9c0-.566.434-1 1-1zm10 2c-3.3 0-6 2.7-6 6s2.7 6 6 6h2c3.313 0 6-2.688 6-6 0-3.313-2.688-6-6-6h-2zm0 2c2.223 0 4 1.777 4 4s-1.777 4-4 4-4-1.777-4-4 1.777-4 4-4zm-.813 1.656C13.216 14 12.5 14.91 12.5 16c0 1.09.715 2 1.688 2.344v-4.688zm1.626 0v4.688C16.785 18 17.5 17.09 17.5 16c0-1.09-.715-2-1.688-2.344z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgCcDinersClub;
