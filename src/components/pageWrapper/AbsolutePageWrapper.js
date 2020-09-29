import React from 'react';
import Loader from "../loader/Loader";

const AbsolutePageWrapper = ({children, loading}) => (
    <div style={styles.fill}>
        <Loader visible={loading} />
        {children}
    </div>
);

const styles = {
    fill: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
};

export default AbsolutePageWrapper;
