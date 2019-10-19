import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import Loader from "../loader/Loader";

const AdaptivePageWrapper = ({children}) => (
    <Container>
        <Row>
            <Col
                md={{ span: 8, offset: 2 }}
                lg={{ span: 6, offset: 3 }}
            >
                {children}
            </Col>
        </Row>
    </Container>
);

export default AdaptivePageWrapper;
