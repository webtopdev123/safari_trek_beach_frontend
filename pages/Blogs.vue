<template>
  <div class="blog-post-page">
    <div class="container">
      <section>
        <header class="section-header mt-5">
          <h1>OUR BLOG POSTS</h1>
        </header>

        <div class="row gx-0">
          <div
            v-for="(blog, index) in listBlog.slice(
              (pageNumber - 1) * blogs_per_page,
              pageNumber * blogs_per_page
            )"
            :key="index"
            class="col-lg-4 col-md-6 col-xs-12"
          >
            <BlogCard :blog="blog" />
          </div>

          <div class="d-flex justify-content-center mt-4 px-2">
            <client-only>
              <paginate
                v-model="pageNumber"
                :page-count="Math.ceil(listBlog.length / blogs_per_page)"
                :prev-text="'Prev'"
                :next-text="'Next'"
                :container-class="'pagination'"
                :page-class="'page-item'"
                :prev-class="'page-link prev'"
                :next-class="'page-link next'"
                :page-link-class="'page-link'"
              />
            </client-only>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import BlogCard from "../components/BlogCard";
export default {
  name: "BlogPost",
  components: {
    BlogCard,
    [process.browser && "Paginate"]: () => import("vuejs-paginate"),
  },
  data() {
    return {
      pageNumber: null,
      blogs_per_page: 6,
    };
  },

  asyncData: ({ $http }) =>
    $http
      .$get(`https://siteapi.safaritreksbeach.com/blog-posts`)
      .then((listBlog) => ({ listBlog })),

  metaInfo() {
    return {
      title: `Blog Post | Safari-Trek-Beach`,
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "Safari Trek Beach",
        },
        { hid: "twitter:site", name: "twitter:site", content: "@STB" },
        { hid: "twitter:creator", name: "twitter:creator", content: "@STB" },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Blogs - Safari Trek Beach",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "Tanzania is home to some of Africa's greatest travel experiences. Witness the Great Migration, explore Zanzibar or relax on the sandy white beaches!",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content:
            "https://safaritrekbeach.org/_nuxt/img/aboutus_banner.65bdc7d.jpg",
        },
        {
          hid: "description",
          name: "description",
          content:
            "Tanzania is home to some of Africa's greatest travel experiences. Witness the Great Migration, explore Zanzibar or relax on the sandy white beaches!",
        },
        {
          hid: "og:url",
          name: "og:url",
          content: "https://safaritrekbeach.org/Blogs",
        },
        {
          hid: "og:image",
          property: "og:image",
          content:
            "https://dev.safaritrekbeach.org/_nuxt/img/aboutus_banner.65bdc7d.jpg",
        },
        {
          hid: "og:site_name",
          name: "og:site_name",
          content: "Blogs - Safari Trek Beach",
        },

        {
          hid: "og:title",
          name: "og:title",
          content: "Blogs - Safari Trek Beach",
        },
        {
          hid: "og:description",
          name: "og:description",
          content: "Blogs - Safari Trek Beach",
        },
      ],
    };
  },
  computed: {
    page_id: function () {
      var id = this.$route.query.p;
      if (id != undefined) return id.slice(0, id.length);
      else return "";
    },
  },

  watch: {
    pageNumber: function (newValue) {
      if (newValue > 1)
        this.$router.push({
          name: "Blogs",
          query: { p: newValue },
        });
      else if (newValue == 1) this.$router.push("/Blogs");
    },
  },

  created() {
    if (this.page_id != "") {
      if (
        Math.ceil(this.listBlog.length / this.blogs_per_page) <
        parseInt(this.page_id)
      )
        this.pageNumber = 1;
      else this.pageNumber = parseInt(this.page_id);
    } else this.pageNumber = 1;
  },
};
</script>

<style lang="scss" scoped>
.blog-post-page {
  padding-top: 50px;
  padding-bottom: 100px;
  section {
    margin-top: 100px;
  }
}
</style>