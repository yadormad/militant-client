import {CLOSE_SCROLLSPY_VISIBILITY, SET_SCROLLSPY_DATA, TOGGLE_SCROLLSPY_VISIBILITY} from "./constants";


const initState = {
    data: null,
    isPopupVisible: false,
};

export default (state = initState, { type, payload }) => {
    switch (type) {
        case SET_SCROLLSPY_DATA: {
            return {
                ...state,
                data: payload.data,
            };
        }
        case TOGGLE_SCROLLSPY_VISIBILITY: {
            return {
                ...state,
                isPopupVisible: !state.isPopupVisible,
            }
        }
        case CLOSE_SCROLLSPY_VISIBILITY: {
            return {
                ...state,
                isPopupVisible: false,
            }
        }
        default: {
            return state;
        }
    }
}
