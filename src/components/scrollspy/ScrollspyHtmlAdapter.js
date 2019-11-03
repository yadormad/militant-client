import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import {setScrollspyData} from "../../store/Scrollspy/actions";
import {connect} from "react-redux";
import ScrollspyHtmlTransformer from "../../utils/ScrollspyHtmlTransformer";

class ScrollspyHtmlAdapter extends React.Component {
    state = {
        renderedComponents: null
    };

    componentDidMount() {
        const {onDidMount, htmlString} = this.props;
        const htmlTransformer = new ScrollspyHtmlTransformer();
        this.setState({
            renderedComponents: ReactHtmlParser(htmlString, {transform: htmlTransformer.transform}),
        });
        onDidMount(htmlTransformer.scrollspyData);
    }

    componentWillUnmount() {
        this.props.onWillUnmount();
    }

    render() {
        return(
            <div>{this.state.renderedComponents}</div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    onDidMount: (data) => dispatch(setScrollspyData(data)),
    onWillUnmount: () => dispatch(setScrollspyData(null)),
});

export default connect(null, mapDispatchToProps)(ScrollspyHtmlAdapter);
