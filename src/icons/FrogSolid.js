import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFrogSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M21 7a3.004 3.004 0 00-2.625 1.563c-.34.199-1.023.632-1.781 1.468-.934.016-2.676.086-4.657.719-2.117.676-4.386 2.047-5.656 4.563-.011.027-.05.035-.062.062-.051.055-.535.555-1.063 1.344C4.606 17.547 4 18.633 4 19.906c0 .918.32 1.84 1 2.5.223.219.512.371.813.5-.118.157-.243.309-.344.469-.23.36-.469.613-.469 1.281 0 .418.305.817.531.969.227.152.387.21.563.25.347.078.71.086 1.125.094.832.011 1.914-.035 3.125-.094 2.426-.117 5.39-.223 7.5.125l.312-2c-1-.164-2.11-.23-3.218-.25.613-.652 1.062-1.469 1.062-2.469 0-1.597-1.031-2.808-2.219-3.437C12.594 17.214 11.215 17 10 17v2c.941 0 2.07.215 2.844.625.773.41 1.156.848 1.156 1.656 0 .653-.531 1.27-1.406 1.782-.875.511-2.043.78-2.406.78v.032c-1.083.05-2.004.094-2.688.094.105-.14.2-.266.313-.407.492-.605 1-1.125 1-1.125l-1.47-1.375-.03.063c-.504.148-.723.05-.938-.156C6.16 20.762 6 20.336 6 19.906c0-.531.395-1.386.844-2.062.449-.676.875-1.157.875-1.157l.125-.125.062-.156c.93-2.062 2.774-3.148 4.657-3.75C14.444 12.055 16.305 12 17 12h.5l.313-.406c.136-.188.285-.32.437-.469C18.703 12.215 19.758 13 21 13c1.59 0 2.883-1.273 2.969-2.844.457.114.91.266 1.281.469.32.176.578.371.719.5-.008.04-.016.02-.032.063-.066.183-.203.398-.375.656-.347.511-.921 1.101-1.937 1.5l-.625.25v.687c0 1.403-.125 4.852-2.063 6.219l1.157 1.625c2.808-1.984 2.843-5.563 2.843-7.25 1.043-.54 1.82-1.227 2.282-1.906.273-.406.472-.785.593-1.125.122-.34.188-.61.188-.938 0-.773-.383-.969-.688-1.25a5.64 5.64 0 00-1.125-.781c-.812-.441-1.835-.793-2.937-.844A2.99 2.99 0 0021 7zm0 2c.563 0 1 .438 1 1 0 .563-.438 1-1 1-.563 0-1-.438-1-1 0-.563.438-1 1-1zm-2 7.375a6.33 6.33 0 00-1.094 2.688c-.12.777-.09 1.496-.093 1.53v.032c0 .262.046.297.062.344l.031.093c.024.063.063.122.094.188.059.129.125.281.219.469.191.375.46.867.75 1.375.582 1.011 1.164 2.058 1.937 2.718.117.106.254.18.407.22.46.105.664-.016.875-.063.21-.047.418-.086.656-.125.472-.075 1.054-.106 1.875.125l.562-1.938a6.426 6.426 0 00-2.75-.156c-.242.04-.402.09-.562.125-.278-.328-.809-1.082-1.282-1.906a28.256 28.256 0 01-.875-1.657c-.003-.007.004-.027 0-.03.004-.313-.003-.598.063-1.032.086-.55.29-1.191.75-1.844L19 16.375z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgFrogSolid;
