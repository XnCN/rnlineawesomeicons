import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgWineBottleSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M15 3c-1.094 0-2 .906-2 2v1.688a1.025 1.025 0 000 .593v3.157l-.781.53c-1.39.927-2.219 2.516-2.219 4.188v.531a1.025 1.025 0 000 .594v6.407a1.025 1.025 0 000 .593V29h12v-5.813a1.018 1.018 0 000-.406v-6.593a1.018 1.018 0 000-.407v-.625c0-1.672-.828-3.261-2.219-4.187L19 10.438v-3.25a1.018 1.018 0 000-.407V5c0-1.094-.906-2-2-2h-2zm0 2h2v1h-2V5zm0 3h2v3.531l.438.313 1.218.812c.793.528 1.262 1.399 1.313 2.344H12.03c.051-.945.52-1.816 1.313-2.344l1.219-.812.437-.313V8zm-3 9h8v5h-8v-5zm0 7h8v3h-8v-3z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgWineBottleSolid;
