import Service from "../../service/Service";
import {
    FETCH_BANNER_IMAGE_SUCCESS,
    FETCH_ABOUT_US_BEGIN,
    FETCH_ABOUT_US_COMPLETE,
} from "./constants";

export const fetchBannerImage = () => (
    async (dispatch) => {
        const imageUrls = await Service.fetchHomeBannerImage();
        dispatch({
            type: FETCH_BANNER_IMAGE_SUCCESS,
            payload: imageUrls,
        })
    }
);

export const fetchAboutUs = () => (
    async (dispatch) => {
        dispatch(fetchAboutUsBegin());
        try {
            const aboutUs = await Service.fetchHomeAboutUs();
            dispatch(fetchAboutUsComplete(aboutUs));
        } catch (e) {
            dispatch(fetchAboutUsComplete());
            alert('Ошыбка');
        }
    }
);

const fetchAboutUsBegin = () => ({
    type: FETCH_ABOUT_US_BEGIN,
});

const fetchAboutUsComplete = aboutUs => ({
    type: FETCH_ABOUT_US_COMPLETE,
    payload: {aboutUs}
});
