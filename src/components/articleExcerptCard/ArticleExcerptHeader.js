import React from 'react';
import './article-excerpt.scss'

const ArticleExcerptHeader = ({author, date, className}) => (
    <div className={`article-excerpt-header ${className}`}>
        <div className="article-excerpt-author">{author}</div>
        <div className="article-excerpt-date">{date}</div>
    </div>
);

export default ArticleExcerptHeader;
