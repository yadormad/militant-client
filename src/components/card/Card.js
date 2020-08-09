import React from 'react';
import './card-styles.scss'
import {isFunction} from "../../utils/Helpers";
import CardContext from "./context";
import axios from 'axios';

class Card extends React.Component {
    state = {
        isExpanded: false,
    };

    onPress = () => {
        const {onPress, expandable} = this.props;
        expandable && this.setState(state => ({isExpanded: !state.isExpanded}));
        isFunction(onPress) && onPress();
    };

    getCardClassNames = () => {
        const {onPress, expandable} = this.props;
        const {isExpanded} = this.state;
        const classNames = [
            (isFunction(onPress) || expandable) && 'card-container__clickable',
            isExpanded && 'card-container__expanded',
        ];
        return classNames.reduce(
            (result, className) => className ? `${result} ${className}` : result,
            'card-container',
        );
    };

    render() {
        const {
            children,
            backgroundImageUrls,
        } = this.props;
        const {isExpanded} = this.state;
        return (
            <div className="card-parent">
                <div
                    className={this.getCardClassNames()}
                    style={getCardStyles(backgroundImageUrls)}
                    onClick={this.onPress}
                >
                    <CardContext.Provider value={{isExpanded}}>
                        {children}
                    </CardContext.Provider>
                </div>
            </div>
        )
    }
}

const getCardStyles = ({fullImageUrl, overlayImageUrl}) => ({
    backgroundImage: `url(${axios.defaults.baseURL}${fullImageUrl || overlayImageUrl})`,
    backgroundSize: 'cover',
    backgroundPositionX: 'center',
    backgroundPositionY: 'top',
});

export default Card;
