import React from 'react';
import './article-excerpt.scss'
import {CardContext} from "../card";
import {withRouter} from "react-router-dom";

class ArticleExcerptContent extends React.Component {
    static contextType = CardContext;

    getExcerptContentClassName() {
        const {isExpanded} =this.context;
        return isExpanded ? 'article-excerpt-content' : 'article-excerpt-content article-excerpt-content__minimized';
    }

    goToArticle = () => {
        const {history, route} = this.props;
        history.push(route);
    };

    render() {
        const {title, excerpt, className} = this.props;
        return (
            <div className={className}>
                <div className="article-excerpt-title-overlay">
                    <div className="article-excerpt-title">{title}</div>
                </div>
                <div className="article-excerpt-content-overlay">
                    <div className={this.getExcerptContentClassName()}>{excerpt}</div>
                    <div className="article-excerpt-learn-more" onClick={this.goToArticle}>Читать дальше ></div>
                </div>
            </div>
        );
    }
}

export default withRouter(ArticleExcerptContent);
