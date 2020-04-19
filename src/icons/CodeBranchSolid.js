import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgCodeBranchSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M11 4C9.355 4 8 5.355 8 7c0 1.293.844 2.395 2 2.813v12.374c-1.156.418-2 1.52-2 2.813 0 1.645 1.355 3 3 3s3-1.355 3-3c0-1.27-.816-2.344-1.938-2.781.145-1.23.622-1.836 1.376-2.344.898-.605 2.277-.965 3.78-1.313 1.505-.347 3.118-.707 4.47-1.656 1.187-.832 2.085-2.195 2.28-4.093C25.142 12.402 26 11.3 26 10c0-1.645-1.355-3-3-3s-3 1.355-3 3c0 1.277.832 2.352 1.969 2.781-.137 1.313-.645 1.965-1.407 2.5-.898.63-2.285 1-3.78 1.344-1.497.344-3.118.648-4.47 1.563-.109.074-.21.168-.312.25V9.813c1.156-.418 2-1.52 2-2.813 0-1.645-1.355-3-3-3zm0 2c.563 0 1 .438 1 1 0 .563-.438 1-1 1-.563 0-1-.438-1-1 0-.563.438-1 1-1zm12 3c.563 0 1 .438 1 1 0 .563-.438 1-1 1-.563 0-1-.438-1-1 0-.563.438-1 1-1zM11 24c.563 0 1 .438 1 1 0 .563-.438 1-1 1-.563 0-1-.438-1-1 0-.563.438-1 1-1z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgCodeBranchSolid;
