import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgFreeCodeCamp(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M6.03 6C4.774 6 1 10.166 1 16.318 1 21.708 4.653 26 6.088 26c.39 0 .912-.427.912-.863 0-.353-.38-.828-1.291-1.825-.208-.229-.39-.427-.486-.552C3.859 20.977 2.974 18.527 3 15.978c.027-2.62 1.011-5.348 3.064-7.568l.135-.144c.338-.36.801-.852.801-1.342C7 6.434 6.457 6 6.03 6zm19.94 0c-.427 0-.97.434-.97.924 0 .49.463.983.8 1.342l.136.144c2.052 2.22 3.037 4.947 3.064 7.569.026 2.549-.859 4.998-2.223 6.78-.096.126-.278.325-.486.553C25.38 24.31 25 24.785 25 25.137c0 .436.522.863.912.863C27.347 26 31 21.707 31 16.318 31 10.166 27.225 6 25.97 6zM13.093 7.025c-.133.033-.215.104-.215.227 0 .123.131.205.234.256.472.287 1.006 1.097 1.006 1.959 0 2.369-2.965 4.522-2.965 6.984-.01 2.072 1.448 3.724 3.356 4.422.226.092.625.265.625-.063 0-.133-.112-.142-.215-.183a1.955 1.955 0 01-.984-.781c-.421-.616-.514-1.242-.514-1.98 0-1.642 2.268-1.94 2.268-3.59 0-.627-.4-.811-.4-.985 0-.113.04-.113.153-.113.411 0 .975.676 1.149 1.015.113.236.123.309.123.565 0 .359-.031.729-.031 1.098 0 1.385 1.63 1.014 1.63.347 0-.307-.183-.593-.183-.89 0-.043 0-.063.04-.063.175 0 .481.39.563.514.297.46.442 1.065.442 1.609 0 1.662-1.518 2.512-1.518 2.871 0 .052.153.402.625.104C19.8 19.568 21 17.906 21 15.742c0-1.724-.44-2.964-1.64-4.232-.206-.216-.843-.873-1.16-.873-.422 0 .368.953.368 1.6 0 .368-.246.636-.625.636-.595 0-.75-1.303-.822-1.713-.297-1.733-.656-2.985-2.379-3.795-.4-.193-1.25-.437-1.65-.34zM10.002 23c-.557 0-.979.438-.979 1.016 0 .543.44.984.979.984H22.16c.197 0 .84-.074.84-1.016 0-.598-.33-.984-.84-.984H10.002z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgFreeCodeCamp;
