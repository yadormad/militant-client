import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getArticleList, isLoading } from '../../selectors/ArticleSelectors';
import { fetchArticlesList } from '../../store/Article/actions';
import {fetchAboutUs, fetchBannerImage} from "../../store/Home/actions";
import HomeBanner from "./components/HomeBanner";
import AbsolutePageWrapper from "../../components/pageWrapper/AbsolutePageWrapper";
import AboutUsSection from "./components/AboutUsSection";

class HomePage extends React.Component {
    componentDidMount() {
        const { onComponentMount } = this.props;
        onComponentMount();
    }

    render() {
        const {
            articleList,
            loading,
        } = this.props;
        return (
            <AbsolutePageWrapper loading={loading}>
                <HomeBanner />
                <AboutUsSection />
                {articleList.map(article => (
                    <Link to={`/article/${article.id}`}>{article.title}</Link>
                ))}
            </AbsolutePageWrapper>
        );
    }
}

const mapStateToProps = state => ({
    articleList: getArticleList(state),
    loading: isLoading(state),
});

const mapDispatchToProps = dispatch => ({
    onComponentMount: () => {
        dispatch(fetchArticlesList());
        dispatch(fetchBannerImage());
        dispatch(fetchAboutUs())
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
