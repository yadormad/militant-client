import React from 'react';
import Scrollspy from 'react-scrollspy';
import ReactHtmlParser from 'react-html-parser';
import './scrollspy-styles.scss';
import {getArticle, isLoading} from "../../selectors/ArticleSelectors";
import {connect} from "react-redux";

class ScrollspyWithIDs extends React.Component{


    render() {
        const {scrollspyData, scrollspyNames} = this.props;
        if (!scrollspyData || !scrollspyNames) return null;
        return(
            <Scrollspy items={scrollspyData} className={'scrollspy'} currentClassName={'current-scroll'}>
                {
                    scrollspyData.map(item =>{
                        return <li>
                            <a href={`#${item}`}>{scrollspyNames.item}</a>
                        </li>
                    })
                }
            </Scrollspy>
        );
    }
}

const mapStateToProps = state => ({
    scrollspyData: state.scrollspy.data,
    scrollspyNames: state.scrollspy.names
});

export default connect(mapStateToProps)(ScrollspyWithIDs);
