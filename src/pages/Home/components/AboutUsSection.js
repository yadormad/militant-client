import React from 'react';
import {connect} from "react-redux";
import {getAboutUsContent, getAboutUsTitle, isAboutUsLoading} from "../../../selectors/HomeSelectors";
import Loader from "../../../components/loader/Loader";
import Interweave from "interweave";

const AboutUsSection = ({title, content, loading}) => (
    <div className='about-us-section'>
        <Loader visible={loading}/>
        {!loading && (
            <>
                <h3 className='about-us-title'>
                    {title}
                </h3>
                <p className='about-us-content'>
                    <Interweave content={content} />
                </p>
            </>
        )}
    </div>
);

const mapStateToProps = (state) => ({
    title: getAboutUsTitle(state),
    content: getAboutUsContent(state),
    loading: isAboutUsLoading(state),
});

export default connect(mapStateToProps)(AboutUsSection);
