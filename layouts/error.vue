<template>
  <div id="notfound">
    <div class="notfound">
      <div class="notfound-404">
        <h1>Oops!</h1>
        <h2 v-if="error.statusCode === 404">404 - The Page can't be found</h2>
        <h2 v-else>An error occurred</h2>
      </div>
      <nuxt-link to="/" class="btn btn-danger m-2"> Homepage </nuxt-link>
      <nuxt-link to="/our-tours/" class="btn btn-danger m-2">
        Our Tours
      </nuxt-link>
    </div>
  </div>
</template>
  <script>
export default {
  name: "Error404",
  props: ["error"],
  layout: "error",
  data() {
    return {};
  },

  metaInfo() {
    return {
      title: `Page Not Found on Safari-Trek-Beach.com`,
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          property: "og:title",
          content: "Page Not Found on Safari-Trek-Beach.com",
        },
        {
          name: "twitter:title",
          content: "Page Not Found on Safari-Trek-Beach.com",
        },
      ],
    };
  },
};
</script>
  <style scoped lang="scss">
#notfound {
  position: relative;
  height: 100vh;

  .notfound {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 520px;
    width: 100%;
    line-height: 1.4;
    text-align: center;

    .notfound-404 {
      position: relative;
      height: 200px;
      margin: 0px auto 20px;
      z-index: -1;
      h1 {
        font-size: 236px;
        font-weight: 400;
        margin: 0px;
        color: #211b19;
        text-transform: uppercase;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        @media (max-width: 767px) {
          top: 30%;
          font-size: 100px;
        }
      }
      h2 {
        font-size: 28px;
        font-weight: 400;
        text-transform: uppercase;
        color: #211b19;
        background: #f6f6f7;
        padding: 10px 5px;
        margin: auto;
        display: inline-block;
        position: absolute;
        bottom: -10px;
        left: 0;
        right: 0;
      }
    }
  }
}
</style>
  