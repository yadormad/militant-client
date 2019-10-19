import showdown from 'showdown';

class ConverterHelper {

    constructor() {
        this.converter = new showdown.Converter();
        this.converter.setOption('headerLevelStart', 3);
    }

    convertMarkDownToHtml = (markdown) => markdown && this.converter.makeHtml(markdown);
}

const ConverterInstance = new ConverterHelper();

export default ConverterInstance;