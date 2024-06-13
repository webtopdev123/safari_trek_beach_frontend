<template>
  <div>
    <section class="main-banner bg-fixed position-relative w-100">
      <transition :name="fade ? 'fade' : ''">
        <picture :key="randIndex">
          <source media="(min-width:1025px)" :srcset="desktop[randIndex]" />
          <source media="(min-width:500px)" :srcset="tab[randIndex]" />
          <img
            :src="desktop[randIndex]"
            alt="Home banner"
            class="w-100 h-100 position-absolute"
          />
        </picture>
      </transition>
      <div class="wrapper">
        <h1 class="text-center mb-0">Choose Best Africa Safaris</h1>
        <h4
          id="subtitle"
          ref="subtitle"
          class="text-light text-center fw-normal my-1"
        >
          Offered by Top Tour Operators
        </h4>
        <!-- Search filter  -->
        <div class="mt-4">
          <div
            class="
              d-inline-flex
              align-items-center
              justify-content-center
              mb-2
              bg-white
              px-3
              py-2
              group-filter
            "
          >
            <label><strong>Filter by: </strong></label>

            <div class="form-check ms-3 form-check-inline">
              <input
                id="groupTours"
                v-model="group_tour"
                class="form-check-input"
                type="checkbox"
              />
              <label class="form-check-label" for="groupTours">
                Group tours
              </label>
            </div>
            <div class="form-check ms-1 me-0 form-check-inline">
              <input
                id="privateTours"
                v-model="private_tour"
                class="form-check-input"
                type="checkbox"
              />
              <label class="form-check-label" for="privateTours">
                Private tours
              </label>
            </div>
          </div>
          <form class="search-form" autocomplete="off" method="GET">
            <div class="row gx-0">
              <div
                v-click-outside-dropdown="closeWhereToDropDown"
                class="
                  col-md-4 col-xs-12
                  mobile-filter
                  position-relative
                  onepixel-padding
                "
              >
                <div
                  class="
                    h-100
                    align-items-center
                    d-flex
                    justify-content-between
                    px-3
                    bg-white
                  "
                >
                  <svg
                    class="text-danger"
                    style="width: 25px"
                    viewBox="0 0 19.9 19.7"
                  >
                    <g style="stroke-width: 2px" fill="none" stroke="#f80c35">
                      <path stroke-linecap="square" d="M18.5 18.3l-5.4-5.4" />
                      <circle cx="8" cy="8" r="7" />
                    </g>
                  </svg>

                  <div class="w-100 px-2" @click="showWhereToDropdown(true)">
                    <input
                      ref="whereTo"
                      v-model="where_to_search"
                      placeholder="Where to?"
                      type="text"
                      class="w-100"
                      @focus.once="getActivity"
                      @click="scrollMobile"
                    />
                  </div>
                  <span
                    v-if="
                      where_to_search != '' && visible_whereto_dropdown == false
                    "
                    class="fa fa-times-circle-o"
                    @click="setInitWhereTo"
                  />
                  <div
                    v-else-if="isActivity"
                    class="spinner-border"
                    style="min-width: 25px; min-height: 25px"
                    role="status"
                    aria-hidden="true"
                  />
                  <span v-else class="fa fa-search invisible" />
                </div>
                <div
                  v-if="visible_whereto_dropdown == true && search_result != ''"
                  class="
                    shadow
                    where_to_dropdown
                    left-0
                    w-100
                    bg-white
                    mt-2
                    destination-list
                  "
                >
                  <div v-for="(item, index) in search_result" :key="index">
                    <div
                      class="py-1 px-3 border-1 text-start"
                      @click="setCurrentWhereTo(item.name)"
                    >
                      <div class="p-0 m-0">
                        <strong>{{ item.name }}</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-8 col-xs-12">
                <div class="row gx-0 h-100">
                  <div
                    class="col-md-4 col-xs-12 mobile-filter onepixel-padding"
                  >
                    <div
                      class="
                        w-100
                        h-100
                        align-items-center
                        d-flex
                        justify-content-between
                        px-3
                        bg-white
                      "
                    >
                      <span>
                        <svg
                          viewBox="0 0 500 500"
                          style="max-width: 25px; fill: #f80c35; width: 25px"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M19,107a35,35 0 01 35-35h36v-27a44,44 0 01 44-44h19a44,44 0 01 44,44v27h106v-27a44,44 0 01 44-44h19a44,44 0 01 44,44v27h36a35,35 0 01 35,35v357a35,35 0 01-35,35h-392a35,35 0 01-35-35zM125.5,45a8.5,8.5 0 01 8.5-8.5h18.5a8.5,8.5 0 01 8.5,8.5v81a8.5,8.5 0 01-8.5,8.5h-18.5a8.5,8.5 0 01-8.5-8.5zM339,45a8.5,8.5 0 01 8.5-8.5h18.5a8.5,8.5 0 01 8.5,8.5v81a8.5,8.5 0 01-8.5,8.5h-18.5a8.5,8.5 0 01-8.5-8.5zM54,179h392v285h-392z"
                          />

                          <rect width="100" height="80" x="80" y="220" />
                          <rect width="100" height="80" x="200" y="220" />
                          <rect width="100" height="80" x="320" y="220" />

                          <rect width="100" height="80" x="80" y="325" />
                          <rect width="100" height="80" x="200" y="325" />
                          <rect width="100" height="80" x="320" y="325" />
                        </svg>
                      </span>

                      <div class="w-100 px-2">
                        <client-only>
                          <datepicker
                            v-model="start_date"
                            :placeholder="'When?'"
                            :highlighted="highlighted"
                          >
                            <div
                              slot="beforeCalendarHeader"
                              class="calender-header text-end me-2 my-2"
                            >
                              <a class="btn btn-danger" @click="selectToday">
                                Today
                              </a>
                            </div>
                          </datepicker>
                        </client-only>
                      </div>
                      <span
                        v-if="start_date != '' && start_date != null"
                        class="fa fa-times-circle-o"
                        @click="initStartDate"
                      />
                      <span v-else class="fa fa-times-circle-o invisible" />
                    </div>
                  </div>
                  <div
                    v-click-outside-dropdown="closeTravelerDropdown"
                    class="
                      col-md-4 col-xs-12
                      mobile-filter
                      position-relative
                      onepixel-padding
                    "
                  >
                    <div
                      class="
                        w-100
                        h-100
                        align-items-center
                        d-flex
                        justify-content-between
                        px-3
                        bg-white
                      "
                      @click="showTravelerDropdown"
                    >
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 24 24"
                        style="fill: #f80c35"
                      >
                        <path
                          d="M10.644 17.08c2.866-.662 4.539-1.241 3.246-3.682-3.932-7.427-1.042-11.398 3.111-11.398 4.235 0 7.054 4.124 3.11 11.398-1.332 2.455.437 3.034 3.242 3.682 2.483.574 2.647 1.787 2.647 3.889v1.031h-18c0-2.745-.22-4.258 2.644-4.92zm-12.644 4.92h7.809c-.035-8.177 3.436-5.313 3.436-11.127 0-2.511-1.639-3.873-3.748-3.873-3.115 0-5.282 2.979-2.333 8.549.969 1.83-1.031 2.265-3.181 2.761-1.862.43-1.983 1.34-1.983 2.917v.773z"
                        />
                      </svg>
                      <div class="w-100 px-2">
                        <input
                          id="traveler_input"
                          v-model="traveler_number"
                          type="text"
                          placeholder="Travelers"
                          class="w-100"
                          readonly
                        />
                      </div>
                      <span
                        v-if="traveler_number != ''"
                        class="fa fa-times-circle-o"
                        @click="setTravelerInit"
                      />
                      <span v-else class="fa fa-times-circle-o invisible" />
                    </div>
                    <div
                      v-if="visible_traveler_dropdown"
                      class="shadow traveler-dropdown left-0 bg-white mt-2"
                    >
                      <div class="position-relative">
                        <h5 class="p-2 my-2 text-center">
                          <strong>Select Traveler</strong>
                        </h5>
                        <button
                          type="button"
                          class="
                            btn btn-white btn-sm btn-floating
                            text-danger
                            float-right
                            position-absolute
                          "
                          style="top: 5px; right: 10px"
                          @click="closeTravelerDropdown"
                        >
                          <span style="font-size: 20px">✕</span>
                        </button>
                        <div
                          class="
                            py-2
                            px-3
                            mt-2
                            border-1
                            text-start
                            d-flex
                            justify-content-between
                          "
                        >
                          <div><strong>Adult </strong>(16+ years):</div>
                          <div>
                            <select
                              v-model="adults_number"
                              class="form-select form-select-sm"
                              aria-label="Select Adult Number"
                            >
                              <option value="0">Adult Number</option>
                              <option value="1">1 Adult</option>
                              <option
                                v-for="(item, index) in 30"
                                :key="index"
                                :value="index + 2"
                              >
                                {{ index + 2 }} Adults
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div
                        class="
                          py-2
                          px-3
                          border-1
                          text-start
                          d-flex
                          justify-content-between
                        "
                      >
                        <div><strong>Child </strong>(0~15 years):</div>
                        <div>
                          <select
                            v-model="children_number"
                            class="form-select form-select-sm"
                            aria-label="Select Child Number"
                            placeholder="Select"
                          >
                            <option value="0">Child Number</option>
                            <option value="1">1 Child</option>
                            <option
                              v-for="(item, index) in 10"
                              :key="index"
                              :value="index + 2"
                            >
                              {{ index + 2 }} Children
                            </option>
                          </select>
                        </div>
                      </div>
                      <div class="text-start">
                        <button
                          class="btn btn-danger btn-rounded mx-3 my-3"
                          @click="setTravelerInfo"
                        >
                          Done
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-4 col-xs-12 ps-2 mobile-filter">
                    <button
                      type="button"
                      class="btn btn-danger w-100 h-100 fw-bold"
                      @click="searchButton"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>

    <DestinationButton />
    <PopularTour />
    <WhyUs />
    <TopDestination />
    <ReviewTestimonial />
    <BlogSection />
    <HowItWorks />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import Datepicker from "vuejs-datepicker";
