import Vue from 'vue'
import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload, {
  observer: true,
  lazyComponent: true,
})