import React from 'react';
import LinearProgress from '@material/react-linear-progress';
import './loader_styles.scss';

const Loader = ({visible}) => (
    <LinearProgress
        indeterminate
        closed={!visible}
    />
);

export default Loader;
