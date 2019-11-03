import {CLOSE_SCROLLSPY_VISIBILITY, SET_SCROLLSPY_DATA, TOGGLE_SCROLLSPY_VISIBILITY} from "./constants";

export const setScrollspyData = data => ({
    type: SET_SCROLLSPY_DATA,
    payload: {data},
});

export const toggleScrollSpyPopupVisibility = () => ({
    type: TOGGLE_SCROLLSPY_VISIBILITY,
});

export const closeScrollSpyPopupVisibility = () => ({
    type: CLOSE_SCROLLSPY_VISIBILITY,
});

