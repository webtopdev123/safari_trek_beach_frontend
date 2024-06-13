import axios from "axios";
import apiurl from "./base_api_url";
const api_url = apiurl.API_URL;

const state = () => ({
    topDestinations: null,
    listDestinations: null,
    destinationData: null,
});

const getters = {
    topDestinations: state => state.topDestinations,
    listDestinations: state => state.listDestinations,
    destinationData: state => state.destinationData,
};

const mutations = {
    setTopDestinations(state, data) {
        state.topDestinations = data;
    },
    setListDestinations(state, data) {
        state.listDestinations = data;
    },
    setDestinationData(state, data) {
        state.destinationData = data;
    },
};

const actions = {
    async getTopDestinations(context) {
        context.commit("setRequestLoadingStatus", true, { root: true });

        await axios
            .get(api_url + "/top-destination-posts")
            .then(res => {
                if (res.status == 200) {
                    context.commit("setTopDestinations", res.data);
                }
                context.commit("setRequestLoadingStatus", false, { root: true });
            })
            .catch(() => {
                context.commit("setRequestLoadingStatus", false, { root: true });
            });
    },
    async getListDestinations(context) {
        context.commit("setRequestLoadingStatus", true, { root: true });
        await axios
            .get(api_url + "/destination-posts")
            .then(res => {
                if (res.status == 200) {
                    context.commit("setListDestinations", res.data);
                }
                context.commit("setRequestLoadingStatus", false, { root: true });
            })
            .catch(() => {
                context.commit("setRequestLoadingStatus", false, { root: true });
            });
    },
    async getDestinationById(context, slug) {
        context.commit("setRequestLoadingStatus", true, { root: true });
        await axios
            .get(api_url + "/destination-post/" + slug)
            .then(res => {
                context.commit("setDestinationData", res.data);
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
