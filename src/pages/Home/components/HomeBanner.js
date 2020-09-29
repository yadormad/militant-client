import React from 'react';
import ProgressiveImage from "../../../components/progressiveImage/ProgressiveImage";
import {connect} from "react-redux";
import LogoIcon from "../../../components/icons/LogoIcon";
import '../home-styles.scss'
import banner from  '../../../banner.jpg'

const HomeBanner = ({fullUrl, overlayUrl}) => {
    return (
        <div style={{position: 'relative'}}>
            <ProgressiveImage
                overlayUrl={banner}
                fullUrl={banner}
                className='homeBanner'
            />
            {/*<LogoIcon
                svgParams={{
                    width: '50%',
                    height: 'auto',
                    className: 'banner-text',
                }}
                style={{
                    position: 'absolute',
                    top: '50%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    height: '100px',
                    width: '100%'
                }}
            />*/}
        </div>
    )
};

const mapStateToProps = state => ({
    fullUrl: state.home.bannerImage.full,
    overlayUrl: state.home.bannerImage.overlay,
});

export default connect(mapStateToProps)(HomeBanner);
