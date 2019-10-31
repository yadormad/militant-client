import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import {fetchArticle} from "../../store/Article/actions";
import {setScrollspyData} from "../../store/Scrollspy/actions";
import {connect} from "react-redux";

class ScrollspyHtmlAdapter extends  React.Component{
    //renderedComponents;
    scrollspyData = [];
    scrollspyNames = {};
    htmlNodesCounters = {
        h3: 0,
        h4: 0,
        h5: 0,
        h6: 0
    };
    //header-h3
    //header-h3-h4
    //
    state = {
        renderedComponents: null
    }

    transform = node => {
        if(node.name == 'h3'){
            this.htmlNodesCounters.h3++;
            node.attribs.id = 'header-' + this.htmlNodesCounters.h3;
            this.scrollspyData.push(node.attribs.id);
            this.scrollspyNames[node.attribs.id] = node.children[0].data;
        }
        if(node.name == 'h4'){
            this.htmlNodesCounters.h4++;
            node.attribs.id = 'header-' + this.htmlNodesCounters.h4;
            this.scrollspyData.push(node.attribs.id);
            this.scrollspyNames[node.attribs.id] = node.children[0].data;
        }
        if(node.name == 'h5'){
            this.htmlNodesCounters.h5++;
            node.attribs.id = 'header-' + this.htmlNodesCounters.h5;
            this.scrollspyData.push(node.attribs.id);
            this.scrollspyNames[node.attribs.id] = node.children[0].data;
        }
        if(node.name == 'h6'){
            this.htmlNodesCounters.h6++;
            node.attribs.id = 'header-' + this.htmlNodesCounters.h6;
            this.scrollspyData.push(node.attribs.id);
            this.scrollspyNames[node.attribs.id] = node.children[0].data;
        }
    };

    componentDidMount() {
        const {onDidMount, htmlString} = this.props;
        this.setState({renderedComponents: ReactHtmlParser(htmlString, {transform: this.transform}) });
        onDidMount(this.scrollspyData, this.scrollspyNames);
    }

    render() {
        return(
            <div>{this.state.renderedComponents}</div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    onDidMount: (data, names) => dispatch(setScrollspyData(data, names)),
});

export default connect(null, mapDispatchToProps)(ScrollspyHtmlAdapter);
