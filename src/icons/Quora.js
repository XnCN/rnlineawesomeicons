import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgQuora(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M15.492 4C10.202 4 5 8.23 5 14.44c0 7.117 6.969 11.759 13.215 10.029C19.26 26.252 20.639 28 23.265 28 27.608 28 28 24 28 23h-1.555c-.08.716-.567 1.457-1.761 1.457-1.088 0-1.873-.752-2.627-1.898 2.346-1.815 3.892-4.646 3.892-8.122C25.954 8.204 20.894 4 15.492 4zm0 2c4.044 0 5.77 2.91 5.77 8.44.005 2.217-.289 4.01-.889 5.332-1.035-1.55-2.318-2.77-4.855-2.77-1.62 0-2.725.471-3.506 1.15l.646 1.291c.33-.159.536-.154.897-.154 1.884 0 2.85 1.636 3.672 3.254-.531.159-1.1.223-1.737.223-3.98 0-5.705-2.814-5.705-8.317C9.786 8.91 11.512 6 15.492 6z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgQuora;
