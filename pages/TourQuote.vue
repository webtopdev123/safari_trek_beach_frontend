<template>
  <client-only>
    <div class="quoteNow" ref="regForm">
      <div class="container gx-0">
        <section>
          <header class="section-header mt-5 mx-4">
            <h1>Request An Inquiry For This Tour</h1>
          </header>

          <div class="row gx-0">
            <div class="col-12 col-sm-12 col-md-6 col-lg-5">
              <TourCardQuote :tourData="package_data" :tourPrice="price" />
            </div>
            <div class="col-12 col-sm-12 col-md-6 col-lg-7">
              <div class="card p-4">
                <form @submit.prevent="delay">
                  <h6 class="text-danger">
                    <span style="font-size: 25px">☺</span> Kindly Send A Short
                    Message. We Will Respond Within Few Hours.
                  </h6>
                  <div class="mt-2 row quote">
                    <div class="col-lg-6 col-md-12 col-sm-12 mt-4">
                      <label class="form-label text-dark fw-bold" for="Name"
                        >Full Name</label
                      >
                      <p v-if="!name_edit" class="form-label py-1 px-2">
                        {{ fullname
                        }}<span
                          class="ms-3 text-primary fw-bold"
                          @click="name_edit = true"
                        >
                          Edit
                        </span>
                      </p>

                      <input
                        v-else
                        id="Name"
                        v-model="fullname"
                        type="text"
                        class="form-control"
                        required
                        autocomplete="off"
                        @blur="
                          fullname == '' || fullname == undefined
                            ? (name_edit = true)
                            : (name_edit = false)
                        "
                      />
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 mt-4">
                      <label class="form-label text-dark fw-bold" for="email"
                        >Email Address</label
                      >
                      <p v-if="!email_edit" class="form-label py-1 px-2">
                        {{ email }}
                        <span
                          class="ms-3 text-primary fw-bold"
                          @click="email_edit = true"
                        >
                          Edit
                        </span>
                      </p>

                      <input
                        v-else
                        id="email"
                        v-model="email"
                        type="email"
                        class="form-control"
                        required
                        autocomplete="off"
                        @blur="
                          email == '' || email == undefined
                            ? (email_edit = true)
                            : (email_edit = false)
                        "
                      />
                    </div>

                    <div
                      v-click-outside-dropdown="closeTravelerDropdown"
                      class="col-lg-6 col-md-12 col-sm-12 mt-4"
                    >
                      <div>
                        <label
                          class="form-label text-dark fw-bold"
                          for="Travellers"
                        >
                          Travellers
                        </label>
                        <p v-if="!traveler_edit" class="form-label py-1 px-2">
                          {{ traveler_number }}
                          <span
                            class="ms-3 text-primary fw-bold"
                            @click="showTravelerDropdown"
                          >
                            Edit
                          </span>
                        </p>
                        <input
                          v-else
                          id="Travellers"
                          v-model="traveler_number"
                          type="text"
                          class="form-control"
                          required
                          readonly
                          autocomplete="off"
                          @click="showTravelerDropdown"
                        />
                      </div>
                      <div
                        v-if="visible_traveler_dropdown"
                        class="shadow-lg traveler-dropdown left-0 bg-white mt-3"
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

                    <div
                      class="
                        col-lg-6 col-md-12 col-sm-12
                        mt-4
                        position-relative
                      "
                    >
                      <label class="form-label text-dark fw-bold" for="Date"
                        >When to start
                      </label>
                      <p v-if="!date_edit" class="form-label py-1 px-2">
                        {{ start_date }}

                        <span
                          class="ms-3 text-primary fw-bold"
                          @click="date_edit = true"
                        >
                          Edit
                        </span>
                      </p>
                      <input
                        v-else
                        id="Date"
                        v-model="start_date"
                        type="date"
                        class="form-control"
                        required
                        placeholder=""
                        rounded
                        @blur="date_edit = false"
                      />
                    </div>
                    <!-- <div class="col-lg-6 col-md-12 col-sm-12 mt-4">
                    <label class="form-label text-dark fw-bold" for="Phone">
                      Mobile Number (Optional) {{ selectedCountryEmoji }}
                    </label>
                    <input
                      id="Phone"
                      v-model="mobileno"
                      type="tel"
                      class="form-control"
                      autocomplete="off"
                    />
                  </div> -->
                    <div class="col-lg-6 col-md-12 col-sm-12 mt-4">
                      <label class="form-label text-dark fw-bold" for="Phone">
                        Mobile Number (Optional) {{ selectedCountryEmoji }}
                      </label>
                      <VuePhoneNumberInput
                        v-model="mobileno"
                        :default-country-code="selected_country_code"
                        @update="updateNumber"
                        required
                      />
                    </div>
                    <div class="col-lg-12 col-sm-12 mt-4">
                      <label class="form-label text-dark fw-bold" for="message"
                        >Your Message</label
                      >
                      <textarea
                        id="message"
                        v-model="message"
                        class="form-control"
                        rows="5"
                        required
                      />
                    </div>
                    <div class="col-lg-12 col-sm-12 mt-4">
                      <div class="form-check ms-2 mt-1">
                        <input
                          id="saveDetails"
                          v-model="remember_details"
                          class="form-check-input"
                          type="checkbox"
                        />
                        <label class="form-check-label" for="saveDetails">
                          Save Details For The Next Quote Request.
                        </label>
                      </div>
                    </div>
                  </div>
                  <!--<h5 class="fw-bold mt-5">
                                    Additional activities:
                                </h5>
                                <div :key="update_checkbox">
                                    <div class="d-flex align-items-center mt-3 additional-activity">
                                        <div class="form-check ms-2 mt-1">
                                            <input
                                                id="Zanzibar"
                                                v-model="zanzibar_activity"
                                                class="form-check-input"
                                                type="checkbox"
                                            />
                                            <label class="form-check-label" for="Zanzibar">
                                                Zanzibar
                                            </label>
                                        </div>
                                        <div v-if="zanzibar_activity" class="ms-3">
                                            <select
                                                v-model="zanzibar_days"
                                                class="form-select form-select-sm"
                                                aria-label="Select Zanzibar Day"
                                            >
                                                <option value="0">
                                                    No. of Days
                                                </option>
                                                <option value="1">
                                                    1 Day
                                                </option>
                                                <option v-for="(item, index) in 13" :key="index" :value="index + 2">
                                                    {{ index + 2 }} Days
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center mt-3 additional-activity">
                                        <div class="form-check ms-2 mt-1">
                                            <input
                                                id="Kilimanjaro"
                                                v-model="kiliman_activity"
                                                class="form-check-input"
                                                type="checkbox"
                                            />
                                            <label class="form-check-label" for="Kilimanjaro">
                                                Kilimanjaro
                                            </label>
                                        </div>
                                        <div v-if="kiliman_activity" class="ms-3">
                                            <select
                                                v-model="kilimanjaro_days"
                                                class="form-select form-select-sm"
                                                aria-label="Select Kilimanjaro Day"
                                            >
                                                <option value="0">
                                                    No. of Days
                                                </option>
                                                <option value="1">
                                                    1 Day
                                                </option>
                                                <option v-for="(item, index) in 13" :key="index" :value="index + 2">
                                                    {{ index + 2 }} Days
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="d-flex align-items-center mt-3 additional-activity">
                                        <div class="form-check ms-2 mt-1">
                                            <input
                                                id="Safari"
                                                v-model="safari_activity"
                                                class="form-check-input"
                                                type="checkbox"
                                            />
                                            <label class="form-check-label" for="Safari">
                                                Safari
                                            </label>
                                        </div>
                                        <div v-if="safari_activity" class="ms-3">
                                            <select
                                                v-model="safari_days"
                                                class="form-select form-select-sm"
                                                aria-label="Select Safari Day"
                                            >
                                                <option value="0">
                                                    No. of Days
                                                </option>
                                                <option value="1">
                                                    1 Day
                                                </option>
                                                <option v-for="(item, index) in 13" :key="index" :value="index + 2">
                                                    {{ index + 2 }} Days
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div> -->

                  <div class="text-right w-100 mt-5 d-flex justify-content-end">
                    <button
                      type="submit"
                      class="btn btn-danger"
                      :disable="disabled"
                    >
                      <span v-if="!isSending">Send Request</span>
                      <span v-else>Sending request...</span>
                    </button>
                  </div>
                  <div
                    v-if="isError"
                    class="
                      text-danger
                      w-100
                      mb-0
                      mt-2
                      d-flex
                      justify-content-end
                    "
                  >
                    <p>
                      Failed to send request. Input your valid email and try
                      again.
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </client-only>
</template>

