import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgKhandaSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M15.492 3l-2.879 2.578a.695.695 0 00-.173.783l.253.56c-1.59.957-2.666 2.683-2.666 4.675 0 2.039 1.129 3.793 2.782 4.734l-.383.844a.692.692 0 00.136.746l2.15 1.762v.97l-3.74-2.603a7.778 7.778 0 01-3.466-6.453c0-1.518.582-3.15 1.387-4.428.189-.302.117-.674-.127-.934s-.668-.301-.977-.13c-3.835 2.092-5.878 6.921-4.137 11.35.345.877.876 1.679 1.489 2.396l2.63 2.886a.78.78 0 00.96.182l3.974-1.758 1.428.994-2.719 1.553c-.082-.018-.157-.049-.244-.049A1.172 1.172 0 1011.172 26c.59 0 1.058-.445 1.138-1.014l2.403-1.334v1.461c-.458.273-.713.753-.713 1.325C14 27.3 14.63 28 15.492 28c.863 0 1.508-.7 1.508-1.563 0-.572-.269-1.05-.727-1.322v-1.472l2.416 1.343c.081.568.548 1.014 1.14 1.014a1.172 1.172 0 000-2.344c-.088 0-.163.031-.245.05l-2.717-1.554 1.426-.994 3.977 1.758a.78.78 0 00.959-.182l2.46-2.687c.921-1.075 1.66-2.32 2.014-3.692 1.058-4.085-.946-8.292-4.545-10.257a.78.78 0 00-1.037 1.1c.805 1.276 1.375 2.878 1.375 4.392a7.794 7.794 0 01-3.48 6.465l-3.743 2.605v-.98l2.153-1.762a.692.692 0 00.137-.746l-.383-.842c1.652-.94 2.779-2.698 2.779-4.736 0-1.992-1.075-3.716-2.666-4.672l.256-.56a.697.697 0 00-.176-.784L15.493 3zm1.957 5.672c.935.656 1.551 1.715 1.551 2.916 0 1.256-.669 2.362-1.678 3.008l-.328-.7a6.122 6.122 0 010-4.255l.455-.97zm-3.906.017l.451.963a6.085 6.085 0 010 4.23l-.326.696C12.665 13.936 12 12.837 12 11.588c0-1.194.613-2.247 1.543-2.899z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgKhandaSolid;
