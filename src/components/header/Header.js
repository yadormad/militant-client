import React from 'react';
import TopAppBar, {
    TopAppBarRow,
    TopAppBarSection,
    TopAppBarTitle,
    TopAppBarIcon,
} from '@material/react-top-app-bar';
import MaterialIcon from '@material/react-material-icon';
import PropTypes from 'prop-types';
import './header_styles.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import SideMenu from '../sidemenu/SideMenu';
import { toggleVisibility } from '../../store/SideMenu/actions';
import LogoIcon from "../icons/LogoIcon";
import ScrollspyHeaderButton from "./ScrollspyHeaderButton";

const Header = ({ onMenuButtonClick }) => (
    <>
        <SideMenu />
        <TopAppBar fixed>
            <TopAppBarRow>
                <TopAppBarSection align='start'>
                    <TopAppBarIcon navIcon tabIndex={0}>
                        <MaterialIcon hasRipple icon='menu' onClick={onMenuButtonClick} />
                    </TopAppBarIcon>
                    <TopAppBarTitle>
                        <Link to='/'>
                            <LogoIcon className='logo-icon' />
                        </Link>
                    </TopAppBarTitle>
                </TopAppBarSection>
                <TopAppBarSection align='end' role='toolbar'>
                    <ScrollspyHeaderButton />
                </TopAppBarSection>
            </TopAppBarRow>
        </TopAppBar>
    </>
);

Header.propTypes = {
    onMenuButtonClick: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
    onMenuButtonClick: () => dispatch(toggleVisibility()),
});

export default connect(null, mapDispatchToProps)(Header);
