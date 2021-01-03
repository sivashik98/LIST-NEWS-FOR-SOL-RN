import React from 'react';
import Svg, {Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

const SvgComponent = (props) => (
  <Svg width={14} height={16} viewBox="0 0 14 16" {...props}>
    <Path
      d="M1.094 8.803c.111.003.246-.009.224-.116-.018-.108-.106-.117-.106-.17.097-.201.189-.341.017-.645-.036.078-.191.318-.243.085.066-.09-.07-.096-.066-.14.01.042-.118.05-.057.137L.802 7.95c.016-.152-.123-.131-.156-.18-.007.068-.134.119-.042.24l-.052.033c.005-.103-.11-.047-.127-.086.03.034-.085.114.023.156.07.226-.189.1-.257.051.012.35.163.42.351.542.026.044-.047.097-.004.2.038.103.16.044.25-.014A.197.197 0 01.92 8.78c.07-.023.144-.004.174.023zM14 5.56c-.238-.107-.425-.123-.847-.03.187-.133.564-.588.64-.877-.425-.03-.699.112-.934.198.728-.565.759-.908.683-1.402-.375.375-1.533 1.28-1.525 1.28-.007 0 .582-.606 1.011-1.105.432-.509.236-.997-.03-1.363-.055.257-.753 1.323-1.314 1.804l-.038-.098c-.019.135-.405.655-.634.844l-.04-.093c-.118.184-.819.777-1.113 1.076-.29.3-.18.595-.008.753.182.159.26.327.052.604-.198.285-.75.246-1-.074.52-.203.465-.523.345-.773-.312.444-.5.257-.77.017.284-.007.444-.147.553-.352-.531.065-.696-.14-.774-.462-.082-.318.25-.689.635-.943.009 0 .096.049.16.04.066-.003.146-.103.233-.145.387-.06.583.105.545.504.14-.07.163-.299.113-.439-.05-.137-.174-.158-.158-.18.02-.02.177.082.316.21.133.134.444.134.576.078.13-.063.2-.255.238-.44-.092.167-.332.248-.474.237-.137-.014-.408-.217-.65-.269.202-.172.483-.053.66.087.37-.5.094-.712-.097-.803-.191-.096-.245-.021-.288-.047-.042-.018-.097-.095-.196-.126v-.058c.385-.007.578-.168.755-.315.182-.145.118-.523.054-.712-.063-.193.069-.22.132-.182.062.038.408.157.408.157s.033.025.069.144c.033.12.014.182-.036.257-.054.072-.19.233-.2.441-.012.215.146.327.16.469.02.152-.16.236-.16.236s.061.049.16.04c.104-.008.298-.131.359-.292.056-.154-.137-.353-.137-.353s.125.07.222.075c.099.014.09-.035.177-.012.084.026.094.15.094.15s.08-.056.11-.152c.029-.098.057-.31-.207-.33-.271-.02-.214-.111-.07-.279.15-.173.153-.457-.135-.52a.733.733 0 01-.524-.38c-.108-.183-.382-.204-.74-.099-.35.108-.172.572-.064.84.116.264.111.35.04.48-.07.127-.346.206-.519.204v-.117c.142-.217.217-.534.166-.662-.045-.129-.274-.194-.409-.192l-.139.005c.095-.054.111-.18.01-.233v-.105h.087v-.18h-.082v-.091h-.203v.089h-.085v.182h.085v.105c-.088.056-.071.177.01.233l-.135-.005c-.137-.002-.366.063-.415.192-.045.128.028.445.162.66l-.01.152c-.485-.09-.622-.15-1.157-.696l.007-.095c.32-.73.351-.707.36-.892.005-.186 0-.595-.714-.655-.002.081-.11.17-.186-.038.113-.086.125-.289.007-.312l-.03-.126.127.044v-.24l-.137.044L7.189 0h-.274l.043.145-.13-.052v.24l.125-.037-.038.12c-.115.034-.12.233-.002.312-.08.208-.187.117-.187.035-.71.049-.733.45-.733.635.01.186.035.163.34.903l.002.1c-.55.527-.656.586-1.146.66V2.91c.134-.208.22-.528.174-.658-.042-.124-.273-.199-.41-.199l-.135.003c.076-.054.097-.16.005-.236v-.11h.092v-.182H4.83V1.44h-.188v.088h-.088v.182h.083v.103c-.111.07-.1.189 0 .24l-.132-.009c-.142-.01-.37.051-.418.175-.05.13.014.45.151.67l-.004.114c-.175 0-.444-.086-.515-.215-.066-.128-.066-.217.052-.483.12-.261.31-.723-.042-.835-.347-.114-.628-.105-.738.075-.109.18-.243.308-.538.368-.286.059-.293.339-.149.516.147.173.196.264-.07.275-.27.012-.248.227-.22.325.028.102.104.156.104.156s.012-.124.104-.147c.09-.023.075.028.177.02.099-.004.219-.071.219-.071s-.203.19-.142.35c.055.156.243.287.347.294a.23.23 0 00.163-.033s-.175-.086-.16-.236c.028-.142.183-.25.181-.466-.01-.213-.141-.37-.19-.444-.048-.077-.067-.14-.027-.256.036-.122.07-.143.07-.143s.348-.114.411-.15c.064-.032.196-.008.13.183-.073.194-.142.565.033.72.175.146.36.309.74.33v.06c-.096.024-.15.1-.195.12-.043.023-.095-.052-.286.035-.195.093-.476.289-.125.772.191-.135.467-.247.666-.072-.241.046-.517.24-.66.254-.14.012-.378-.082-.463-.245.033.163.104.376.229.44.127.064.436.07.575-.062.14-.126.297-.217.316-.203.014.02-.108.042-.155.18-.057.135-.038.37.096.436-.028-.394.17-.56.561-.488.083.042.166.147.23.154.06.007.15-.037.157-.037.378.268.672.64.58.961-.084.322-.224.518-.752.439.1.21.255.352.536.366-.272.229-.47.413-.762-.04-.128.253-.189.568.323.787-.26.313-.814.334-1 .044-.198-.28-.118-.443.063-.6.177-.154.295-.447.015-.755-.286-.306-.97-.913-1.09-1.102L3 4.674c-.222-.201-.601-.728-.61-.861l-.046.098c-.547-.467-1.212-1.55-1.264-1.804-.273.357-.48.84-.066 1.358C1.43 3.943 2 4.569 2 4.564 2 4.569.873 3.638.507 3.276c-.09.464-.068.805.642 1.39-.23-.097-.503-.247-.925-.228.073.292.432.758.616.896-.415-.105-.602-.096-.84.01.101.207.453.594.698.704-.292.032-.644.191-.689.235.125.192.333.36.602.455-.311.145-.401.24-.446.31.142.213.31.356.547.4-.037.03-.07.067-.11.105.044.06.219.137.228.18.01.034.073-.04.09-.094-.005.033.181.108.115.2.033.194.177-.025.23-.125.35.348.025.758.032.774.003.014.09.087.12.15.19-.098.625-.383.625-.383s-.469.343-.58.485c-.101.157-.045.43-.023.453.021.04.325.117.429.014.116-.11.637-.73.63-.714 0 .021-.286.399-.382.609-.095.208.042.523.087.553.066.03.424 0 .481-.11.052-.107.427-.832.422-.832.005 0-.262.552-.28.74-.015.186.172.438.226.447.059.014.382-.072.417-.203.043-.126.217-.833.215-.833.002 0-.09.486-.061.63.01.166.243.275.292.334.04.093.078.06.13.002.045-.049.304-.091.292-.382-.01-.292.003-.514 0-.514.003 0 .177.01.262-.07.085-.075.134-.103.132-.103.002 0 .07.157.177.164.106.01.198.04.198.04l.014.949c-.238.18-.431.294-.75.203l.069.075c-.484.035-.786.21-.727.798.064.574-.236.408-.243.406.007.002.151.392.6.088a.651.651 0 01-.034.467.726.726 0 00.27-.196c.032-.044.035.086.013.15-.014.062.142-.164.156-.218.021-.053.196.12.017.269-.184.151-.783.345-1.033.38-.321.051-.644.098-.644-.215 0-.303-.356-.333-.503-.18-.09-.081-.153-.226-.153-.226-.002.026-.252.115-.266.096-.012.021.073.245.028.299-.045.063-.28.17-.26.273-.016.156.154.207.18.217-.052.149.108.296.212.26-.012.283-.078.204.245.374.06.033.14.017.17.045.03.03.24.177.323-.271.123-.112.408-.303.71-.357.337-.058 1.557-.327 1.833-.35a.85.85 0 00-.078-.392s.318-.065.434-.306c-.196.042-.392.01-.404-.214-.009-.227.163-.418.41-.39.293.023.583.264.564.53-.011.259-.207.375-.35.466-.138.103-.124.308-.128.306.004.002-.012-.07.096-.114.111-.045.316-.052.316-.056 0 .004.003.063-.11.133-.111.084-.503.242-.665.317-.196.08-.491.336-.6.329-.108.007-.207-.023-.217-.112a.455.455 0 01.048-.194s-.246.045-.328.178c-.083.137-.125.426.05.527-.161.182-.22.534-.133.721.083.191.066.357.066.354 0 .003.177-.055.189-.18.012-.113.14-.27.134-.27.005 0 0 .331.2.472.197.137.404.219.701-.05.286.323.465.523.946.36.069.11.264.306.375.34.109-.025.318-.186.394-.291.474.175.656-.016.953-.336.323.278.53.196.728.063.199-.128.208-.462.208-.462s.118.154.132.273c.01.124.187.189.187.186 0 .003-.017-.165.075-.352.092-.184.04-.539-.113-.725.177-.094.141-.388.059-.525-.08-.136-.321-.182-.321-.185 0 .003.054.108.042.194-.011.091-.11.117-.219.107-.108 0-.399-.266-.592-.347-.186-.08-.575-.243-.686-.322-.111-.082-.104-.145-.104-.145s.2.019.314.063c.108.049.087.114.092.114-.005 0 .016-.198-.123-.3-.141-.103-.328-.225-.335-.484-.014-.263.288-.497.575-.513.281-.016.446.173.427.399-.014.222-.24.252-.429.208.104.24.448.317.448.317s-.096.189-.085.385c.274.035 1.493.317 1.885.41.153.087.514.306.667.316.149.009.288-.096.401-.131.109-.023.229-.012.319-.044.085-.028.17-.147.344-.196.165-.05.168-.192.144-.269.073-.051.22-.27.25-.312.021-.038.023 0 .113-.01.092-.011.146-.364.05-.413-.104-.051-.031-.04-.088-.081-.059-.269-.261-.677-.677-.763l-.073-.129.199.077v-.431l-.196.095.082-.193h-.448l.06.193-.208-.095v.431l.216-.079-.073.138a.908.908 0 00-.7.68c-.002.02-.054.029-.109.073-.058.052-.056.413 0 .434.052.028.142.01.156.04l.073.152s-.217.196-.493.186c-.27-.002-.865-.238-1.042-.401-.184-.154 0-.32.019-.268.014.053.162.287.155.224-.016-.066-.014-.194.022-.15.033.047.136.15.259.203a.652.652 0 01-.028-.471c.446.32.604-.07.604-.075 0 .005-.312.164-.23-.41.076-.581-.22-.773-.704-.817l.068-.07c-.318.082-.514-.04-.743-.22l.033-.954s.097-.027.203-.03c.108-.01.179-.16.179-.16s.05.027.132.106c.083.077.257.075.26.075-.003 0 .004.226-.012.511-.019.294.238.34.283.394.052.059.09.09.127 0 .036-.084.276-.18.307-.322.026-.149-.052-.634-.05-.637-.002.003.154.712.194.843.035.126.356.221.415.207.054-.007.25-.25.236-.438-.012-.185-.262-.75-.257-.75-.005 0 .346.74.398.85.054.105.408.147.474.119.055-.026.194-.336.104-.55-.092-.208-.363-.595-.368-.617-.002-.02.502.616.609.726.108.107.408.03.438 0 .021-.025.083-.294-.014-.45-.108-.152-.568-.509-.568-.509s.214.128.526.355c.297.226.396.133.644.084.03-.094.002-.348-.144-.567.384.014.48-.068.632-.175-.01-.08-.13-.327-.302-.467.236-.044.41-.177.552-.383-.043-.074-.13-.172-.432-.322.269-.09.479-.247.61-.44-.044-.042-.39-.215-.685-.252.25-.105.615-.484.726-.689zM1.078 9.072c.03-.028.05-.07.05-.115a.147.147 0 00-.15-.146.148.148 0 00-.143.146c0 .082.068.15.134.143.01-.033.071-.063.109-.028zm1.526 4.552c.108.22.344.082.264-.093a.539.539 0 01-.264.093zm-.236-.306c-.01.094.012.25.15.25a.444.444 0 00.357-.107c.061-.056.007-.196-.064-.262-.141.252-.261.185-.443.12zm-.61-1.738c-.065.033-.046.145.04.17.162.012.216-.009.374-.116.014-.098 0-.143-.099-.154-.042.074-.243.133-.316.1zm.077-.658L1.179 9.35c-.03.032-.073.037-.101.037l.512 1.596c.092.086.198.028.245-.061zm-.844-1.77c0 .025.026.053.054.053.026 0 .05-.028.05-.054 0-.025-.024-.051-.05-.051-.028 0-.054.026-.054.051zm.221.092c-.002-.035-.037-.058-.078-.06-.06.077-.13.06-.153.049-.035.023-.035.056-.014.1.064.026.167.05.245-.089zm.5 2.035c-.132.408.538.282.196-.063-.047.033-.153.072-.196.063zm.205-.159c.003-.044-.009-.119-.05-.151-.065.121-.209.116-.282.084-.017.037-.007.14.042.163.083.04.227.042.29-.096z"
      fill="#1F88E5"
      fillRule="evenodd"
    />
  </Svg>
);

export default SvgComponent;