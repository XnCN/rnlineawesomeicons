import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgSortAlphaDownSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M8.188 5l-.22.656L6.032 11H6v.063l-.938 2.593-.062.156V15h2v-.844L7.406 13h3.188L11 14.156V15h2v-1.188l-.063-.156L12 11.062V11h-.031L10.03 5.656 9.812 5H8.188zM22 5v18.688l-2.594-2.594L18 22.5l4.281 4.313.719.687.719-.688L28 22.5l-1.406-1.406L24 23.687V5h-2zM9 8.656L9.844 11H8.156L9 8.656zM5 17v2h5.563L5.28 24.281 5 24.594V27h8v-2H7.437l5.282-5.281.281-.313V17H5z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgSortAlphaDownSolid;
