<template>
  <div class="m-3 position-relative" title="Popular Destinations">
    <div class="swiper-container">
      <client-only placeholder="loading...">
        <swiper ref="destiSwiper" :options="swiperOption">
          <swiper-slide
            v-for="(item, index) in destination_list"
            :key="index + 'slider'"
            class="px-1 px-md-2"
          >
            <a
              :href="item.input_id"
              :title="striphtml(item.title)"
              type="button"
              class="
                w-100
                d-flex
                align-items-center
                justify-content-center
                text-decoration-none
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
      </client-only>
    </div>
    <div slot="button-prev" class="swiper-button-prev" @click="prev()" />
    <div slot="button-next" class="swiper-button-next" @click="next()" />
  </div>
</template>
<script>
import "swiper/swiper-bundle.min.css";

export default {
  components: {
    Swiper: () => import("vue-awesome-swiper").then((m) => m.Swiper),
    SwiperSlide: () => import("vue-awesome-swiper").then((m) => m.SwiperSlide),
  },
  directives: {
    directive: () => import("vue-awesome-swiper"),
  },
  props: {
    destination: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      destination_list: [],
      destination_normal: [
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
          title: "Kilimanjaro<br />Zanzibar",
          input_id: "kilimanjaro-and-zanzibar",
        },
        {
          title: "Safari &<br/> Kilimanjaro",
          input_id: "tanzania-safari-and-kilimanjaro",
        },
        {
          title: "Safari, Kili<br>& Zanzibar",
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
      destination_kili: [
        { title: "Machame<br/>Route", input_id: "machame-route" },
        { title: "Marangu<br/>Route", input_id: "marangu-route" },
        { title: "Lemosho<br/>Route", input_id: "lemosho-route" },
        { title: "Rongai<br/>Route", input_id: "rongai-route" },
        { title: "Shira<br/>Route", input_id: "shira-route" },
        { title: "Western<br/>Route", input_id: "western-route-kilimanjaro" },
        { title: "Mweka<br/>Route", input_id: "mweka-route" },
        { title: "Northern<br/>Route", input_id: "northern-route-kilimanjaro" },
      ],
      destination_zanzibar: [
        { title: "Nungwi<br/>Beach", input_id: "nungwi-island" },
        { title: "Stone<br/>Town", input_id: "stone-town" },
        { title: "Kendwa<br/>Beach", input_id: "kendwa-beach" },
        { title: "Matemwe<br/>Beach", input_id: "matemwe-beach" },
        { title: "Paje<br/>Beach", input_id: "paje-beach" },
        { title: "Kiwengwa<br/>Beach", input_id: "kiwengwa-beach" },
        { title: "Kizimkazi<br/>Beach", input_id: "kizimkazi-beach" },
        { title: "Pingwe<br/>Beach", input_id: "pingwe-beach" },
        { title: "Jambiani<br/>Beach", input_id: "jambian-beach" },
        { title: "Pwani<br/>Mchangani", input_id: "pwani-mchangani" },
        { title: "Uroa<br/>Beach", input_id: "uroa-beach" },
        { title: "Prison<br/>Island", input_id: "prison-island" },
        { title: "Jozani<br/>Forest", input_id: "jozani-forest" },
        { title: "Spice<br/>Tour", input_id: "spice-tours" },
        { title: "Dhow<br/>Tour", input_id: "dhow-tour" },
        { title: "Dolphin<br/>Tour", input_id: "dolphin-tours" },
        { title: "Snorkelling<br/>Tour", input_id: "snorkelling" },
      ],

      swiperOption: {
        slidesPerView: 2,
        spaceBetween: 0,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          1600: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
          1240: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
          800: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
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

  watch: {
    destination: function () {
      if (
        this.destination == "Kilimanjaro" ||
        this.destination == "Mount Kilimanjaro"
      ) {
        this.destination_list = this.destination_kili;
      } else if (
        this.destination == "Zanzibar" ||
        this.destination == "Zanzibar Island"
      ) {
        this.destination_list = this.destination_zanzibar;
      } else {
        this.destination_list = this.destination_normal;
      }
    },
  },

  created() {
    if (
      this.destination == "Kilimanjaro" ||
      this.destination == "Mount Kilimanjaro"
    ) {
      this.destination_list = this.destination_kili;
    } else if (
      this.destination == "Zanzibar" ||
      this.destination == "Zanzibar Island"
    ) {
      this.destination_list = this.destination_zanzibar;
    } else {
      this.destination_list = this.destination_normal;
    }
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
    },
    prev() {
      this.$refs.destiSwiper.$swiper.slidePrev();
    },
    next() {
      this.$refs.destiSwiper.$swiper.slideNext();
    },
    search_destination(input_id) {
      if (
        this.destination == "Kilimanjaro" ||
        this.destination == "Mount Kilimanjaro"
      ) {
        this.destination_list = this.destination_kili;
      } else if (
        this.destination == "Zanzibar" ||
        this.destination == "Zanzibar Island"
      ) {
        this.destination_list = this.destination_zanzibar;
      } else {
        this.destination_list = this.destination_normal;
      }

      this.$emit("click_destination", input_id);
    },
  },
};
</script>

<style lang="scss" scoped>
[type="button"] {
  color: black;
  background-color: white;
  border: 1px solid #b8b8bb;
  border-radius: 12px;
  height: 100%;
  min-height: 40px;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 12px 16px;
  position: relative;
  transition: background-color 0.2s, color 0.2s;

  @media (max-width: 480px) {
    background-color: transparent;
  }

  & > span {
    height: 100%;
    min-height: 45px;
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
      min-height: 38px;
      max-height: calc(var(--lh) * var(--max-lines));
      overflow: hidden;
      padding-right: 5px;
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
  left: -25px;
}
.swiper-button-next {
  right: -25px;
}
</style>
<!-- @click="search_destination(item.input_id)" -->
