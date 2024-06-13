import axios from "axios";
import apiurl from "./base_api_url";
const api_url = apiurl.API_URL;


const state = () => ({
    popularBlogs: null,
    listBlog: null,
    blogData: null,
})

const getters = {
    popularBlogs: state => state.popularBlogs,
    listBlog: state => state.listBlog,
    blogData: state => state.blogData,
};

const mutations = {
    setPopularBlogs(state, data) {
        state.popularBlogs = data;
    },
    setListBlogs(state, data) {
        state.listBlog = data;
    },
    setBlogData(state, data) {
        state.blogData = data;
    },
};

const actions = {
    async getPopularBlogs(context) {
        context.commit("setBlogLoadingStatus", true, { root: true });
        await axios
            .get(api_url + "/top-blog-posts")
            .then(res => {
                context.commit("setPopularBlogs", res.data);
                context.commit("setBlogLoadingStatus", false, { root: true });
            })
            .catch(() => {
                context.commit("setBlogLoadingStatus", false, { root: true });
            });
    },
    async getListBlogs(context) {
        context.commit("setRequestLoadingStatus", true, { root: true });
        await axios
            .get(api_url + "/blog-posts")
            .then(res => {
                context.commit("setListBlogs", res.data);
                context.commit("setRequestLoadingStatus", false, { root: true });
            })
            .catch(() => {
                context.commit("setRequestLoadingStatus", false, { root: true });
            });
    },
    async getBlogById(context, slug) {
        context.commit("setRequestLoadingStatus", true, { root: true });
        await axios
            .get(api_url + "/blog-post/" + slug)
            .then(res => {
                context.commit("setBlogData", res.data);
                context.commit("setRequestLoadingStatus", false, { root: true });
            })
            .catch(() => {
                context.commit("setRequestLoadingStatus", false, { root: true });
            });
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
