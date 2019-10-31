import {SET_SCROLLSPY_DATA} from "./constants";

export const setScrollspyData = (data) => ({
    type: SET_SCROLLSPY_DATA,
    payload: {data},
});
