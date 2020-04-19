import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgBasketballBallSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3zm-1.125 2.063c.043-.004.082.003.125 0V15h-3.063a12.925 12.925 0 00-3.03-7.406c1.644-1.39 3.698-2.301 5.968-2.532zm2.125 0a10.894 10.894 0 016.094 2.53A12.924 12.924 0 0020.062 15H17V5.062zM7.5 9.03A10.876 10.876 0 019.938 15H5.061A10.905 10.905 0 017.5 9.031zm17 0A10.905 10.905 0 0126.938 15h-4.875A10.876 10.876 0 0124.5 9.031zM5.062 17h4.875A10.877 10.877 0 017.5 22.969 10.906 10.906 0 015.062 17zm6.875 0H15v9.938a10.893 10.893 0 01-6.094-2.532A12.924 12.924 0 0011.937 17zM17 17h3.063a12.924 12.924 0 003.03 7.406A10.894 10.894 0 0117 26.938V17zm5.063 0h4.875a10.905 10.905 0 01-2.438 5.969A10.876 10.876 0 0122.062 17z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgBasketballBallSolid;
