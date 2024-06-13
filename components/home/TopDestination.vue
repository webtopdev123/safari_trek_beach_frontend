<template>
  <div title="Top Destinations on Safari-trek-beach.com">
    <div id="top-destination" class="container">
      <!-- <lazy-component @show.once="topDestinationLoading" /> -->
      <header class="section-header">
        <h1>Our Top Destinations</h1>
      </header>
      <div class="row gx-0 mt-5">
        <a
          v-for="item in topDestinations"
          :key="item._id"
          class="col-lg-3 col-md-4 col-xs-12"
          :href="'/destination/' + item.slug"
          target="_blank"
        >
          <TopDestinationCard :data="item" />
        </a>
      </div>
      <div class="text-center mt-3">
        <a href="/Destinations" class="btn btn-danger" target="_blank">
          View All Destinations
        </a>
      </div>
    </div>
  </div>
</template>
<script>
// import { mapGetters } from "vuex";
import TopDestinationCard from "./TopDestinationCard.vue";

export default {
  computed: {
    // ...mapGetters({
    //   topDestinations: "destinationController/topDestinations",
    // }),
  },

  components: { TopDestinationCard },

  data() {
    return {
      // isLoading: true,
      topDestinations: [
        {
          _id: "634961545ebeb1e48cf72c0d",
          image: {
            desktop: [
              require("@/assets/images/destinations/desktop/Serengeti/ (1).jpg"),
              require("@/assets/images/destinations/desktop/Serengeti/ (2).jpg"),
              require("@/assets/images/destinations/desktop/Serengeti/ (3).jpg"),
              require("@/assets/images/destinations/desktop/Serengeti/ (4).jpg"),
              require("@/assets/images/destinations/desktop/Serengeti/ (5).jpg"),
              require("@/assets/images/destinations/desktop/Serengeti/ (6).jpg"),
              require("@/assets/images/destinations/desktop/Serengeti/ (7).jpg"),
              require("@/assets/images/destinations/desktop/Serengeti/ (8).jpg"),
              require("@/assets/images/destinations/desktop/Serengeti/ (9).jpg"),
              require("@/assets/images/destinations/desktop/Serengeti/ (10).jpg"),
            ],
          },
          slug: "serengeti",
          subTitle: "Top Reasons Why Visit",
          title: "SERENGETI",
          shortDescription: "SERENGETI",
        },
        {
          _id: "634961535ebeb1e48cf72bbf",
          image: {
            desktop: [
              require("@/assets/images/destinations/desktop/ngorongoro/ (1).jpg"),
              require("@/assets/images/destinations/desktop/ngorongoro/ (2).jpg"),
              require("@/assets/images/destinations/desktop/ngorongoro/ (3).jpg"),
              require("@/assets/images/destinations/desktop/ngorongoro/ (4).jpg"),
              require("@/assets/images/destinations/desktop/ngorongoro/ (5).jpg"),
              require("@/assets/images/destinations/desktop/ngorongoro/ (6).jpg"),
            ],
          },
          slug: "ngorongoro",
          subTitle: "Top Reasons To Visit",
          title: "NGORONGORO",
          shortDescription: "NGORONGORO",
        },
        {
          _id: "634961545ebeb1e48cf72bf9",
          image: {
            desktop: [
              require("@/assets/images/destinations/desktop/kilimanjaro/ (1).jpg"),
              require("@/assets/images/destinations/desktop/kilimanjaro/ (2).jpg"),
              require("@/assets/images/destinations/desktop/kilimanjaro/ (3).jpg"),
              require("@/assets/images/destinations/desktop/kilimanjaro/ (4).jpg"),
              require("@/assets/images/destinations/desktop/kilimanjaro/ (5).jpg"),
            ],
          },
          slug: "kilimanjaro",
          subTitle: "Top Reasons Why Visit?",
          title: "Kilimanjaro",
          shortDescription:
            "Mt. Kilimanjaro is the highest free-standing mountain at 5895m. every year over more than 30000 people climb Kilimanjaro. All preparation needed to Climb",
        },
        {
          _id: "634961535ebeb1e48cf72bb3",
          image: {
            desktop: [
              require("@/assets/images/destinations/desktop/zanzibar/ (1).jpg"),
              require("@/assets/images/destinations/desktop/zanzibar/ (2).jpg"),
              require("@/assets/images/destinations/desktop/zanzibar/ (3).jpg"),
              require("@/assets/images/destinations/desktop/zanzibar/ (4).jpg"),
              require("@/assets/images/destinations/desktop/zanzibar/ (5).jpg"),
              require("@/assets/images/destinations/desktop/zanzibar/ (6).jpg"),
            ],
          },
          slug: "zanzibar",
          subTitle: "Top Reasons Wgy Visit",
          title: "Zanzibar",
          shortDescription: "Zanzibar",
        },
        {
          _id: "634961545ebeb1e48cf72bcf",
          image: {
            desktop: [
              require("@/assets/images/destinations/desktop/Tarangire/ (1).jpg"),
              require("@/assets/images/destinations/desktop/Tarangire/ (2).jpg"),
              require("@/assets/images/destinations/desktop/Tarangire/ (3).jpg"),
              require("@/assets/images/destinations/desktop/Tarangire/ (4).jpg"),
              require("@/assets/images/destinations/desktop/Tarangire/ (5).jpg"),
              require("@/assets/images/destinations/desktop/Tarangire/ (6).jpg"),
              require("@/assets/images/destinations/desktop/Tarangire/ (7).jpg"),
            ],
          },
          slug: "tarangire",
          subTitle: "Top Reasons Why Visit?",
          title: "TARANGIRE",
          shortDescription: "TARANGIRE",
        },
        {
          _id: "634961535ebeb1e48cf72bb9",
          image: {
            desktop: [
              require("@/assets/images/destinations/desktop/Gombe/ (1).jpg"),
              require("@/assets/images/destinations/desktop/Gombe/ (2).jpg"),
              require("@/assets/images/destinations/desktop/Gombe/ (3).jpg"),
              require("@/assets/images/destinations/desktop/Gombe/ (4).jpg"),
            ],
          },
          slug: "gombe",
          subTitle: "Top Reasons Why Visit?",
          title: "Gombe",
          shortDescription: "Gombe",
        },
        {
          _id: "634961545ebeb1e48cf72bdb",
          image: {
            desktop: [
              require("@/assets/images/destinations/desktop/Ruaha/ (1).jpg"),
              require("@/assets/images/destinations/desktop/Ruaha/ (2).jpg"),
              require("@/assets/images/destinations/desktop/Ruaha/ (3).jpg"),
              require("@/assets/images/destinations/desktop/Ruaha/ (4).jpg"),
              require("@/assets/images/destinations/desktop/Ruaha/ (5).jpg"),
              require("@/assets/images/destinations/desktop/Ruaha/ (6).jpg"),
            ],
          },
          slug: "ruaha",
          subTitle: "TOP REASONS TO VISIT",
          title: "RUAHA",
          shortDescription: "RUAHA NATIONAL PARK",
        },
        {
          _id: "634961545ebeb1e48cf72beb",
          image: {
            desktop: [
              require("@/assets/images/destinations/desktop/Selous/ (1).jpg"),
              require("@/assets/images/destinations/desktop/Selous/ (2).jpg"),
              require("@/assets/images/destinations/desktop/Selous/ (3).jpg"),
              require("@/assets/images/destinations/desktop/Selous/ (4).jpg"),
              require("@/assets/images/destinations/desktop/Selous/ (5).jpg"),
              require("@/assets/images/destinations/desktop/Selous/ (6).jpg"),
            ],
          },
          slug: "selous",
          subTitle: "Top Reasons To Visit",
          title: "SELOUS",
          shortDescription: "SELOUS",
        },
      ],
    };
  },

  methods: {
    getRandomImage(images) {
      return images[Math.floor(Math.random() * images.length)];
    },
    getTopDestinations() {
      this.$store
        .dispatch("destinationController/getTopDestinations")
        .then(() => {
          this.isLoading = false;
        });
    },

    topDestinationLoading() {
      this.getTopDestinations();
    },
  },
};
</script>

<style scoped lang="scss">
#top-destination {
  padding: 60px 0 40px 0;
  position: relative;

  .col-xs-12:nth-last-child(4),
  .col-xs-12:nth-last-child(3),
  .col-xs-12:nth-last-child(2),
  .col-xs-12:nth-last-child(1) {
    display: block;
  }
  @media only screen and (max-width: 480px) {
    .col-xs-12:nth-last-child(4),
    .col-xs-12:nth-last-child(3),
    .col-xs-12:nth-last-child(2),
    .col-xs-12:nth-last-child(1) {
      display: none;
    }
  }
}
</style>
