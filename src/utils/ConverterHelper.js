import showdown from 'showdown';
import {HEADER_LEVEL_START} from "./constants";

class ConverterHelper {

    constructor() {
        this.converter = new showdown.Converter();
        this.converter.setOption('headerLevelStart', HEADER_LEVEL_START);
    }

    convertMarkDownToHtml = (markdown) => markdown && this.converter.makeHtml(markdown);
}

const ConverterInstance = new ConverterHelper();

export default ConverterInstance;
