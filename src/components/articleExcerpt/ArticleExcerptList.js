import React from 'react';
import ArticleExcerptCard from "./ArticleExcerptCard";
import {Cell, Grid, Row} from '@material/react-layout-grid';
import AboutUsSection from "../../pages/Home/components/AboutUsSection";
import ArticleExcerptAltCard from "./ArticleExcerptAltCard";
import AbsolutePageWrapper from "../pageWrapper/AbsolutePageWrapper";


const ArticleExcerptList = ({articleList}) => (
    <Grid>
        <Row>
            <Cell desktopColumns={1} tabletColumns={1}/>
            <Cell desktopColumns={10} tabletColumns={6} phoneColumns={4}>
                <Row>
                    <ArticleExcerptAltCard />
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
