import React from 'react';
import Card, {
    CardPrimaryContent,
    CardMedia,
} from "@material/react-card";
import {formatDate, reformatDateAndTime} from "../../utils/DateHelpers";
import ArticleExcerptContent from "./ArticleExcerptContent";
import '@material/react-card/index.scss';
import {withRouter} from "react-router-dom";
import axios from 'axios'

class ArticleExcerptCard extends React.Component {
    getArticleDate() {
        const {date, time, modified} = this.props.article;
        if (date && time) return reformatDateAndTime(date, time);
        return formatDate(modified);
    }

    articleCollapseRef = React.createRef();

    goToArticle = () => {
        const {article, history} = this.props;
        history.push(`/article/${article.id}`);
    };

    getCardContainerClassName() {
        return `card-container ${this.articleCollapseRef.state && this.articleCollapseRef.state.isOpened && 'card-container--opened'}`;
    }

    render() {
        const {
            title,
            image,
            html,
            author,
        } = this.props.article;
        return (
            <div className='card-relative-container'>
                <Card className={this.getCardContainerClassName()}>
                    <CardPrimaryContent onClick={this.goToArticle}>
                        <CardMedia wide imageUrl={`${axios.defaults.baseURL}${image.fullImageUrl || image.overlayImageUrl}`} />
                    </CardPrimaryContent>
                    <ArticleExcerptContent
                        ref={this.articleCollapseRef}
                        title={title}
                        excerpt={html}
                        author={author}
                        date={this.getArticleDate()}
                        goToArticle={this.goToArticle}
                    />
                </Card>
            </div>
        );
    }
}

export default withRouter(ArticleExcerptCard);
