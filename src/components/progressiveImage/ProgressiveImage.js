import React from 'react';
import './overlay-styles.scss'

export default class ProgressiveImage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.onImageLoaded = this.onImageLoaded.bind(this);
    }

    state = {
        isImageLoaded: false,
    };

    onImageLoaded() {
        this.setState({isImageLoaded: true})
    }

    render() {
        const {
            overlayUrl,
            fullUrl,
            className,
            ...imgProps
        } = this.props;
        if (!fullUrl || !overlayUrl) return null;
        const {isImageLoaded} = this.state;
        return (
            <div className={className} style={{position: 'relative'}}>
                {!!(fullUrl && overlayUrl) && (
                    <>
                        <img
                            src={overlayUrl}
                            className='overlay'
                            {...isImageLoaded && { style: { opacity: "0" } }}
                            {...imgProps}
                        />
                        <img
                            onLoad={this.onImageLoaded}
                            src={fullUrl}
                            {...imgProps}
                        />
                    </>
                )}
            </div>
        )
    }
}
