<template>
  <div class="blog-destination">
    <div class="mt-3 gx-0">
      <div
        class="position-relative overflow-hidden bg-image"
        :style="{
          'background-image': 'url(' + blogData.pageImage + ')',
        }"
      ></div>
      <h1 class="image_title_mobile mb-0 text-center">
        {{ blogData.title }}
      </h1>
      <div class="pb-5">
        <div class="container card-body px-0 pt-0 pb-5">
          <div class="row gx-0 mb-3">
            <div class="quick-link-section ps-4 position-relative">
              <div style="position: sticky; top: 65px">
                <div class="w-100 px-3 py-4 blog-category shadow-sm mt-1">
                  <div class="fw-bolder text-center">Table Of Contents</div>
                  <ul class="m-0 ps-3">
                    <li
                      v-for="content in blogData.sections"
                      :key="content.slug"
                      class="mt-2"
                      @click="customScroll(content.slug, content.title)"
                    >
                      <p
                        class="user-select-none text-decoration-none"
                        :title="content.title"
                        :class="
                          content.slug == active_link ? 'new-red fw-bold' : ''
                        "
                      >
                        {{ content.title }}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="content-section card px-3 pb-5">
              <div style="margin-top: -50px">
                <div
                  v-for="(item, index) in blogData.sections"
                  :id="item.slug"
                  :key="item.slug"
                  class="pt-5"
                  style="margin-bottom: -60px"
                >
                  <div :id="'section' + index">
                    <div class="pt-5">
                      <h2 class="section-title-inner pb-3">
                        {{ item.title }}
                      </h2>
                    </div>
                    <div :key="read_update">
                      <div
                        class="section"
                        :class="
                          tag_counts[index] > 2 && !read_status[index]
                            ? 'read-more'
                            : ''
                        "
                        v-html="item.longDescription"
                      />
                      <div
                        v-if="tag_counts[index] > 2 && !read_status[index]"
                        class="read-more-button"
                        @click="readMore(index)"
                      >
                        Read more
                      </div>
                      <div
                        v-if="tag_counts[index] > 2 && read_status[index]"
                        class="read-more-button"
                        @click="readMore(index)"
                      >
                        Read less
                      </div>
                    </div>
                    <div
                      v-if="item.button_url != null && item.button_name != null"
                      class="text-start mt-3"
                    >
                      <a
                        :href="item.button_url"
                        target="_blank"
                        class="btn btn-desti"
                      >
                        {{ item.button_name }}
                      </a>
                    </div>
                  </div>

                  <client-only>
                    <div
                      v-if="blogData != null && item.packages.length > 0"
                      class="position-relative my-5"
                    >
                      <swiper
                        :ref="'destiSwiper' + index"
                        :options="swiperOption"
                        :autoplay="{ delay: 3500, disableOnInteraction: false }"
                      >
                        <swiper-slide
                          v-for="(pkg, index_s) in item.packages"
                          :key="index_s + 'slider'"
                          class="px-2"
                        >
                          <TourCardBlog :tour-data="pkg" />
                        </swiper-slide>
                      </swiper>

                      <!-- <div
                        slot="button-prev"
                        class="swiper-button-prev text-muted shadow"
                        @click="prev(index)"
                      />
                      <div
                        slot="button-next"
                        class="swiper-button-next text-muted shadow"
                        @click="next(index)"
                      /> -->
                    </div>
                  </client-only>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TourCardBlog from "../../components/TourCardBlog.vue";
