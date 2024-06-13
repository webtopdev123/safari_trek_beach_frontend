<template>
  <div id="about-us">
    <lazy-component @show.once="blogLoading" />
    <section class="py-5">
      <div v-if="isBlog" class="container">
        <div class="row gx-0 text-center align-items-center">
          <div
            class="col-md-6 px-2"
            title="Safari Trek Beach is the biggest market place for Tanzania tour packages. We help travellers find the best Tour Operators with the tour packages of their choice, to suit their budget and standard."
          >
            <img
              v-lazy="require('@/assets/images/aboutus_banner.jpg')"
              class="w-100 rounded shadow-lg"
              alt="Safari Trek Beach About Us"
            />
          </div>
          <div class="col-md-6 px-3 mt-5 mt-md-0">
            <h2 class="">About Us</h2>
            <div>
              <p>
                Safari Trek Beach is the biggest market place for Tanzania tour
                packages. We help travellers find the best Tour Operators with
                the tour packages of their choice, to suit their budget and
                standard. We are the experts when it involves Tours and Holidays
                in Tanzania. Safari Trek Beach enables you to compare different
                tour operators on different categories such as Luxury, Lodge,
                Camping safaris or Mountain Climbing tours as well as Beach
                Holidays.
              </p>
            </div>
            <div class="mt-5">
              <a
                class="btn btn-danger"
                href="/about"
                target="_blank"
                title="About Us - Safari-Trek-Beach"
              >
                About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pb-5 pt-3">
      <div class="container">
        <header class="section-header mt-5">
          <h1>From Our Blog</h1>
        </header>

        <div v-if="blog_loading" class="row gx-0 mt-3">
          <div
            v-for="(blog, index) in 3"
            :key="index + 'blog'"
            class="col-lg-4 col-md-6 col-xs-12 px-2"
          >
            <TourCardSkelecton />
          </div>
        </div>
        <div v-else class="row gx-0">
          <div
            v-for="(blog, index) in popularBlogs"
            :key="index"
            class="col-lg-4 col-md-6 col-xs-12"
          >
            <BlogCard :blog="blog" />
          </div>
        </div>

        <div class="text-center mt-3">
          <a href="/Blogs" class="btn btn-danger" target="_blank">
            View All Blogs</a
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BlogCard from "../BlogCard";
import TourCardSkelecton from "../TourCardSkelecton";

export default {
  components: {
    BlogCard,
    TourCardSkelecton,
  },

  data() {
    return {
      blog_loading_custom: true,
      isBlog: false,
    };
  },

  computed: {
    ...mapGetters({
      popularBlogs: "blogController/popularBlogs",
      blog_loading: "blogcard_loading",
    }),
  },

  methods: {
    async getPopularBlogs() {
      await this.$store.dispatch("blogController/getPopularBlogs").then(() => {
        this.blog_loading_custom = false;
      });
    },
    blogLoading() {
      this.isBlog = true;
      this.getPopularBlogs();
    },
  },
};
</script>

<style lang="scss" scoped>
#about-us {
  .mask {
    background-color: rgba(248, 120, 120, 0.15);
  }
  .card-text {
    &::before {
      position: absolute;
      content: "";
      inset-block-end: 0;
      inset-inline-end: 0;
    }
    &::after {
      content: "";
      position: absolute;
      inset-inline-end: 0;
      width: 1rem;
      height: 1rem;
      background: white;
    }
  }

  // @media (max-width: 500px) {
  //   #about-us .bg-image {
  //     // background-image: url("/images/img5_mobile.jpg");
  //   }
  // }
}
</style>
