import axios from 'axios';

export default class Service {
    static async fetchArticleListMinified(from, to) {
        const {data} = await axios.get('/post/list', {
            headers: {
                'Range': `${from}/${to}`
            }
        });
        return data/*.map(post => ({
            ...post,
            modified: post.modified && Date(post.modified)
        }));*/
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
