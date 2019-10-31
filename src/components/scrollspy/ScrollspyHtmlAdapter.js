import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import {setScrollspyData} from "../../store/Scrollspy/actions";
import {connect} from "react-redux";

class ScrollspyHtmlAdapter extends  React.Component {
    scrollspyData = {};
    htmlNodesCounters = {
        h3: 0,
        h4: 0,
        h5: 0,
        h6: 0
    };

    state = {
        renderedComponents: null
    };

    transform = node => {
        if(node.name === 'h3'){
            this.htmlNodesCounters.h3++;
            node.attribs.id = 'header-' + this.htmlNodesCounters.h3;
            this.scrollspyData[node.attribs.id] = node.children[0].data;
        }
        if(node.name === 'h4'){
            this.htmlNodesCounters.h4++;
            node.attribs.id = 'header-' + this.htmlNodesCounters.h4;
            this.scrollspyData[node.attribs.id] = node.children[0].data;
        }
        if(node.name === 'h5'){
            this.htmlNodesCounters.h5++;
            node.attribs.id = 'header-' + this.htmlNodesCounters.h5;
            this.scrollspyData[node.attribs.id] = node.children[0].data;
        }
        if(node.name === 'h6'){
            this.htmlNodesCounters.h6++;
            node.attribs.id = 'header-' + this.htmlNodesCounters.h6;
            this.scrollspyData[node.attribs.id] = node.children[0].data;
        }
    };

    componentDidMount() {
        const {onDidMount, htmlString} = this.props;
        this.setState({renderedComponents: ReactHtmlParser(htmlString, {transform: this.transform}) });
        onDidMount(this.scrollspyData);
    }

    render() {
        return(
            <div>{this.state.renderedComponents}</div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    onDidMount: (data) => dispatch(setScrollspyData(data)),
});

export default connect(null, mapDispatchToProps)(ScrollspyHtmlAdapter);
