import Vue from "vue";
import "viewerjs/dist/viewer.css";
import Viewer from "v-viewer";
Vue.use(Viewer, {
    debug: true,
    defaultOptions: {
        zIndex: 9999
    }
});