import "swiper/swiper-bundle.min.css";
export default {
  name: "BlogInnerPage",

  components: {
    TourCardBlog,
    Swiper: () => import("vue-awesome-swiper").then((m) => m.Swiper),
    SwiperSlide: () => import("vue-awesome-swiper").then((m) => m.SwiperSlide),
  },

  directives: {
    directive: () => import("vue-awesome-swiper"),
  },

  data() {
    return {
      tag_counts: [],
      read_status: [],
      read_update: 0,
      page_title: "",
      isLoading: true,
      active_link: "",

      swiperOption: {
        slidesPerView: "auto",
        spaceBetween: 0,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },

  metaInfo() {
    return {
      title: `${this.subTitle} | Safari-Trek-Beach`,
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: this.blogData.sections[this.sectionNumber].shortDescription,
        },
        {
          property: "og:title",
          content: `${this.subTitle} | Safari-Trek-Beach`,
        },
        {
          name: "twitter:title",
          content: `${this.subTitle} | Safari-Trek-Beach`,
        },
        {
          property: "og:image",
          content: this.blogData.image,
        },
        {
          property: "twitter:image",
          content: this.blogData.image,
        },
        {
          property: "og:url",
          content: "https://safaritrekbeach.org/destination/" + this.pathMatch,
        },
      ],
    };
  },

  async asyncData({ $http, params }) {
    const blogData = await $http.$get(
      `https://siteapi.safaritreksbeach.com/blog-post/${
        params.pathMatch.split("/")[0]
      }`
    );
    const pathMatch = params.pathItem;

    let isCorrectUrl = true;

    let subTitle = "";
    const pathItem = params.pathMatch.split("/");
    if (pathItem.length == 2) subTitle = pathItem[1];

    let sectionNumber = 0;

    for (let index = 0; index < blogData.sections.length; index++) {
      let title = blogData.sections[index].slug;
      if (title == subTitle) {
        sectionNumber = index;
        subTitle = blogData.sections[index].title;
        break;
      }
      if (index == blogData.sections.length - 1) {
        subTitle = blogData.title;
        if (pathItem.length == 2) {
          isCorrectUrl = false;
        }
      }
    }

    return { blogData, subTitle, pathMatch, sectionNumber, isCorrectUrl };
  },

  computed: {
    blog_id: function () {
      var id = this.$route.params.pathMatch;
      var temp_hash_arry = [];
      temp_hash_arry = id.split("/");

      if (temp_hash_arry.length == 2) {
        this.active_link = temp_hash_arry[1];
        return temp_hash_arry[0];
      } else if (temp_hash_arry.length == 1) {
        this.active_link = "";
        return id;
      }
    },
  },

  created() {
    var id = this.$route.params.pathMatch;
    var temp_hash_arry = [];
    temp_hash_arry = id.split("/");

    if (this.isCorrectUrl) {
      if (temp_hash_arry.length == 2) {
        this.active_link = temp_hash_arry[1];
      } else if (temp_hash_arry.length == 1) {
        this.active_link = "";
      }
      this.countCollect();
      this.scrollToId();
    } else {
      this.$router.push({ path: "/blog/" + this.blog_id });
    }
  },

  methods: {
    countCollect() {
      setTimeout(() => {
        if (process.browser) {
          for (let i = 0; i < this.blogData.sections.length; i++) {
            let selectionCount = document.querySelector(
              "#section" + i + " .section"
            ).childElementCount;
            this.tag_counts.push(selectionCount);
            this.read_status.push(false);
          }
        }
      }, 10);
    },

    customScroll(hash, title) {
      this.active_link = hash;
      this.page_title = title;
      history.pushState(
        {},
        null,
        "/blog/" + this.blog_id + "/" + encodeURIComponent(hash)
      );
      this.$scrollTo(document.getElementById(hash), 0);
      document.title = title + " | Safari-Trek-Beach";
    },

    scrollToId() {
      setTimeout(() => {
        if (this.active_link != "") {
          if (process.browser) {
            this.$scrollTo(document.getElementById(this.active_link), 0);
          }
        }
      }, 100);
    },

    readMore(index) {
      this.read_status[index] = !this.read_status[index];
      this.read_status.slice(0, this.read_status.length);
      this.read_update++;
    },

    prev(i) {
      console.log(this.$refs);
      this.$refs["destiSwiper" + i].$swiper.slidePrev();
    },

    next(i) {
      this.$refs["destiSwiper" + i].$swiper.slideNext();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/blog_destination.scss";
.blog-category a {
  color: black;
}

.swiper-button-prev,
.swiper-button-next {
  top: 50%;
  font-size: 13px;
  border: 1px solid #e0e0e0;
  background: white;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  &:after {
    font-size: 13px;
    font-weight: 600;
  }
}
.swiper-button-prev {
  left: -10px;
}
.swiper-button-next {
  right: -10px;
}

.swiper-slide {
  width: 30%;
  @media (max-width: 991px) {
    width: 40%;
  }
  @media (max-width: 480px) {
    width: 80%;
  }
}

.swiper-button-disabled {
  display: none;
}
</style>
