import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import {setScrollspyData} from "../../store/Scrollspy/actions";
import {connect} from "react-redux";
import ScrollspyHtmlTransformer from "../../utils/ScrollspyHtmlTransformer";

const ScrollspyHtmlAdapter = ({onDidMount, onWillUnmount, htmlString}) => {
    const htmlTransformer = React.useMemo(() => new ScrollspyHtmlTransformer(), [htmlString]);
    const renderedComponents = React.useMemo(() => (
        ReactHtmlParser(htmlString, {transform: htmlTransformer.transform})
    ), [htmlString, htmlTransformer]);
    React.useEffect(() => {
        onDidMount(htmlTransformer.scrollspyData)
        return onWillUnmount;
    }, [htmlTransformer.scrollspyData]);
    return(
        <div>{renderedComponents}</div>
    )
}

const mapDispatchToProps = dispatch => ({
    onDidMount: (data) => dispatch(setScrollspyData(data)),
    onWillUnmount: () => dispatch(setScrollspyData(null)),
});

export default connect(null, mapDispatchToProps)(ScrollspyHtmlAdapter);
