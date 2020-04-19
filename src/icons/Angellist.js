import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgAngellist(props) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M12.813 4a2.177 2.177 0 00-.938.156c-.578.235-.973.746-1.156 1.25-.184.504-.235 1.02-.219 1.563.027 1.086.3 2.297.625 3.468.266.961.57 1.86.844 2.626a2.107 2.107 0 00-1.531.313c-.782.503-1.254 1.304-1.344 2.061-.082.68.078 1.297.281 1.844-.54.055-1.066.235-1.469.625-.644.63-.906 1.547-.906 2.625 0 3.551 1.89 5.633 3.906 6.563 2.016.93 4.133.906 4.938.906.875 0 2.894-.074 4.75-1.344 1.855-1.27 3.406-3.781 3.406-8 0-.363.273-1.992-.75-3.375-.219-.297-.516-.562-.844-.812.2-.653.676-2.227 1.063-4.188.238-1.21.425-2.441.406-3.5-.012-.531-.059-1.02-.25-1.5s-.652-1.02-1.281-1.156a2.595 2.595 0 00-1.813.281c-.52.293-.902.715-1.25 1.188-.691.949-1.203 2.144-1.593 3.343-.133.41-.235.817-.344 1.22a30.24 30.24 0 00-.563-1.47c-.5-1.21-1.086-2.402-1.812-3.312-.364-.457-.762-.86-1.281-1.125a2.27 2.27 0 00-.876-.25zm-.157 1.969c.024.004.059.027.125.062.133.067.371.278.625.594.504.633 1.067 1.691 1.531 2.813A32.089 32.089 0 0116.188 13h-.062c-.7 0-1.34.29-1.781.719-.23-.563-.817-2.02-1.313-3.813-.3-1.09-.511-2.187-.531-2.969-.012-.39.043-.703.094-.843.023-.07.035-.086.031-.094.012-.004.02-.031.031-.031zm9 .156h.125c.04.14.086.355.094.688.016.785-.152 1.921-.375 3.062a42.513 42.513 0 01-.906 3.688 11.267 11.267 0 00-1.907-.407c.153-.832.418-2.094.907-3.594.355-1.093.812-2.14 1.281-2.78.234-.321.457-.532.625-.626.055-.031.11-.031.156-.031zM16.125 15c3.688 0 5.043.844 5.531 1.5.489.656.344 1.336.344 2.156 0 3.754-1.21 5.442-2.531 6.344-1.32.902-2.899 1-3.625 1-.797 0-2.59-.023-4.094-.719-1.504-.695-2.75-1.843-2.75-4.75 0-.75.203-1.11.313-1.218.109-.11.218-.153.593-.063.606.145 1.668.875 2.656 2.188.231.304.442.632.657 1-.063.074-.25.187-.375.187-.153 0-.297-.047-.563-.281-.265-.235-.59-.684-.937-1.219l-1.688 1.094c.39.605.785 1.148 1.281 1.593.497.446 1.165.813 1.907.813.765 0 1.441-.355 1.906-.906.121-.14.14-.348.219-.532.144.41.312.786.5 1.063.422.621.937.938.937.938L17.5 23.53s-.148-.07-.375-.406-.469-.883-.469-1.75c0-.313.047-.566.157-.781.18-.352.496-.594.843-.813.559-.351 1.125-.468 1.125-.468.446-.098.77-.489.785-.946a1.003 1.003 0 00-.722-.992s-1.586-.473-2.844-.844a.614.614 0 01-.281-.187c-.043-.07-.078-.149-.125-.219a1.154 1.154 0 01-.063-.5.804.804 0 01.188-.469c.086-.094.156-.156.406-.156zm-4.625.031c.043-.027.047-.027.281.063.235.09.61.332 1 .719.781.773 1.621 2.066 2.156 3.437.126.32.098.398.063.469-.035.07-.133.168-.313.25-.18.082-.437.129-.593.125-.156-.004-.133-.133.062.125l-.062.031c-.598-.824-1.211-1.496-1.875-2 0 0-.614-.73-.938-1.531-.164-.403-.219-.805-.187-1.063.031-.258.066-.406.406-.625z"
        fill={props.fill}
      />
    </Svg>
  );
}

export default SvgAngellist;
