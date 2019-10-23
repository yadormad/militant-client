import React from 'react';
import { connect } from 'react-redux';
import Interweave from 'interweave';
import PageWrapper from '../../components/pageWrapper/PageWrapper';
import { getArticle, isLoading } from '../../selectors/ArticleSelectors';
import { fetchArticle } from '../../store/Article/actions';
import './article-styles.scss';
import Scrollspy from 'react-scrollspy';

class ArticlePage extends React.Component {
    componentDidMount() {
        const { onDidMount, match } = this.props;
        onDidMount(match.params.id);
    }

    //Данная функция меняет старые id заголовков на id вида header-(число)
    transformIDs = str => {
        let regexp = /id=\".*\"/g;
        let result;
        let curId = 1;
        let resStr = str; //результат замены id
        let resNames = []; //новые id в виде строк
        let resData = [];
        while (result = regexp.exec(str)) {
            //Пока есть совпадения, заменяем их на header-(число)
            resStr = resStr.replace(result[0], "id=\"header-" + curId + "\"");
            //и запихиваем строку "header-(число)" в массив
            resNames.push("header-" + curId);
            curId++;
        }
        regexp = /<h.*>.*<\/h.>/g;
        let reg2 = />.*</;
        while (result = regexp.exec(str)) {
            //console.log(result[0]);
            let sub = reg2.exec(result[0])[0];
            sub = sub.substring(1, sub.length - 1);
            resData.push(sub);
            //console.log(sub);
        }
        console.log(resData);
        return {html: resStr, headerIDs: resNames}
    };

    render() {
        const {
            article,
            loading,
        } = this.props;
        let scrollspyNames;
        if (typeof (article.html) == 'string') {
            //console.log(typeof (article.html));
            let {html, headerIDs} = this.transformIDs(article.html);
            article.html = html;
            console.log(article.html);
            scrollspyNames = headerIDs;
        }
        console.log(scrollspyNames);
        return (
            <PageWrapper loading={loading}>
                {scrollspyNames && <Scrollspy items={scrollspyNames} className={'scrollspy'} currentClassName={'current-scroll'}>
                    {
                        scrollspyNames.map(item =>{
                            return <li>
                                <a href={`#${item}`}>{item}</a>
                            </li>
                        })
                    }
                </Scrollspy>}
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
