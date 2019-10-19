import axios from 'axios';

export default class Service {
    static async fetchArticleListMinified() {
        const {data} = await axios.get('/post/list');
        return data;
    };

    static async fetchArticleById(id) {
        const {data} = await axios.get(`/post/${id}`);
        return data
    }

    static async fetchHomeBannerImage() {
        const {data} = await axios.get(`/home/bannerImage`);
        return data;
    }

    static async fetchHomeAboutUs() {
        const {data} = await axios.get(`/home/aboutUs`);
        return data;
    }
}
