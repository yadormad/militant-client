import React from 'react';
import './article-excerpt.scss'
import {withRouter} from "react-router-dom";
import CollapseWrapper from "../collapse/CollapseWrapper";
import HtmlParser from "../htmlParser/HtmlParser";

const ArticleExcerptContent = ({title, excerpt, author, date, goToArticle}) => (
    <div className='article-excerpt-container'>
        <CollapseWrapper
            headerNode={(
                <div>
                    <h3
                        className='article-excerpt-header link-text'
                        onClick={goToArticle}
                    >
                        {title}
                    </h3>
                    <span className='article-excerpt-author'>{`${author}${author && ' • '}${date}`}</span>
                </div>
            )}
        >
            <div className='article-excerpt-description'>
                <HtmlParser htmlString={excerpt}/>
            </div>
        </CollapseWrapper>
    </div>
);

export default withRouter(ArticleExcerptContent);
