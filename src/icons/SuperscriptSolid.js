import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSuperscriptSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M24.969 3A2.988 2.988 0 0022 5.969V6h2v-.031c0-.547.422-.969.969-.969h.062c.547 0 .969.422.969.969a.93.93 0 01-.406.781l-2.125 1.469A3.387 3.387 0 0022 11v1h6v-2h-3.469c.04-.031.02-.098.063-.125l2.125-1.469A2.953 2.953 0 0028 5.97 2.988 2.988 0 0025.031 3h-.062zM4.156 8l1 1.531L9.313 16l-4.157 6.469-1 1.531h6.375l.313-.469L12.5 20.97l1.656 2.562.313.469h6.375l-1-1.531L15.687 16l4.157-6.469 1-1.531h-6.375l-.313.469L12.5 11.03 10.844 8.47 10.53 8H4.156zm3.657 2h1.656l2.187 3.438.844 1.312.844-1.313L15.53 10h1.656l-3.53 5.469-.345.531.344.531L17.187 22h-1.656l-2.187-3.438-.844-1.312-.844 1.313L9.47 22H7.813l3.53-5.469.345-.531-.344-.531L7.813 10z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgSuperscriptSolid;
