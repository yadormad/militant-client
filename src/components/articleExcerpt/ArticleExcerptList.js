import React from 'react';
import ArticleExcerptCard from "./ArticleExcerptCard";
import {Cell, Grid, Row} from '@material/react-layout-grid';


const ArticleExcerptList = ({articleList}) => (
    <Grid>
        <Row>
            <Cell desktopColumns={1} tabletColumns={1}/>
            <Cell desktopColumns={10} tabletColumns={6} phoneColumns={4}>
                <Row>
                    {articleList.map(article => (
                        <Cell key={article.id} desktopColumns={6} tabletColumns={8} phoneColumns={4}>
                            <ArticleExcerptCard article={article}/>
                        </Cell>
                    ))}
                </Row>
            </Cell>
            <Cell desktopColumns={1} tabletColumns={1}/>
        </Row>
    </Grid>
);

export default ArticleExcerptList;
