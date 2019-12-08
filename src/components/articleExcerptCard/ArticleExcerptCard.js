import React from 'react';
import {Card} from "../card";
import ArticleExcerptHeader from "./ArticleExcerptHeader";
import {formatDate, reformatDateAndTime} from "../../utils/DateHelpers";
import ArticleExcerptContent from "./ArticleExcerptContent";

class ArticleExcerptCard extends React.Component {
    getArticleDate() {
        const {date, time, modified} = this.props.article;
        if (date && time) return reformatDateAndTime(date, time);
        return formatDate(modified);
    }

    render() {
        const {article, history} = this.props;
        return (
            <Card
                expandable
                /*onPress={() => history.push(`/article/${article.id}`)}*/
                backgroundImageUrls={article.image}
            >
                <div className="article-excerpt-container">
                    <ArticleExcerptHeader
                        author={article.author}
                        date={this.getArticleDate()}
                    />
                    <ArticleExcerptContent
                        className="article-excerpt-content-margin-minified"
                        title={article.title}
                        excerpt={article.excerpt}
                        route={`/article/${article.id}`}
                    />
                </div>
            </Card>
        );
    }
}

export default ArticleExcerptCard;
