<template>
  <div class="py-5 mt-5 container">
    <h1 class="text-center h2 my-3">Safari Trek Beach Tours in Tanzania</h1>
    <h3 class="text-center h3 my-3">The Best Place for Tanzania Tours</h3>
    <p class="text-center my-4">
      Contrary to popular belief, Lorem Ipsum is not simply random text. It has
      roots in a piece of classical Latin literature from 45 BC, making it over
      2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
      College in Virginia, looked up one of the more obscure Latin words,
      consectetur, from a Lorem Ipsum passage, and going through the cites of
      the word in classical literature, discovered the undoubtable source. Lorem
      Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
      Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
      book is a treatise on the theory of ethics, very popular during the
      Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
      amet..", comes from a line in section 1.10.32.
    </p>
    <landing-card></landing-card>
    <landing-card></landing-card>
    <landing-card></landing-card>
    <landing-card></landing-card>
    <landing-card></landing-card>
    <landing-card></landing-card>
    <landing-card></landing-card>
    <landing-card></landing-card>
  </div>
</template>
  
  <script>
import LandingCard from "../../components/LandingCard.vue";
export default {
  components: {
    LandingCard,
  },

  data() {
    return {};
  },

  metaInfo() {
    return {
      title: `Landing page template | Safari Trek Beach`,
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Here has to be meta description" },
        { property: "og:title", content: "landing page title" },
        { name: "twitter:title", content: "landing page title" },
        {
          property: "og:image",
          content:
            "http://dev.safaritrekbeach.org/_nuxt/img/aboutus_banner.65bdc7d.jpg",
        },
        {
          property: "twitter:image",
          content:
            "http://dev.safaritrekbeach.org/_nuxt/img/aboutus_banner.65bdc7d.jpg",
        },
      ],
    };
  },
};
</script>
<style lang="scss">
</style>