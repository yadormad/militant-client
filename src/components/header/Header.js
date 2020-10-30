import React, {useCallback, useEffect, useState} from 'react';
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
import {isHomePage} from "../../utils/RouterHelpers";

// 200ms linear;
const HeaderFilledContainer = ({isOpen}) => (
    <TopAppBar fixed >

        <TopAppBarRow />
    </TopAppBar>
)

const Header = ({ onMenuButtonClick }) => {
    const isHome = isHomePage();
    const [isScrolled, setIsScrolled] = useState(!isHome);
    const handleScroll = useCallback(() => {
        if (!isScrolled && window.scrollY) {
            setIsScrolled(true);
        }
        if (isScrolled && !window.scrollY) {
            setIsScrolled(false);
        }
    }, [isScrolled, setIsScrolled]);
    useEffect(() => {
        if (isHome) {
            window.addEventListener('scroll', handleScroll);
        } else {
            window.removeEventListener('scroll', handleScroll);
        }
        return () => window.removeEventListener('scroll', handleScroll);
    })
    return (
        <>
            <SideMenu />
            <TopAppBar fixed className={isScrolled ? 'mdc-top-app-bar--filled' : ''}>
                <TopAppBarRow>
                    <TopAppBarSection align='start'>
                        <TopAppBarIcon navIcon tabIndex={0}>
                            <MaterialIcon hasRipple icon='menu' onClick={onMenuButtonClick} />
                        </TopAppBarIcon>
                        <TopAppBarTitle>
                            <Link to='/'>
                                <LogoIcon className={`logo-icon ${!isScrolled ? 'logo-icon--onBanner' : ''}`} />
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
}

Header.propTypes = {
    onMenuButtonClick: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
    onMenuButtonClick: () => dispatch(toggleVisibility()),
});

export default connect(null, mapDispatchToProps)(Header);
