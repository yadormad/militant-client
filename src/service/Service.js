import axios from 'axios';

export default class Service {
    static async fetchArticleListMinified(from, to) {
        const {data} = await axios.get('/post/list', {
            params: {
                _start: from,
                _limit: from + to,
            },
        });
        return data.map(post => ({
            ...post,
            date: post.created_at,
        }))/*.map(post => ({
            ...post,
            modified: post.modified && Date(post.modified)
        }));*/
    };

    static async fetchArticleById(id) {
        const {data} = await axios.get(`/posts/${id}`);
        return data;
    }

    static async fetchHomeBannerImage() {
        const {data} = await axios.get(`/home/bannerImage`);
        return data;
    }

    static async fetchHomeAboutUs() {
        const {data} = await axios.get(`/about-us`);
        return data;
    }
}
