import React from 'react';
import AbsolutePageWrapper from "./AbsolutePageWrapper";
import AdaptivePageWrapper from "./AdaptivePageWrapper";

const PageWrapper = ({children, loading}) => (
    <AbsolutePageWrapper loading={loading}>
        <AdaptivePageWrapper>
            {children}
        </AdaptivePageWrapper>
    </AbsolutePageWrapper>
);

export default PageWrapper;
