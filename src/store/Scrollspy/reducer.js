import {SET_SCROLLSPY_DATA} from "./constants";


const initState = {
    data: null,
    names: null
};

export default (state = initState, { type, payload }) => {
    switch (type) {
        case SET_SCROLLSPY_DATA: {
            return {
                ...state,
                data: payload.data,
                names: payload.names
            };
        }
        default: {
            return state;
        }
    }
}
