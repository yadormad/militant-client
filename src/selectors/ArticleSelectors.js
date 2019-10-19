import {createSelector} from "reselect";
import ConverterHelper from "../utils/ConverterHelper";

const getArticleState = ({article}) => article;

export const getArticleList = createSelector(
    getArticleState,
    articleState => articleState.articleList.map(article => ({
        ...article,
        html: ConverterHelper.convertMarkDownToHtml(article.excerpt),
    })),
);

export const getArticle = createSelector(
    getArticleState,
    articleState => ({
        ...articleState.article,
        html: ConverterHelper.convertMarkDownToHtml(articleState.article && articleState.article.content),
    }),
);

export const isLoading = state => getArticleState(state).loading;
