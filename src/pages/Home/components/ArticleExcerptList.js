import React from 'react';
import ArticleExcerptCard from "../../../components/articleExcerptCard/ArticleExcerptCard";
import '../home-styles.scss'

const ArticleExcerptList = ({articleList}) => (
    <div className="article-excerpt-list">
        {articleList.map(article => (
            <div key={article.id} style={{marginRight: '3rem', marginBottom: '3rem'}}>
                <ArticleExcerptCard article={article}/>
            </div>
        ))}
    </div>
);

export default ArticleExcerptList;
