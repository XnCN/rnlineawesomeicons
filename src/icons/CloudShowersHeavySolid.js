import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

function SvgCloudShowersHeavySolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <G clipPath="url(#cloud-showers-heavy-solid_svg__clip0)">
        <Path
          d="M16 5c-3.332 0-6.05 2.371-6.75 5.5-1.219.48-2.125 1.371-2.656 2.563C6.394 13.039 6.21 13 6 13c-3.3 0-6 2.7-6 6 0 .066-.004.121 0 .188a5.966 5.966 0 004.844 5.687L6.75 23H6a3.99 3.99 0 01-4-3.875V19c0-2.219 1.781-4 4-4 .293 0 .578.027.875.094l1 .219.188-.97c.246-1.113 1.14-1.984 2.25-2.25l.656-.155.094-.688A4.97 4.97 0 0116 7a5.003 5.003 0 014.469 2.75l.375.781.843-.281c.438-.152.868-.25 1.313-.25 2.219 0 4 1.781 4 4 0-.008-.016.078-.031.313l-.063.718.657.281A4.007 4.007 0 0130 19c0 2.219-1.781 4-4 4h-.688l-2.03 2H26c3.3 0 6-2.7 6-6 0-2.164-1.27-3.945-3-5 0-3.3-2.7-6-6-6-.434 0-.797.129-1.188.219C20.563 6.3 18.453 5 16 5zm-2.406 14.094l-9.656 9.5L5.343 30 15 20.5l-1.406-1.406zm5 0l-9.657 9.5L10.345 30 20 20.5l-1.406-1.406zm5 0l-9.657 9.5L15.345 30 25 20.5l-1.406-1.406z"
          fill={props.fill}
        />
      </G>
      <Defs>
        <ClipPath id="cloud-showers-heavy-solid_svg__clip0">
          <Path fill="#fff" d="M0 0h32v32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default SvgCloudShowersHeavySolid;
