import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgDoveSolid(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M9.844 1.664l-1.16.387c-1.625.543-2.707 1.258-3.34 2.148-.637.89-.739 1.922-.574 2.746.148.746.488 1.336.8 1.813-.285.168-.351.11-.652.41-.813.812-1.473 2.332-.867 4.148a3.861 3.861 0 002.379 2.422c.242.086.246.035.46.075-.062.347-.132.39-.124.874.02 1.114.414 2.622 1.816 3.528.738.476 1.563.719 2.371.848L5.418 28.44l1.21.485c5.47 2.191 11.688.023 11.688.023l.684-.23V24.87c.773-.113 1.86-.324 3.2-.887 2.116-.886 4.507-2.699 4.796-5.894.113-1.238-.176-2.543-.465-3.602-.074-.277-.082-.254-.156-.488h3.285l-.777-1.469s-.524-1.027-.797-1.59c.781-1.742.215-3.64-1.227-4.441a3.251 3.251 0 00-1.324-.398c-1.418-.122-3.058.601-4.332 2.296-.129.172-.664.805-.969 1.172a8.61 8.61 0 01-.308-.691C19.48 7.758 19 5.89 19 3V2h-1c-1.168 0-2.11.305-2.781.844-.672.539-1.028 1.261-1.188 1.914-.226.894-.078 1.27 0 1.707-.351.16-.601.191-1.113.703a3.776 3.776 0 00-.79 1.184 11.911 11.911 0 01-2.136-5.477l-.148-1.21zm7.261 2.574c.125 2.371.5 4.219.97 5.383.28.703.585 1.223.823 1.57-.691.825-.878 1.059-1.414 1.684-.71-.344-2.144-1.145-3.609-2.523-.215-.926.066-1.38.457-1.77.438-.437.984-.633.984-.633l.88-.293-.227-.898s-.172-.82 0-1.516c.09-.347.234-.625.5-.836.11-.09.449-.097.636-.168zm-8.761.301c.668 2.875 2.136 5.074 3.687 6.695.008.028.012.055.02.082l.043-.015a17.335 17.335 0 004.492 3.347l1.176 1s4.074-4.77 5.035-6.046h.004c1.3-1.735 2.445-1.707 3.09-1.352.64.355 1.02 1.078.277 2.195l-.297.446.207.492c.082.203.172.344.309.617H23.53l.535 1.363s.278.707.54 1.653c.257.945.468 2.14.398 2.894-.211 2.305-1.82 3.492-3.578 4.23-1.758.739-3.492.86-3.492.86l-.934.063v4.125c-.863.25-4.484 1.113-8.273.175l4.648-6.191c1.035-.05 1.813-.188 1.813-.188l-.376-1.968s-.863.168-1.98.175c-1.113.012-2.422-.175-3.164-.656-.723-.469-.89-1.148-.902-1.879-.012-.734.183-1.34.183-1.34l.465-1.394L7.945 14s-.383.02-.843-.145c-.465-.168-.903-.425-1.153-1.171-.394-1.184-.054-1.664.383-2.102.438-.438.984-.633.984-.633l1.536-.511-1.145-1.145s-.809-.89-.977-1.738c-.085-.426-.062-.77.239-1.192.18-.246.879-.539 1.375-.824z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgDoveSolid;
