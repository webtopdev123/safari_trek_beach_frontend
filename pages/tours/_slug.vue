<template>
  <div class="py-5 mt-3 landing">
    <div class="banner-wrapper">
      <img
        :src="images[randIndex]"
        class="banner-image-desktop"
        :alt="landingData.title"
      />
      <img
        :src="images[8]"
        class="banner-image-mobile"
        :alt="landingData.title"
      />
    </div>
    <section class="px-1">
      <h1 class="sub-title">{{ landingData.title }}</h1>
    </section>
    <div class="container mt-5">
      <p class="mt-3">
        {{ landingData.shortDescription }}
      </p>
      <div class="mb-5" v-html="landingData.sections[0].longDescription"></div>
    </div>

    <div v-for="section in landingData.sections" :key="section._id">
      <section class="px-1">
        <h2 class="sub-title">{{ section.title }}</h2>
      </section>
      <div class="mb-5 container" v-html="section.description"></div>
      <div class="container mt-5" v-if="section.packages.length > 0">
        <div class="row gx-0">
          <div
            v-for="(item, index) in section.packages"
            :key="index + 'ld'"
            class="col-lg-4 col-md-6 col-xs-12 px-2"
          >
            <TourCard :tour-data="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TourCard from "../../components/TourCard.vue";
export default {
  components: {
    TourCard,
  },

  data() {
    return {
      images: [
        require("@/assets/images/banner01.jpg"),
        require("@/assets/images/banner02.jpg"),
        require("@/assets/images/banner03.jpg"),
        require("@/assets/images/banner04.jpg"),
        require("@/assets/images/banner05.jpg"),
        require("@/assets/images/banner06.jpg"),
        require("@/assets/images/banner07.jpg"),
        require("@/assets/images/banner08.jpg"),
        require("@/assets/images/banner04_sm.jpg"),
      ],
      randIndex: 3,
    };
  },

  asyncData: ({ $http, params }) =>
    $http
      .$get(`https://siteapi.safaritreksbeach.com/landing-page/${params.slug}`)
      .then((landingData) => ({ landingData })),

  metaInfo() {
    return {
      title: `${this.landingData.title} | Safari Trek Beach`,
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: this.landingData.shortDescription },
        { property: "og:title", content: this.landingData.title },
        { name: "twitter:title", content: this.landingData.title },
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
        // { property: "og:url", content: window.location.href },
      ],
    };
  },
};
</script>

<style lang="scss">
.landing {
  h2 {
    font-size: 29px;
    font-weight: 600;
  }
  h3 {
    font-size: 27px;
    font-weight: 600;
  }
  h4 {
    font-size: 25px;
    font-weight: 500;
  }
  h5 {
    font-size: 23px;
    font-weight: 500;
  }

  .banner-wrapper {
    overflow: hidden;
    margin-top: -6px;
    width: 100%;
    height: 480px;
    position: relative;
    @media (max-width: 500px) {
      height: 343px;
    }
  }
  .banner-image-desktop {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    @media (max-width: 500px) {
      display: none;
    }
  }
  .banner-image-mobile {
    max-width: 100%;
    max-height: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom;
    display: none;
    @media (max-width: 500px) {
      display: block;
    }
  }
  section {
    background-color: rgba(225, 223, 219, 1);
  }
  .sub-title,
  h3 {
    font-size: 24px;
    color: #6f1110;
    text-align: center;
    font-weight: 700;
    position: relative;
    padding-bottom: 2.2rem;
    padding-top: 2.2rem;
    @media (max-width: 500px) {
      font-weight: 600;
    }
  }
  .hero-section {
    width: 100%;
    height: 100%;
    .description-wrapper {
      max-width: 700px;
      margin: 0 auto;
      padding: 0 20px;
      h5 {
        color: rgb(255, 255, 255);
        font-size: 23px;
        @media (max-width: 500px) {
          font-size: 20px;
        }
      }
    }
  }
  .btn-landing {
    background-color: #e21720;
    color: white;
  }
}
</style>