import WhyUs from "../components/home/WhyUs";
import DestinationButton from "../components/home/DestinationButton";
import PopularTour from "../components/home/PopularTour";
import TopDestination from "../components/home/TopDestination";
import BlogSection from "../components/home/BlogSection";
import ReviewTestimonial from "../components/home/ReviewTestimonial";
import HowItWorks from "../components/home/HowItWorks";
// import Datepicker from "vuejs-datepicker";
export default {
  components: {
    // Datepicker,
    [process.browser && "Datepicker"]: () => import("vuejs-datepicker"),
    BlogSection,
    PopularTour,
    TopDestination,
    ReviewTestimonial,
    WhyUs,
    DestinationButton,
    HowItWorks,
  },

  jsonld() {
    return {
      "@context": "https://schema.org",
      "@type": "Advertising",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://dev.safaritrekbeach.org/",
      },
      headline: "Choose Best African Safaris - Offered by Top Tour Operators ",
      description:
        " Safari Trek Beach is the biggest market place for Tanzania tour packages. We help travellers find the best Tour Operators with the tour packages of their choice, to suit their budget and standard. We are the experts when it involves Tours and Holidays in Tanzania. Safari Trek Beach enables you to compare different tour operators on different categories such as Luxury, Lodge, Camping safaris or Mountain Climbing tours as well as Beach Holidays. ",
      image:
        "https://gallery.safaritrekbeach.com/images/gallery/tanzania/tour/SERENGETI_NATIONAL_PARK_8.jpg",
      author: {
        "@type": "Person",
        name: "Vue Developer",
      },
      datePublished: "2022-09-31",
      dateModified: "2022-10-05",
      publisher: {
        "@type": "Organization",
        name: "Safari Trek Beach",
        logo: {
          "@type": "ImageObject",
          url: "http://safaritrekbeach.com/images/logo.png",
        },
      },
    };
  },

  directives: {
    "click-outside-dropdown": {
      bind: function (el, binding) {
        const ourClickEventHandler = (event) => {
          if (!el.contains(event.target) && el !== event.target) {
            binding.value(event); // before binding it
          }
        };
        el.__vueClickEventHandler__ = ourClickEventHandler;
        document.addEventListener("click", ourClickEventHandler);
      },
      unbind: function (el) {
        document.removeEventListener("click", el.__vueClickEventHandler__);
      },
    },
  },

  data() {
    return {
      desktop: [
        require("@/assets/images/home/desktop/2.jpg"),
        require("@/assets/images/home/desktop/3.jpg"),
        require("@/assets/images/home/desktop/5.jpg"),
        require("@/assets/images/home/desktop/8.jpg"),
        require("@/assets/images/home/desktop/10.jpg"),
        require("@/assets/images/home/desktop/11.jpg"),
        require("@/assets/images/home/desktop/13.jpg"),
        require("@/assets/images/home/desktop/25.jpg"),
        require("@/assets/images/home/desktop/34.jpg"),
        require("@/assets/images/home/desktop/44.jpg"),
        require("@/assets/images/home/desktop/46.jpg"),
        require("@/assets/images/home/desktop/77.jpg"),
        require("@/assets/images/home/desktop/81.jpg"),
        require("@/assets/images/home/desktop/82.jpg"),
        require("@/assets/images/home/desktop/101.jpg"),
        require("@/assets/images/home/desktop/111.jpg"),
        require("@/assets/images/home/desktop/116.jpg"),
        require("@/assets/images/home/desktop/123.jpg"),
        require("@/assets/images/home/desktop/128.jpg"),
        require("@/assets/images/home/desktop/129.jpg"),
        require("@/assets/images/home/desktop/195.jpg"),
      ],
      tab: [
        require("@/assets/images/home/tab/2.jpg"),
        require("@/assets/images/home/tab/3.jpg"),
        require("@/assets/images/home/tab/5.jpg"),
        require("@/assets/images/home/tab/8.jpg"),
        require("@/assets/images/home/tab/10.jpg"),
        require("@/assets/images/home/tab/11.jpg"),
        require("@/assets/images/home/tab/13.jpg"),
        require("@/assets/images/home/tab/25.jpg"),
        require("@/assets/images/home/tab/34.jpg"),
        require("@/assets/images/home/tab/44.jpg"),
        require("@/assets/images/home/tab/46.jpg"),
        require("@/assets/images/home/tab/77.jpg"),
        require("@/assets/images/home/tab/81.jpg"),
        require("@/assets/images/home/tab/82.jpg"),
        require("@/assets/images/home/tab/101.jpg"),
        require("@/assets/images/home/tab/111.jpg"),
        require("@/assets/images/home/tab/116.jpg"),
        require("@/assets/images/home/tab/123.jpg"),
        require("@/assets/images/home/tab/128.jpg"),
        require("@/assets/images/home/tab/129.jpg"),
        require("@/assets/images/home/tab/195.jpg"),
      ],
      mobile: [
        require("@/assets/images/home/mobile/2.jpg"),
        require("@/assets/images/home/mobile/3.jpg"),
        require("@/assets/images/home/mobile/5.jpg"),
        require("@/assets/images/home/mobile/5.jpg"),
        require("@/assets/images/home/mobile/8.jpg"),
        require("@/assets/images/home/mobile/13.jpg"),
        require("@/assets/images/home/mobile/13.jpg"),
        require("@/assets/images/home/mobile/31.jpg"),
        require("@/assets/images/home/mobile/34.jpg"),
        require("@/assets/images/home/mobile/40.jpg"),
        require("@/assets/images/home/mobile/44.jpg"),
        require("@/assets/images/home/mobile/46.jpg"),
        require("@/assets/images/home/mobile/73.jpg"),
        require("@/assets/images/home/mobile/77.jpg"),
        require("@/assets/images/home/mobile/81.jpg"),
        require("@/assets/images/home/mobile/82.jpg"),
        require("@/assets/images/home/mobile/101.jpg"),
        require("@/assets/images/home/mobile/111b.jpg"),
        require("@/assets/images/home/mobile/116.jpg"),
        require("@/assets/images/home/mobile/128.jpg"),
        require("@/assets/images/home/mobile/195.jpg"),
      ],
      fade: false,
      randIndex: 0,
      visible_whereto_dropdown: false,
      visible_traveler_dropdown: false,
      adults_number: 2,
      children_number: 0,
      traveler_number: "",
      start_date: new Date(),
      selectedAge: [],
      highlighted: {
        dates: [new Date()],
      },
      where_to_search: "",
      search_result: [],
      datepicker_focus: false,
      group_tour: false,
      private_tour: false,
      isActivity: false,
    };
  },

  metaInfo() {
    return {
      title: `Choose Best Africa Safaris | Safari Trek Beach`,
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
          content: "Choose Best African Safaris - Safari Trek Beach",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            " Safari Trek Beach is the biggest market place for Tanzania tour packages. We help travellers find the best Tour Operators with the tour packages of their choice, to suit their budget and standard. We are the experts when it involves Tours and Holidays in Tanzania. Safari Trek Beach enables you to compare different tour operators on different categories such as Luxury, Lodge, Camping safaris or Mountain Climbing tours as well as Beach Holidays. ",
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
            " Safari Trek Beach is the biggest market place for Tanzania tour packages. We help travellers find the best Tour Operators with the tour packages of their choice, to suit their budget and standard. We are the experts when it involves Tours and Holidays in Tanzania. Safari Trek Beach enables you to compare different tour operators on different categories such as Luxury, Lodge, Camping safaris or Mountain Climbing tours as well as Beach Holidays. ",
        },
        {
          hid: "og:url",
          name: "og:url",
          content: "https://dev.safaritrekbeach.org",
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
          content: "Choose Best African Safaris - Safari Trek Beach",
        },

        {
          hid: "og:title",
          name: "og:title",
          content: "Choose Best African Safaris - Safari Trek Beach",
        },
        {
          hid: "og:description",
          name: "og:description",
          content: "Choose Best African Safaris - Safari Trek Beach",
        },
      ],
    };
  },

  computed: {
    ...mapGetters({
      where_to_list_state: "tourController/tourActivity",
      where_to_search_state: "tourController/where_to_search",
      start_date_state: "tourController/start_date",
      adults_number_state: "tourController/adults_number",
      children_number_state: "tourController/children_number",
      traveler_number_state: "tourController/traveler_number",
    }),
  },

  watch: {
    where_to_search: function () {
      if (this.where_to_search && this.where_to_list != undefined) {
        this.search_result = this.where_to_list.filter((item) => {
          return this.where_to_search
            .toLowerCase()
            .split(" ")
            .every((v) => item.name.toLowerCase().includes(v));
        });

        var start_filtered = this.search_result.filter((p) =>
          p.name.toLowerCase().startsWith(this.where_to_search.toLowerCase())
        );
        var not_start_filtered = this.search_result.filter(
          (p) =>
            !p.name.toLowerCase().startsWith(this.where_to_search.toLowerCase())
        );

        Array.prototype.push.apply(start_filtered, not_start_filtered);

        this.search_result = start_filtered;
      } else {
        this.search_result = this.where_to_list;
      }
    },
  },

  created() {
    this.where_to_search = this.where_to_search_state;
    this.traveler_number = this.traveler_number_state;
    this.start_date = this.start_date_state;
    this.adults_number = this.adults_number_state;
    this.children_number = this.children_number_state;
    this.traveler_number_calc();
    if (process.client) {
      setTimeout(() => this.changeBanner(), 5000);
    }
  },

  methods: {
    changeBanner() {
      this.fade = true;
      var time = this;
      setInterval(function () {
        time.randIndex = Math.floor(Math.random() * 21);
      }, 5000);
    },
    getTourActivity() {
      this.$store.dispatch("tourController/getTourActivity").then(() => {
        let first_activity = [
          {
            name: "Serengeti National Park",
            inputId: "serengeti-national-park",
          },
          {
            name: "Mount Kilimanjaro",
            inputId: "mount-kilimanjaro",
          },
          {
            name: "Zanzibar",
            inputId: "zanzibar",
          },
          {
            name: "Ngorongoro Crater",
            inputId: "ngorongoro-crater",
          },
          {
            name: "Tarangire National Park",
            inputId: "tarangire-national-park",
          },
          {
            name: "Ruaha National Park",
            inputId: "ruaha-national-park",
          },
        ];

        let ar = this.where_to_list_state;

        for (var i = 0; i < ar.length; i++) {
          if (
            ar[i].name == "Serengeti National Park" ||
            ar[i].name == "Mount Kilimanjaro" ||
            ar[i].name == "Ngorongoro Crater" ||
            ar[i].name == "Tarangire National Park" ||
            ar[i].name == "Zanzibar" ||
            ar[i].name == "Ruaha National Park"
          ) {
            ar.splice(i, 1);
          }
        }
        this.where_to_list = first_activity.concat(ar);
        this.search_result = this.where_to_list;
        this.isActivity = false;
      });
    },

    traveler_number_calc() {
      if (this.adults_number == null || this.adults_number == undefined)
        this.adults_number = 2;
      if (this.children_number == null || this.children_number == undefined)
        this.children_number = 0;
      let traveler =
        parseInt(this.adults_number) + parseInt(this.children_number);
      if (traveler == 1) this.traveler_number = traveler + " Traveler";
      else if (traveler == 0) this.traveler_number = "";
      else this.traveler_number = traveler + " Travelers";
    },

    todo: function () {
      this.intervalid1 = setInterval(() => {
        this.changes = (Math.random() * 100).toFixed(2) + "%";
        console.log(this.changes);
      }, 3000);
    },

    closeWhereToDropDown() {
      this.visible_whereto_dropdown = false;
    },
    showWhereToDropdown(visible_flag) {
      this.visible_whereto_dropdown = visible_flag;
    },
    setCurrentWhereTo(value) {
      this.where_to_search = value;
      this.visible_whereto_dropdown = false;
    },
    setInitWhereTo() {
      this.where_to_search = "";
    },
    showTravelerDropdown() {
      var current_flag = this.visible_traveler_dropdown;
      this.visible_traveler_dropdown = !current_flag;
    },
    closeTravelerDropdown: function () {
      this.visible_traveler_dropdown = false;
    },
    setTravelerInfo(event) {
      event.preventDefault();
      let traveler =
        parseInt(this.adults_number) + parseInt(this.children_number);
      if (traveler == 1) this.traveler_number = traveler + " Traveler";
      else this.traveler_number = traveler + " Travelers";
      this.closeTravelerDropdown();
    },
    setTravelerInit() {
      this.traveler_number = "";
      this.adults_number = 0;
      this.children_number = 0;
    },
    initStartDate() {
      this.start_date = "";
    },

    pickerOpen() {
      this.datepicker_focus = true;
    },

    pickerClose() {
      this.datepicker_focus = false;
    },

    isMobile() {
      /* eslint-disable */

      let check = false;
      (function (a) {
        if (
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            a
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            a.substr(0, 4)
          )
        )
          check = true;
      })(navigator.userAgent || navigator.vendor || window.opera);
      return check;
    },
    scrollMobile() {
      if (this.isMobile()) {
        this.$scrollTo(document.getElementById("subtitle"), 0);
      }
    },

    getActivity() {
      this.isActivity = true;
      this.getTourActivity();
    },

    selectToday() {
      var date = new Date();
      this.start_date = date;
      document.getElementsByClassName(
        "vdp-datepicker__calendar"
      )[0].style.display = "none";
      document.getElementsByClassName(
        "vdp-datepicker__calendar"
      )[1].style.display = "none";
      document.getElementsByClassName(
        "vdp-datepicker__calendar"
      )[2].style.display = "none";
    },

    searchButton() {
      let searchData = {};
      searchData = {
        where_to_search: this.where_to_search,
        start_date: this.start_date,
        adults_number: this.adults_number,
        children_number: this.children_number,
        traveler_number: this.traveler_number,
      };

      this.$store.dispatch("tourController/setSearchData", searchData);

      let url_query = {
        destination: this.where_to_search,
      };

      if (url_query["destination"] != "") {
        if (this.isActivity == false) {
          // url_query["destination"] = destination_item.inputId;
        } else {
          let destination_item = this.where_to_list.find(function (el) {
            return el.name == url_query["destination"];
          });

          if (destination_item != undefined) {
            url_query["destination"] = destination_item.inputId;
          } else {
            url_query["destination"] = url_query["destination"]
              .split(" ")
              .join("_");
            url_query["destination"] = url_query["destination"]
              .split("&")
              .join("~");
          }
        }

        if (this.private_tour != this.group_tour) {
          var single = this.private_tour ? "private" : "group";

          this.$router.push({
            path: "/our-tours/",
            query: { destination: url_query["destination"], single: single },
          });
        } else {
          this.$router.push({
            path: "/our-tours/",
            query: { destination: url_query["destination"] },
          });
        }
      } else {
        if (this.private_tour != this.group_tour) {
          var issingle = this.private_tour ? "private" : "group";

          this.$router.push({
            path: "/our-tours/",
            query: { single: issingle },
          });
        } else {
          this.$router.push("/our-tours/");
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
.main-banner {
  height: 88vh;
  img {
    object-fit: cover;
    object-position: 50% 50%;
  }

  @media (max-width: 768px) {
    height: auto;
  }
  &::after {
    content: "";
    background-color: rgba(0, 0, 0, 0.1);
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    position: absolute;
    z-index: 1;
  }
  .wrapper {
    width: 55.625rem;
    max-width: 100%;
    position: relative;
    margin: 0 auto;
    padding: 1.875rem 0.625rem;
    left: 0;
    right: 0;
    z-index: 6;
    text-align: center;
    @media (min-width: 970px) {
      max-width: 90%;
      padding: 0;
      margin-top: -8.1875rem;
    }
    @media (min-width: 767.5px) {
      position: absolute;
      top: 45%;
      margin-top: -7.125rem;
      margin-bottom: 0;
      padding: 0;
    }
    @media (max-width: 767px) {
      width: 100%;
      padding-top: 80px;
    }

    form {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      margin: 0 15px;
      @media (min-width: 767.5px) {
        padding: 0.8125rem;
        margin: 0 0.75rem;
        box-shadow: 0 0 8px rgb(0 0 0 / 20%);
        background-color: rgba(0, 0, 0, 0.55);
      }
      @media (max-width: 400px) {
        margin: 0px;
      }

      .destination-list {
        padding-top: 12px;
        padding-bottom: 12px;
        max-height: 260px;
        overflow-y: auto;
        border-radius: 5px;
        & > div {
          cursor: pointer;
          :hover {
            background: #f2f2f2;
          }
        }
      }

      input {
        border: none;
        outline: none;
        background-color: white;
      }

      .spinner-border {
        min-width: 25px;
        max-width: 25px;
        width: 25px;
        height: 25px;
      }
    }

    .group-filter {
      border-radius: 20px;
      font-size: 14px;
      @media (max-width: 767px) {
        font-size: 12px;
      }
      .form-check-input {
        margin-top: 0.2em;
      }
    }

    .onepixel-padding {
      padding: 0 1px;
    }
    .fa-map-marker,
    .fa-calendar,
    .fa-search,
    .fa-users {
      color: #f80c35;
      font-size: 25px;
    }
    .mobile-filter > .btn {
      font-size: 18px;
    }

    .fa-times-circle-o {
      cursor: pointer;
    }
  }
  h1 {
    margin-top: 50px;
    color: #fff;
    font-size: 48px;
    font-weight: 700;
    text-shadow: 2px 2px 5px #000;
    @media (max-width: 767px) {
      font-size: 38px;
    }
  }
  h4 {
    font-weight: bold;
    font-size: 23px;
    text-shadow: 2px 2px 5px #000;
    @media (max-width: 767px) {
      font-size: 20px;
    }
  }

  .fade-enter-active {
    transition: opacity 2s ease-in-out;
  }

  .fade-leave-active {
    transition: opacity 2s ease-in-out;
  }

  .fade-enter-to {
    opacity: 1;
  }

  .fade-enter {
    opacity: 0;
  }

  .fade-leave-from {
    opacity: 1;
  }

  .fade-leave-to {
    opacity: 0;
  }
}
</style>
