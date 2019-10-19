import {
    FETCH_ARTICLE_BEGIN,
    FETCH_ARTICLE_FAILURE,
    FETCH_ARTICLE_LIST_BEGIN, FETCH_ARTICLE_LIST_FAILURE,
    FETCH_ARTICLE_LIST_SUCCESS,
    FETCH_ARTICLE_SUCCESS,
} from './constants';

const initState = {
    loading: false,
    article: null,
    error: null,
    articleList: [],
};

export default (state = initState, { type, payload }) => {
    switch (type) {
        case FETCH_ARTICLE_BEGIN: {
            return {
                ...state,
                loading: true,
                error: null,
            };
        }
        case FETCH_ARTICLE_SUCCESS: {
            return {
                ...state,
                loading: false,
                article: payload.article,
            };
        }
        case FETCH_ARTICLE_FAILURE: {
            return {
                ...state,
                loading: false,
                error: payload.error,
            };
        }
        case FETCH_ARTICLE_LIST_BEGIN: {
            return {
                ...state,
                loading: true,
                error: null,
            };
        }
        case FETCH_ARTICLE_LIST_SUCCESS: {
            return {
                ...state,
                loading: false,
                articleList: payload.articleList,
            };
        }
        case FETCH_ARTICLE_LIST_FAILURE: {
            return {
                ...state,
                loading: false,
                error: payload.error,
            };
        }
        default: {
            return state;
        }
    }
};
