import React from 'react';
import {Cell, Grid, Row} from '@material/react-layout-grid';

const AdaptivePageWrapper = ({children, right, left}) => (
    <Grid>
        <Row>
            <Cell
                desktopColumns={3} tabletColumns={1}
            >
                {left}
            </Cell>
            <Cell
                desktopColumns={6} tabletColumns={6}
            >
                {children}
            </Cell>
            <Cell
                desktopColumns={3} tabletColumns={1}
            >
                {right}
            </Cell>
        </Row>
    </Grid>
);

export default AdaptivePageWrapper;
