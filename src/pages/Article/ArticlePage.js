import React from 'react';
import { connect } from 'react-redux';
import Interweave from 'interweave';
import PageWrapper from '../../components/pageWrapper/PageWrapper';
import { getArticle, isLoading } from '../../selectors/ArticleSelectors';
import { fetchArticle } from '../../store/Article/actions';
import './article-styles.scss';

class ArticlePage extends React.Component {
    componentDidMount() {
        const { onDidMount, match } = this.props;
        onDidMount(match.params.id);
    }

    render() {
        const {
            article,
            loading,
        } = this.props;
        return (
            <PageWrapper loading={loading}>
                <div className='article-container'>
                    <h1>{article.title}</h1>
                    {!!article && <Interweave content={article.html} />}
                </div>
            </PageWrapper>
        );
    }
}

const mapStateToProps = state => ({
    article: getArticle(state),
    loading: isLoading(state),
});

const mapDispatchToProps = dispatch => ({
    onDidMount: id => dispatch(fetchArticle(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage);