<script>
import axios from "axios";
import Vue from "vue";
import { mapGetters } from "vuex";
import TourCardQuote from "../components/TourCardQuote.vue";
import VueScrollTo from "vue-scrollto";
Vue.use(VueScrollTo);

import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";

export default {
  name: "TourQuote",
  scrollToTop: true,
  components: {
    TourCardQuote,
    VuePhoneNumberInput,
  },
  directives: {
    "click-outside-dropdown": {
      bind: function (el, binding) {
        const ourClickEventHandler = (event) => {
          if (!el.contains(event.target) && el !== event.target) {
            binding.value(event);
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
      waterMark: "Select a date",
      dayList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      zanzibar_activity: false,
      kiliman_activity: false,
      safari_activity: false,

      zanzibar_days: "0",
      kilimanjaro_days: "0",
      safari_days: "0",

      traveler_number: "",
      visible_traveler_dropdown: false,
      adults_number: 2,
      children_number: 0,
      fullname: "",
      selected_country_code: "US",
      selectedCountryEmoji: "",
      message: "",
      email: "",
      mobileno: "",
      formatInternational_number: "",
      start_date: "",

      phone_code: "",

      remember_details: true,

      results: {},

      disabled: false,
      timeout: null,
      update_checkbox: 0,

      name_edit: false,
      email_edit: false,
      traveler_edit: false,
      date_edit: false,

      isSending: false,
      isError: false,
    };
  },
  mounted() {
    VueScrollTo.scrollTo(this.$refs.regForm, 500, { easing: "linear" });
  },
  computed: {
    ...mapGetters({
      where_to_search_state: "tourController/where_to_search",
      start_date_state: "tourController/start_date",
      adults_number_state: "tourController/adults_number",
      children_number_state: "tourController/children_number",

      detailData: "tourController/detailData",

      package_data: "tourController/quoteData",

      package_id: "tourController/package_id",
      request_status: "request_status",

      user_id: "tourController/user_id",
      quoteRes: "operatorController/quoteRes",
    }),
  },

  watch: {
    adults_number: function () {
      this.priceCalc(
        parseInt(this.adults_number) + parseInt(this.children_number),
        this.start_date
      );
      this.traveler_number_calc();
    },

    children_number: function () {
      this.priceCalc(
        parseInt(this.adults_number) + parseInt(this.children_number),
        this.start_date
      );
      this.traveler_number_calc();
    },

    start_date: function () {
      this.priceCalc(
        parseInt(this.adults_number) + parseInt(this.children_number),
        this.start_date
      );
    },
  },

  async created() {
    const ipUrl = "https://ipapi.co/json/";

    this.price = this.package_data.price;
    this.traveler_number = this.traveler_number_state;

    this.start_date = this.convertDate(this.start_date_state);

    this.adults_number = this.adults_number_state;
    this.children_number = this.children_number_state;
    this.traveler_number_calc();

    if (process.browser) {
      await axios
        .get(ipUrl)
        .then((response) => {
          this.selected_country_code = response.data.country;
          this.phone_code = response.data.country_calling_code;
        })
        .catch((e) => {
          console.log(e);
          this.selected_country_code = "TZ";
          this.phone_code = "+255";
        });
    }

    if (this.detailData != null) {
      if (this.detailData.mobileno != undefined) {
        this.mobileno = this.detailData.mobileno;
        this.formatInternational_number = this.phone_code + this.mobileno;
      }
      if (this.detailData.message != undefined) {
        this.message = this.detailData.message;
      }
    }

    this.fullname = this.package_data.name;
    this.email = this.package_data.email;

    if (this.fullname == undefined || this.fullname == "")
      this.name_edit = true;
    if (this.email == undefined || this.email == "") this.email_edit = true;

    this.update_checkbox++;
  },

  metaInfo() {
    return {
      title: `Request a Quote for the Tour ${this.package_data.no_of_day}-Day ${this.package_data.title} - Safari-Trek-Beach.com`,
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "We strive to ensure that the number of women employed in tourism sector improves. We encourage tour companies to employ more women. One among our raking factors for tour companies is the number of women they have employed.",
        },
        { property: "og:title", content: "Safari-Trek-Beach.com" },
        { name: "twitter:title", content: "Safari-Trek-Beach.com" },
        // {property: 'og:image', content: this.blogData.post_inner_image},
        // {property: 'twitter:image', content: this.blogData.post_inner_image},
        // {property: 'og:url', content: window.location.href},
      ],
    };
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },

  methods: {
    traveler_number_calc() {
      let traveler =
        parseInt(this.adults_number) + parseInt(this.children_number);
      if (traveler == 1) this.traveler_number = traveler + " Traveler";
      else if (traveler == 0) this.traveler_number = "";
      else this.traveler_number = traveler + " Travelers";
    },

    priceCalc(num, start_date) {
      var d = new Date();
      var n = d.getMonth();

      if (start_date != "" && start_date != null) {
        d = new Date(start_date);
        n = d.getMonth();
      }

      if (
        num > this.package_data.adult_currency_rate.currencySpring.length ||
        num == 0
      ) {
        num = this.package_data.adult_currency_rate.currencySpring.length;
      }

      if (n > 1 && n < 5) {
        this.price =
          this.package_data.adult_currency_rate.currencySpring[num - 1];
        while (this.price == 0 && num > 0) {
          this.price =
            this.package_data.adult_currency_rate.currencySpring[num - 1];
          num = num - 1;
        }
      } else if (n > 4 && n < 8) {
        this.price =
          this.package_data.adult_currency_rate.currencySummer[num - 1];
        while (this.price == 0 && num > 0) {
          this.price =
            this.package_data.adult_currency_rate.currencySummer[num - 1];
          num = num - 1;
        }
      } else if (n > 7 && n < 11) {
        this.price =
          this.package_data.adult_currency_rate.currencyAutumn[num - 1];
        while (this.price == 0 && num > 0) {
          this.price =
            this.package_data.adult_currency_rate.currencyAutumn[num - 1];
          num = num - 1;
        }
      } else {
        this.price =
          this.package_data.adult_currency_rate.currencyWinter[num - 1];
        while (this.price == 0 && num > 0) {
          this.price =
            this.package_data.adult_currency_rate.currencyWinter[num - 1];
          num = num - 1;
        }
      }
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

    convertDate(dd) {
      var date = new Date(dd);
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var dt = date.getDate();
      if (dt < 10) {
        dt = "0" + dt;
      }
      if (month < 10) {
        month = "0" + month;
      }

      if (isNaN(year) || year == "1970") {
        this.date_edit = true;
      }

      return year + "-" + month + "-" + dt;
    },

    delay() {
      this.disabled = true;
      // Re-enable after 5 seconds
      this.timeout = setTimeout(() => {
        this.disabled = false;
      }, 5000);
      this.tourQuote();
    },

    reset() {
      this.fullname = "";
      this.email = "";
      this.mobileno = "";
      this.message = "";
      this.zanzibar_days = "";
      this.kilimanjaro_days = "";
      this.safari_days = "";
    },

    updateNumber(e) {
      // console.log(e.formatInternational);
      this.formatInternational_number = e.formatInternational;
      this.selected_country_code = e.countryCode;
      console.log(this.selected_country_code);
      // console.log(this.formatInternational_number);
    },

    tourQuote() {
      this.isError = false;

      this.safari_days = undefined;
      this.kilimanjaro_days = undefined;
      this.zanzibar_days = undefined;

      let quoteData = {};

      // prepare a discount cost
      const price = this.package_data.price;
      const discount = this.package_data.currency_discount;
      const discount_cost = price * (1 - discount * 0.01);

      quoteData = {
        adult: this.adults_number,
        child: this.children_number,
        travelDate: this.start_date,
        fullName: this.fullname,
        email: this.email,
        country: this.selected_country_code,
        phone: this.formatInternational_number,
        description: this.message,
        zanzibarActivity: this.zanzibar_days,
        kilimanjaroActivity: this.kilimanjaro_days,
        safariActivity: this.safari_days,
        package: this.package_id,
        user: this.user_id,
        estimateCost: Math.ceil(discount_cost) * this.adults_number,
      };

      this.isSending = true;

      this.$store
        .dispatch("operatorController/tourQuote", quoteData)
        .then(() => {
          if (this.request_status == true) {
            if (this.remember_details == false) {
              this.reset();

              let searchData = {};

              searchData = {
                where_to_search: "",
                start_date: new Date(),
                adults_number: 2,
                children_number: 0,
                email: "",
                name: "",
              };

              this.$store.dispatch("tourController/setSearchData", searchData);
              this.$store.dispatch("tourController/setdetailData", {});
            } else {
              let searchData = {};

              searchData = {
                where_to_search: "",
                start_date: this.start_date,
                adults_number: this.adults_number,
                children_number: this.children_number,
                email: this.email,
                name: this.fullname,
              };

              this.$store.dispatch("tourController/setSearchData", searchData);

              let detail_data = {};

              detail_data = {
                fullname: this.fullname,
                emailAddress: this.email,
                mobileno: this.mobileno,
                message: this.message,
                zanzibar_days: this.zanzibar_days,
                kilimanjaro_days: this.kilimanjaro_days,
                safari_days: this.safari_days,
              };

              this.$store.dispatch("tourController/setdetailData", detail_data);
            } // if checked remember option

            this.$router.push("/thankyou-quote");
            this.isSending = false;
          } else {
            console.log(this.quoteRes);

            this.isError = true;
            this.isSending = false;
          }
          this.isSending = false;
        })
        .catch(() => {
          console.log("error !!!!");
          console.log(this.quoteRes);

          this.isSending = false;
          this.isError = true;
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.form-select {
  padding-top: 0.33rem;
  padding-bottom: 0.33rem;
}
.form-control:focus {
  box-shadow: inset 0px 0px 0px 1px #1266f1 !important;
  border: 0 !important;
}
.form-control {
  border: 1px solid #bdbdbd !important;
}
.form-control ~ .form-label text-dark fw-bold {
  padding-top: 0;
  margin-top: 0.37rem;
  background-color: white;
}
input:-internal-autofill-selected {
  background-color: white !important;
}
.quoteNow {
  padding-top: 30px;
  padding-bottom: 100px;
  section {
    margin-top: 100px;

    @media (max-width: 540px) {
      margin-top: 60px;
    }
  }
}
.form-select {
  border: 1px solid #bdbdbd !important;
  &:focus {
    box-shadow: inset 0px 0px 0px 1px #1266f1 !important;
    border: none !important;
  }
}
.form-control[readonly] {
  background-color: white;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  background: transparent;
  bottom: 0;
  color: transparent;
  cursor: pointer;
  height: auto;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: auto;
}

p.form-label span {
  cursor: pointer;
}
</style>
