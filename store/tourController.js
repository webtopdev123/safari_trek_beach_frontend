import axios from "axios";
import apiurl from "./base_api_url";
const api_url = apiurl.API_URL;

import climateData from "./climate/climate.json";

const state = () => ({
    popularTours: null,
    ourTours: null,
    filterTours: null,
    packageData: null,
    landingData: null,

    tourActivity: null,
    tourLevel: null,
    tourFocus: null,

    query_instore: {},

    where_to_search: "",
    start_date: new Date(),
    traveler_number: "",
    adults_number: 2,
    children_number: 0,
    email: "",
    fullname: "",

    package_id: null,
    user_id: null,

    quoteData: {},
    detailData: {},

    climateData: {},

    wishlist_count: 0,
});

const getters = {
    popularTours: state => state.popularTours,
    ourTours: state => state.ourTours,
    filterTours: state => state.filterTours,
    packageData: state => state.packageData,
    landingData: state => state.landingData,

    tourActivity: state => state.tourActivity,
    tourLevel: state => state.tourLevel,
    tourFocus: state => state.tourFocus,

    tourFilterForm: state => state.tourFilterForm,

    where_to_search: state => state.where_to_search,
    start_date: state => state.start_date,
    adults_number: state => state.adults_number,
    children_number: state => state.children_number,
    traveler_number: state => state.traveler_number,
    fullname: state => state.fullname,
    email: state => state.email,

    query_instore: state => state.query_instore,

    quoteData: state => state.quoteData,
    detailData: state => state.detailData,

    climateData: state => state.climateData,

    package_id: state => state.package_id,
    user_id: state => state.user_id,

    wishlist_count: state => state.wishlist_count,
};

const mutations = {
    setWishlistCount(state, data) {
        state.wishlist_count = data;
    },

    setPopularTours(state, data) {
        state.popularTours = data;
    },

    setTourActivity(state, data) {
        state.tourActivity = data;
    },

    setTourLevel(state, data) {
        state.tourLevel = data;
    },

    setTourFocus(state, data) {
        state.tourFocus = data;
    },

    setFilterTours(state, data) {
        state.filterTours = data;
    },

    setTourById(state, data) {
        state.packageData = data;
    },

    setLandingTourById(state, data) {
        state.landingData = data;
    },

    setQuery(state, data) {
        state.query_instore = data;
    },

    setSearchData(state, data) {
        state.where_to_search = data.where_to_search;
        state.start_date = data.start_date;
        state.adults_number = data.adults_number;
        state.children_number = data.children_number;
        state.traveler_number = data.traveler_number;
        state.email = data.email;
        state.fullname = data.name;
    },

    setTourInfo(state, data) {
        state.package_id = data.package_id;
        state.user_id = data.user_id;
    },

    setQuotePackage(state, data) {
        state.quoteData = data;
    },

    setdetailData(state, data) {
        state.detailData = data;
    },

    setClimateData(state, data) {
        state.climateData = data;
    },

    initFilterData(state) {
        state.filterTours = null;
    },
};

const actions = {
    async getPopularTours(context) {
        context.commit("setRequestLoadingStatus", true, { root: true });
        await axios
            .get(api_url + "/popular-tour")
            .then(res => {
                context.commit("setPopularTours", res.data);
                context.commit("setRequestLoadingStatus", false, { root: true });
            })
            .catch(() => {
                context.commit("setRequestLoadingStatus", false, { root: true });
            });
    },

    async getTourActivity(context) {
        await axios
            .get(api_url + "/our-tour/activity")
            .then(res => {
                context.commit("setTourActivity", res.data);
            })
            .catch(() => { });
    },

    async getTourFocus(context) {
        await axios
            .get(api_url + "/our-tour/focus")
            .then(res => {
                context.commit("setTourFocus", res.data);
            })
            .catch(() => { });
    },

    async getTourLevel(context) {
        await axios
            .get(api_url + "/our-tour/level")
            .then(res => {
                context.commit("setTourLevel", res.data);
            })
            .catch(() => { });
    },

    async getTourFilter(context, query) {
        context.commit("setRequestLoadingStatus", true, { root: true });
        context.commit("initFilterData");
        await axios
            .get(api_url + "/our-tour/packages", { params: query })
            .then(res => {
                context.commit("setFilterTours", res.data);
                context.commit("setRequestLoadingStatus", false, { root: true });
            })
            .catch(() => {
                context.commit("setRequestLoadingStatus", false, { root: true });
            });
    },

    async getTourById(context, id) {
        context.commit("setRequestLoadingStatus", true, { root: true });
        await axios
            .get(api_url + "/tour/package/" + id)
            .then(res => {
                context.commit("setTourById", res.data);
                context.commit("setRequestLoadingStatus", false, { root: true });
            })
            .catch(() => {
                context.commit("setRequestLoadingStatus", false, { root: true });
            });
    },

    async getLandingTourById(context, id) {
        context.commit("setRequestLoadingStatus", true, { root: true });

        await axios
            .get(api_url + "/landing-page/" + id, { 'content-type': 'application/json', })
            .then(res => {
                context.commit("setLandingTourById", res.data);
                context.commit("setRequestLoadingStatus", false, { root: true });
            })
            .catch(() => {
                context.commit("setRequestLoadingStatus", false, { root: true });
            });
    },

    //save search data item to store to use other pages...
    setSearchData(context, search_data) {
        context.commit("setSearchData", search_data);
    },

    //save climate data from json file to destination page
    setClimateData(context) {
        context.commit("setClimateData", climateData);
    },

    //save package and user id data to store to use quote page...
    setTourInfo(context, tour_info) {
        context.commit("setTourInfo", tour_info);
    },

    //save query data in store
    setQuery(context, query) {
        context.commit("setQuery", query);
    },

    //save wishlist data in store
    setWishlistCount(context, count) {
        context.commit("setWishlistCount", count);
    },

    //save quote data in store (package name, etc)
    setQuotePackage(context, quoteData) {
        context.commit("setQuotePackage", quoteData);
    },

    //save quote data in store (package name, etc)
    setdetailData(context, detailData) {
        context.commit("setdetailData", detailData);
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
};
