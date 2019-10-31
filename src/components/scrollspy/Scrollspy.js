import React from 'react';
import Scrollspy from 'react-scrollspy';
import ReactHtmlParser from 'react-html-parser';
import './scrollspy-styles.scss';
import {getArticle, isLoading} from "../../selectors/ArticleSelectors";
import {connect} from "react-redux";

class ScrollspyWithIDs extends React.Component{


    render() {
        const {scrollspyData} = this.props;
        if (!scrollspyData) return null;
        return(
            <Scrollspy items={Object.keys(scrollspyData)} className={'scrollspy'} currentClassName={'current-scroll'}>
                {
                    Object.keys(scrollspyData).map(item =>{
                        return <li>
                            <a href={`#${item}`}>{scrollspyData[item]}</a>
                        </li>
                    })
                }
            </Scrollspy>
        );
    }
}

const mapStateToProps = state => ({
    scrollspyData: state.scrollspy.data,
});

export default connect(mapStateToProps)(ScrollspyWithIDs);
