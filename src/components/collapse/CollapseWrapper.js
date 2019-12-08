import React from 'react';

import IconButton from "@material/react-icon-button";
import MaterialIcon from "@material/react-material-icon";
import {Collapse} from "react-collapse";

import './collapse.scss';

export default class CollapseWrapper extends React.Component {
    state = {
        isOpened: false,
    };

    getIconClassName() {
        return `collapse-icon ${this.state.isOpened && 'down'}`
    }

    toggleCollapse = () => {
        this.setState(({isOpened}) => ({isOpened: !isOpened}));
    };

    render() {
        const {headerNode, children} = this.props;
        return (
            <>
                <div className='collapse-header-container'>
                    {headerNode}
                    <IconButton onClick={this.toggleCollapse}>
                        <MaterialIcon icon='keyboard_arrow_down' className={this.getIconClassName()}/>
                    </IconButton>
                </div>
                <Collapse checkTimeout={500} isOpened={this.state.isOpened}>
                    {children}
                </Collapse>
            </>
        );
    }
}
