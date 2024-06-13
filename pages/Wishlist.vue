<template>
  <div class="py-5">
    <div class="container">
      <header class="section-header mb-5 mt-5">
        <h1>My Wish List</h1>
      </header>
      <div class="row gx-0">
        <div
          v-for="(item, index) in 6"
          :key="index + 'wish'"
          class="col-lg-4 col-md-6 col-xs-12"
        >
          <TourCardSkelecton v-if="isLoading" />
        </div>
      </div>
      <div class="row gx-0">
        <div
          v-for="(item, index) in favList"
          :key="index + 'wish'"
          class="col-lg-4 col-md-6 col-xs-12 px-2"
        >
          <TourCard :tour-data="item" />
        </div>
      </div>
      <div class="text-center" v-if="!isLoading && favList.length == 0">
        There are no tour packages in your wish list. Use the icon to add tour
        packages.
      </div>
      <div class="text-center mt-3">
        <NuxtLink to="/our-tours/" class="btn btn-danger"
          >View All Packages</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script>
import TourCard from "../components/TourCard";
import TourCardSkelecton from "../components/TourCardSkelecton";
export default {
  components: {
    TourCard,
    TourCardSkelecton,
  },

  metaInfo() {
    return {
      title: `Your Wish list | Safari Trek Beach`,
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    };
  },

  data() {
    return {
      isLoading: true,
      favList: [],
    };
  },

  async created() {
    this.favList = await JSON.parse(
      localStorage.getItem("safariWishList") || "[]"
    );
    this.isLoading = false;
  },

  computed: {},

  methods: {},
};
</script>

<style scoped>
.container {
  padding-top: 50px;
}
</style>