import React from 'react';
import { connect } from 'react-redux';
import Interweave from 'interweave';
import PageWrapper from '../../components/pageWrapper/PageWrapper';
import { getArticle, isLoading } from '../../selectors/ArticleSelectors';
import { fetchArticle } from '../../store/Article/actions';
import './article-styles.scss';
import Scrollspy from 'react-scrollspy';
import ReactHtmlParser from 'react-html-parser';

var h3 = 0;

class ArticlePage extends React.Component {
    scrollspyGenerated = false;
    scrollspyData = [];
    scrollspyNames = new Map();
    ar;

    componentDidMount() {
        const { onDidMount, match } = this.props;
        onDidMount(match.params.id);
    }

    transform = node => {
        if(node.name == 'h3'){
            h3++;
            node.attribs.id = 'header-' + h3;
            this.scrollspyData.push(node.attribs.id);
            this.scrollspyNames.set(node.attribs.id, node.children[0].data);
        }
    };

    render() {
        const {
            article,
            loading,
        } = this.props;
        if(!this.scrollspyGenerated){
            if (typeof (article.html) == 'string') {
                this.ar = ReactHtmlParser(article.html, {transform: this.transform});
                this.scrollspyGenerated = true;
            }
        };
        return (
            <PageWrapper loading={loading}>
                {!loading && <Scrollspy items={this.scrollspyData} className={'scrollspy'} currentClassName={'current-scroll'}>
                    {
                        this.scrollspyData.map(item =>{
                            return <li>
                                <a href={`#${item}`}>{this.scrollspyNames.get(item)}</a>
                            </li>
                        })
                    }
                </Scrollspy>}
                <div className='article-container'>
                    <h1>{article.title}</h1>
                    {!!article && this.ar/*<Interweave content={article.html} />*/}
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
