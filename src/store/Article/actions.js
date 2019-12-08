import {
    FETCH_ARTICLE_BEGIN,
    FETCH_ARTICLE_FAILURE,
    FETCH_ARTICLE_LIST_BEGIN, FETCH_ARTICLE_LIST_FAILURE,
    FETCH_ARTICLE_LIST_SUCCESS,
    FETCH_ARTICLE_SUCCESS
} from "./constants";
import Service from "../../service/Service";

const fetchArticleBegin = () => ({
    type: FETCH_ARTICLE_BEGIN,
});
const fetchArticleSuccess = (article) => ({
    type: FETCH_ARTICLE_SUCCESS,
    payload: {article},
});

const fetchArticleFailure = (error) => ({
    type: FETCH_ARTICLE_FAILURE,
    payload: {error},
});

const fetchArticleListBegin = () => ({
    type: FETCH_ARTICLE_LIST_BEGIN,
});
const fetchArticleListSuccess = (articleList) => ({
    type: FETCH_ARTICLE_LIST_SUCCESS,
    payload: {articleList},
});

const fetchArticleListFailure = (error) => ({
    type: FETCH_ARTICLE_LIST_FAILURE,
    payload: {error},
});

export const fetchArticle = (id) => async (dispatch) => {
    dispatch(fetchArticleBegin());
    try {
        const article = await Service.fetchArticleById(id);
        dispatch(fetchArticleSuccess(article))
    } catch (e) {
        dispatch(fetchArticleFailure(e));
        alert('Ошыбка');
    }
};

export const fetchArticlesList = (from, to) => async (dispatch) => {
    dispatch(fetchArticleListBegin());
    try {
        const articleList = await Service.fetchArticleListMinified(from, to);
        dispatch(fetchArticleListSuccess(articleList));
    } catch (e) {
        dispatch(fetchArticleListFailure(e));
        alert('Ошыбка');
    }
};
