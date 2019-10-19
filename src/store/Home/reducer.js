import {
    FETCH_BANNER_IMAGE_SUCCESS,
    FETCH_ABOUT_US_BEGIN,
    FETCH_ABOUT_US_COMPLETE,
} from "./constants";


const initState = {
    bannerImage: {
        overlay: null,
        full: null,
    },
    isAboutUsLoading: false,
    aboutUs: null,
};

export default (state = initState, { type, payload }) => {
    switch (type) {
        case FETCH_BANNER_IMAGE_SUCCESS:
            return {
                ...state,
                bannerImage: {
                    full: payload.fullImageUrl,
                    overlay: payload.overlayImageUrl,
                }
            };
        case FETCH_ABOUT_US_BEGIN:
            return {
                ...state,
                isAboutUsLoading: true,
            };
        case FETCH_ABOUT_US_COMPLETE:
            return {
                ...state,
                isAboutUsLoading: false,
                aboutUs: payload.aboutUs,
            };
        default:
            return state;
    }
}
