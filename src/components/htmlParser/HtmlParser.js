import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const HtmlParser = React.memo(({htmlString, restProps}) => (
    ReactHtmlParser(htmlString, restProps)
));

export default HtmlParser;
