import React from 'react';
import './article-excerpt-alt.scss';

const ArticleExcerptAltCard = () => {
    const divRef = React.useRef();
    const leftOffset = React.useMemo(() => {
        return divRef.current && divRef.current.offsetLeft;
    }, [divRef.current])
    const [styleLeft, setStyleLeft] = React.useState(0);
    return (
        <div
            ref={divRef}
            className="card-container-alt"
            style={{left: styleLeft}}
            onMouseLeave={() => setStyleLeft(0)}
            onMouseEnter={() => setStyleLeft(`${-leftOffset}px`)}
        >
            <div className="card-img"/>
        </div>
    )
}

export default ArticleExcerptAltCard;
