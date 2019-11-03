import React from 'react';
import ScrollspyContent from "./ScrollspyContent";
import './scrollspy-styles.scss';
import {connect} from "react-redux";
import {getScrollSpyData} from "../../selectors/ScrollSpySelectors";

const ScrollspyFixedContainer = ({scrollspyData}) => {
    if (!scrollspyData) return null;
    return (
        <div className='scrollspy-fixed-container'>
            <ScrollspyContent scrollspyData={scrollspyData}/>
        </div>
    );
};


const mapStateToProps = state => ({
    scrollspyData: getScrollSpyData(state),
});

export default connect(mapStateToProps)(ScrollspyFixedContainer);
