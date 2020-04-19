import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSchlix(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M25.455 5l-4.26 2.264 3.147 2.675L30 7.564 25.455 5zm-7.66 1.236l-2.652 1.637 1.45 2.055 3.216-1.684-2.014-2.008zm-4.578.737l-1.852 1.283.719 1.672 2.13-1.307-.997-1.648zm-3.047.494L8.78 8.517l.356 1.405 1.548-1.063-.515-1.392zm-1.66 2.756l-1.295.9.209 1.649 1.44-.883-.354-1.666zm2.71.07l-1.718 1.063.512 2.019 1.966-1.033-.76-2.049zm4.079.1l-2.45 1.298 1.128 2.602 2.947-1.236-1.625-2.664zm6.82.167l-3.906 1.67 2.564 3.647 5.143-1.522-3.8-3.795zM6.855 12.99l-1.207.744.07 1.891 1.329-.695-.192-1.94zm2.374.621l-1.59.836.302 2.37 1.805-.755-.517-2.45zm3.576.936l-2.246.963.795 3.14 2.68-.789-1.23-3.314zm-7.61 1.201l-1.115.592L4 18.477l1.219-.512-.024-2.217zm13.592.365L15.231 17.2l1.99 4.598 4.63-.656-3.064-5.028zm-11.555.815l-1.457.62.094 2.716 1.643-.483-.28-2.853zm3.077 1.767l-2.043.627.47 3.686 2.414-.342-.841-3.97zm5.148 2.979l-3.203.498 1.408 5.56 4.115.192-2.32-6.25z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgSchlix;
