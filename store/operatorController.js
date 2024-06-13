import axios from "axios";
import apiurl from "./base_api_url";
const api_url = apiurl.API_URL;
const api_url_1 = apiurl.API_URL_1;

const state = () => ({
    operatorList: null,
    operatorData: null,
    errorData: null,
    quoteRes: null,
});

const getters = {
    operatorList: state => state.operatorList,
    operatorData: state => state.operatorData,
    errorData: state => state.errorData,
    quoteRes: state => state.quoteRes,
};

const mutations = {
    setOperatorList(state, data) {
        state.operatorList = data;
    },

    setOperatorData(state, data) {
        state.operatorData = data;
    },

    setErrorData(state, data) {
        state.errorData = data;
    },

    setQuoteRes(state, data) {
        state.quoteRes = data;
    },
};

const actions = {
    async getOperatorList(context, query) {
        context.commit("setRequestLoadingStatus", true, { root: true });
        await axios
            .get(api_url + "/tour-operators")
            .then(res => {
                context.commit("setRequestLoadingStatus", false, { root: true });
                context.commit("setOperatorList", res.data);
            })
            .catch(() => {
                context.commit("setRequestLoadingStatus", false, { root: true });
            });
    },

    async getOperatorById(context, id) {
        context.commit("setRequestLoadingStatus", true, { root: true });
        await axios
            .get(api_url + "/tour-operator/" + id)
            .then(res => {
                context.commit("setRequestLoadingStatus", false, { root: true });
                context.commit("setOperatorData", res.data);
            })
            .catch(() => {
                context.commit("setRequestLoadingStatus", false, { root: true });
            });
    },

    async postReview(context, query) {
        await axios
            .post(api_url_1 + "/review/create", query)
            .then(res => {
                if (res.status == 200 || res.status == 201) {
                    context.commit("setRequestStatus", true, { root: true });
                } else {
                    context.commit("setRequestStatus", false, { root: true });
                }
            })
            .catch(() => {
                context.commit("setRequestStatus", false, { root: true });
            });
    },

    async becomePartner(context, query) {
        await axios
            .post(api_url_1 + "/tour-operator/register", query)
            .then(res => {
                if (res.status == 200 || res.status == 201) {
                    context.commit("setRequestStatus", true, { root: true });
                } else {
                    context.commit("setRequestStatus", false, { root: true });
                }
            })
            .catch((e) => {
                context.commit("setErrorData", e);
                context.commit("setRequestStatus", false, { root: true });
            });
    },

    async tourQuote(context, query) {
        await axios
            .post(api_url_1 + "/quote/create", query)
            .then(res => {
                if (res.status == 200 || res.status == 201) {
                    context.commit("setRequestStatus", true, { root: true });
                } else {
                    context.commit("setRequestStatus", false, { root: true });
                }
                context.commit("setQuoteRes", res);
            })
            .catch((e) => {
                context.commit("setRequestStatus", false, { root: true });
                context.commit("setQuoteRes", e);
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
