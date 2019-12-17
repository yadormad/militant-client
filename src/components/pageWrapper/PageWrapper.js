import React from 'react';
import AbsolutePageWrapper from "./AbsolutePageWrapper";
import AdaptivePageWrapper from "./AdaptivePageWrapper";

const PageWrapper = ({children, right, left, loading}) => (
    <AbsolutePageWrapper loading={loading}>
        <AdaptivePageWrapper
            right={right}
            left={left}
        >
            {children}
        </AdaptivePageWrapper>
    </AbsolutePageWrapper>
);

export default PageWrapper;
