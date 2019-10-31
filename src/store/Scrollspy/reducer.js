import {SET_SCROLLSPY_DATA} from "./constants";


const initState = {
    data: null,
};

export default (state = initState, { type, payload }) => {
    switch (type) {
        case SET_SCROLLSPY_DATA: {
            return {
                ...state,
                data: payload.data,
            };
        }
        default: {
            return state;
        }
    }
}
