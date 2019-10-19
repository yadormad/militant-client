import { TOGGLE_VISIBILITY } from './constants';

const initState = {
    isVisible: false,
};

export default (state = initState, { type }) => {
    switch (type) {
        case TOGGLE_VISIBILITY:
            return {
                ...state,
                isVisible: !state.isVisible,
            };
        default: {
            return state;
        }
    }
};
