<template>
  <div class="bg-white pt-3 pb-5" title="Popular Destinations & Activities">
    <div class="container">
      <header class="section-header mt-3">
        <h1>Destinations & Activities</h1>
      </header>
      <client-only>
        <div class="mobile position-relative px-3 mt-4">
          <swiper ref="destiSwiper" :options="swiperOption">
            <swiper-slide
              v-for="(item, index) in destination_list"
              :key="index + 'slider'"
              class="px-2"
            >
              <a
                :href="'/our-tours/' + item.input_id"
                :title="striphtml(item.title)"
                target="_blank"
                type="button"
                class="
                  text-decoration-none
                  w-100
                  d-flex
                  align-items-center
                  justify-content-center
                "
              >
                <span
                  class="
                    d-flex
                    justify-content-between
                    text-start
                    align-items-start
                  "
                >
                  <span class="title" v-html="item.title" />
                  <span>
                    <svg
                      class="icon"
                      viewBox="-83.5 0 500 500"
                      style="width: 22px"
                    >
                      <g fill-rule="evenodd">
                        <path
                          d="M166.5,482 C 245,396 328,273 333,181 A166.5,166.5 0 0 0 0,181 C 5,273 88,396 166.5,482 Z M 226,178 A59.5,59.5 0 0 1 107,178 A59.5,59.5 0 0 1 226,178 Z"
                        />
                      </g>
                    </svg>
                  </span>
                </span>
              </a>
            </swiper-slide>
          </swiper>

          <div slot="button-prev" class="swiper-button-prev" @click="prev" />
          <div slot="button-next" class="swiper-button-next" @click="next" />
        </div>
      </client-only>

      <div class="row destktop">
        <div
          v-for="(item, index) in destination_list"
          :key="index"
          class="col-lg-2 col-md-3 col-sm-6 mt-3 g-0 px-2"
        >
          <!-- <router-link :to="{ path: '/our-tours/' + item.input_id }" class="nav-link">
                        Overview
                    </router-link> -->
          <client-only>
            <a
              :href="'/our-tours/' + item.input_id"
              :title="striphtml(item.title)"
              target="_blank"
              type="button"
              class="
                text-decoration-none
                w-100
                d-flex
                align-items-center
                justify-content-center
              "
            >
              <span
                class="
                  d-flex
                  justify-content-between
                  text-start
                  align-items-start
                "
              >
                <span class="title" v-html="item.title" />
                <span>
                  <svg
                    class="icon"
                    viewBox="-83.5 0 500 500"
                    style="width: 22px"
                  >
                    <g fill-rule="evenodd">
                      <path
                        d="M166.5,482 C 245,396 328,273 333,181 A166.5,166.5 0 0 0 0,181 C 5,273 88,396 166.5,482 Z M 226,178 A59.5,59.5 0 0 1 107,178 A59.5,59.5 0 0 1 226,178 Z"
                      />
                    </g>
                  </svg>
                </span>
              </span>
            </a>
          </client-only>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/swiper-bundle.min.css";
export default {
  components: {
    Swiper: () => import("vue-awesome-swiper").then((m) => m.Swiper),
    SwiperSlide: () => import("vue-awesome-swiper").then((m) => m.SwiperSlide),
    // StarRating: () => import("vue-star-rating").then((m) => m.StarRating),
    // Swiper,
    // SwiperSlide,
  },
  directives: {
    // swiper: directive,
    directive: () => import("vue-awesome-swiper"),
  },
  data() {
    return {
      destination_list: [
        {
          title: "Tanzania<br/> Safari",
          input_id: "tanzania-safari",
        },
        {
          title: " Mt. Kilimanjaro ",
          input_id: "kilimanjaro",
        },
        {
          title: "Zanzibar",
          input_id: "zanzibar",
        },
        {
          title: "Safari &<br/> Zanzibar ",
          input_id: "tanzania-safari-and-zanzibar",
        },
        {
          title: "Kilimanjaro &<br/> Zanzibar",
          input_id: "kilimanjaro-and-zanzibar",
        },
        {
          title: "Safari &<br/> Kilimanjaro",
          input_id: "tanzania-safari-and-kilimanjaro",
        },
        {
          title: "Safari, Kilimanjaro & Zanzibar",
          input_id: "tanzania-safari-kilimanjaro-and-zanzibar",
        },
        {
          title: "Serengeti<br/> National Park",
          input_id: "serengeti-national-park",
        },
        {
          title: "Ngorongoro<br/> Crater",
          input_id: "ngorongoro-crater",
        },
        {
          title: "Tarangire<br/> National Park",
          input_id: "tarangire-national-park",
        },
        {
          title: "Ruaha<br/> National Park",
          input_id: "ruaha-national-park",
        },
        {
          title: "Selous<br/> National Park",
          input_id: "selous-game-reserve",
        },
      ],
      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 0,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          767: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          540: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },

  methods: {
    striphtml(value) {
      text = "";

      if (process.browser) {
        var div = document.createElement("div");
        div.innerHTML = value;
        var text = div.textContent || div.innerText || "";
      }

      return text;
      // return "";
    },
    prev() {
      this.$refs.destiSwiper.$swiper.slidePrev();
    },
    next() {
      this.$refs.destiSwiper.$swiper.slideNext();
    },
  },
};
</script>

<style lang="scss" scoped>
[type="button"] {
  color: black;
  background-color: transparent;
  border: 1px solid #b8b8bb;
  border-radius: 12px;
  height: 100%;
  min-height: 48px;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 12px 16px;
  position: relative;
  transition: background-color 0.2s, color 0.2s;

  & > span {
    height: 100%;
    min-height: 45px;
    max-height: 45px;
    width: 100%;
    align-items: stretch;
    .title {
      font-size: 14px;
      font-weight: 500;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      --max-lines: 2;
      min-height: 45px;
      max-height: calc(var(--lh) * var(--max-lines));
      overflow: hidden;
      padding-right: 1rem;
    }
    svg {
      font-size: 24px;
      fill: currentColor;
    }
  }
}
[type="button"]:hover {
  color: white;
  background: black;
}
[type="button"] {
  min-height: 60px;
}

.mobile {
  display: none;
}
.destktop {
  display: flex;
}

@media (max-width: 767px) {
  .mobile {
    display: block;
  }
  .destktop {
    display: none;
  }
}
.swiper-button-prev,
.swiper-button-next {
  top: 50%;
  // transform: translateY(-50%);
  color: #3d3d3f;
  font-size: 13px;
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
</style>
