import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSocksSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M9.938 2l-.282.969L5.22 18.53v.032c-.7 2.32.36 4.82 2.531 5.906l.031.031h.032l11.937 4.969c.02.011.043.02.063.031.695.336 1.457.5 2.187.5a4.99 4.99 0 004.469-2.75c1.226-2.46.242-5.488-2.219-6.719l-.063-.031h-.03l-.657-.281c-.008.004-.023-.004-.031 0l-7-2.782 3.25-11.5.25-.937-9.063-2.719L9.937 2zm1.374 2.469l6.22 1.875L17 8.219l-6.219-1.875.531-1.875zM10.22 8.28l6.219 1.875-2.157 7.594-.219.875.813.344 6.781 2.687a8.922 8.922 0 00-2.593 5.375l-7.375-3.093A6.12 6.12 0 0012 22c0-2.633-1.723-4.852-4.094-5.656L10.22 8.28zM7.375 18.25A3.975 3.975 0 0110 22c0 .406-.074.785-.188 1.156l-1.156-.468a2.99 2.99 0 01-1.531-3.563v-.031l.25-.844zm16.281 4.25a2.985 2.985 0 011.032 3.844A2.996 2.996 0 0122 28a3.1 3.1 0 01-1-.188 6.988 6.988 0 012.656-5.312z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgSocksSolid;
