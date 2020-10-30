import React from 'react';
import { connect } from 'react-redux';
import { getArticleList, isLoading } from '../../selectors/ArticleSelectors';
import { fetchArticlesList } from '../../store/Article/actions';
import {fetchAboutUs, fetchBannerImage} from "../../store/Home/actions";
import HomeBanner from "./components/HomeBanner";
import AbsolutePageWrapper from "../../components/pageWrapper/AbsolutePageWrapper";
import AboutUsSection from "./components/AboutUsSection";
import ArticleExcerptList from "../../components/articleExcerpt/ArticleExcerptList";

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
                <ArticleExcerptList articleList={articleList}/>
                {/*<div style={{height: 400}}>
                    <Canvas />
                </div>*/}
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
        dispatch(fetchArticlesList(0, 4));
        dispatch(fetchBannerImage());
        dispatch(fetchAboutUs())
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
