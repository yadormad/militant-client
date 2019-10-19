import React from 'react';
import Drawer, {
    DrawerHeader,
    DrawerSubtitle,
    DrawerTitle,
    DrawerContent,
} from '@material/react-drawer';
import { connect } from 'react-redux';
import './side-menu-styles.scss';
import List, { ListItem, ListItemText } from '@material/react-list';
import { toggleVisibility } from '../../store/SideMenu/actions';

const SideMenu = ({ isVisible, onClose }) => (
    <Drawer
        modal
        onClose={onClose}
        open={isVisible}
    >
        <DrawerHeader>
            <DrawerTitle tag='h2'>
                Inbox
            </DrawerTitle>
            <DrawerSubtitle>
                matt@email.com
            </DrawerSubtitle>
        </DrawerHeader>

        <DrawerContent tag='main'>
            <List
                singleSelection
                selectedIndex={0}
            >
                <ListItem>
                    <ListItemText primaryText='Photos' />
                </ListItem>
                <ListItem>
                    <ListItemText primaryText='Recipes' />
                </ListItem>
                <ListItem>
                    <ListItemText primaryText='Work' />
                </ListItem>
            </List>
        </DrawerContent>
    </Drawer>
);

const mapStateToProps = state => ({
    isVisible: state.sideMenu.isVisible,
});

const mapDispatchToProps = dispatch => ({
    onClose: () => dispatch(toggleVisibility()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideMenu);
