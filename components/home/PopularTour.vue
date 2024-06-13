<template>
  <div title="Popular Tours on Safari-trek-beach.com" class="py-5">
    <div class="container">
      <header class="section-header mb-5 mt-3">
        <h1>Popular Tours</h1>
      </header>
      <lazy-component @show.once="popularTourLoading" />
      <div class="row gx-0">
        <div
          v-for="(item, index) in 6"
          :key="index + 'skel'"
          class="col-lg-4 col-md-6 col-xs-12 px-2"
        >
          <TourCardSkelecton v-if="isLoading" />
          <TourCard v-else :tour-data="popularTours[index]" />
        </div>
      </div>
      <div class="text-center mt-3">
        <a href="/our-tours/" class="btn btn-danger" target="_blank">
          View All Packages
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TourCard from "../TourCard";
import TourCardSkelecton from "../TourCardSkelecton";
export default {
  components: {
    TourCard,
    TourCardSkelecton,
  },

  data() {
    return {
      isLoading: true,
    };
  },

  computed: {
    ...mapGetters({
      popularTours: "tourController/popularTours",
    }),
  },
  created() {
    console.log("********popularTours*********",this.popularTours)
  },
  methods: {
    getPopularTours() {
      this.$store.dispatch("tourController/getPopularTours").then(() => {
        this.isLoading = false;
      });
    },
    popularTourLoading() {
      this.getPopularTours();
    },
  },
};
</script>
