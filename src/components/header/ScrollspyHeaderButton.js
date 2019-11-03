import React from "react";
import MenuSurface, {Corner} from '@material/react-menu-surface';
import MaterialIcon from "@material/react-material-icon";
import {TopAppBarIcon} from "@material/react-top-app-bar";
import {getScrollSpyData, isScrollSpyPopupVisible} from "../../selectors/ScrollSpySelectors";
import {closeScrollSpyPopupVisibility, toggleScrollSpyPopupVisibility} from "../../store/Scrollspy/actions";
import {connect} from "react-redux";
import ScrollspyContent from "../scrollspy/ScrollspyContent";
//list

class ScrollspyHeaderButton extends React.Component {
    state = {
        anchorElement: null,
    };

    setAnchorElement = (element) => {
        if (this.state.anchorElement) {
            return;
        }
        this.setState({anchorElement: element});
    };

    render() {
        const {
            scrollSpyData,
            isPopupVisible,
            togglePopupVisibility,
            onClose,
        } = this.props;
        if (!scrollSpyData) return null;
        return (
            <div ref={this.setAnchorElement} className='mdc-menu-surface--anchor scrollspy-header-button'>
                <TopAppBarIcon actionItem tabIndex={0}>
                    <MaterialIcon hasRipple icon='list' onClick={togglePopupVisibility} />
                </TopAppBarIcon>
                <MenuSurface
                    open={isPopupVisible}
                    anchorCorner={Corner.BOTTOM_RIGHT}
                    onClose={onClose}
                    anchorElement={this.state.anchorElement}
                    fixed
                >
                    <div className='scrollspy-popup-container'>
                        <ScrollspyContent scrollspyData={scrollSpyData}/>
                    </div>
                </MenuSurface>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    scrollSpyData: getScrollSpyData(state),
    isPopupVisible: isScrollSpyPopupVisible(state),
});

const mapDispatchToProps = dispatch => ({
    togglePopupVisibility: () => dispatch(toggleScrollSpyPopupVisibility()),
    onClose: () => dispatch(closeScrollSpyPopupVisibility()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ScrollspyHeaderButton);
