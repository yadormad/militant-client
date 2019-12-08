import React from 'react';
import {connect} from "react-redux";
import {getAboutUsContent, getAboutUsTitle, isAboutUsLoading} from "../../../selectors/HomeSelectors";
import Loader from "../../../components/loader/Loader";
import htmlParser from 'react-html-parser';

const AboutUsSection = ({title, content, loading}) => (
    <div className='about-us-section'>
        <Loader visible={loading}/>
        {!loading && (
            <>
                <h2 className='about-us-title'>
                    {title}
                </h2>
                <p className='about-us-content'>
                    {htmlParser(content)}
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
