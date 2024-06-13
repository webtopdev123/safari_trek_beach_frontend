<template>
  <div id="become-partner-page">
    <div class="container">
      <section>
        <header class="section-header">
          <h1>List Your Accommodations</h1>
        </header>
        <div class="card mt-5 p-3">
          <form autocomplete="off" @submit.prevent="submitAccomData">
            <div class="row g-0">
              <div class="col-md-6 col-sm-12 px-3 mt-3">
                <label class="form-label">Accommodation Name</label>
                <input
                  v-model="accomName"
                  type="text"
                  class="form-control"
                  required
                  autocomplete="off"
                />
              </div>
              <div class="col-md-6 col-sm-12 px-3 mt-3">
                <label class="form-label">Your Name</label>
                <input
                  v-model="personalName"
                  type="text"
                  class="form-control"
                  required
                  autocomplete="off"
                />
              </div>
              <div class="col-md-6 col-sm-12 px-3 mt-3">
                <label class="form-label">Your Email</label>
                <input
                  v-model="email"
                  type="email"
                  class="form-control"
                  required
                  autocomplete="off"
                />
              </div>

              <div class="col-md-6 col-sm-12 px-3 mt-3">
                <label class="form-label">Phone Number</label>
                <VuePhoneNumberInput
                  v-model="phone"
                  :default-country-code="selected_country_code"
                  @update="updateNumber"
                  required
                />
              </div>

              <div class="col-md-6 col-sm-12 px-3 mt-3">
                <label class="form-label" for="type">Accommodation Type</label>
                <input
                  v-model="type"
                  type="text"
                  class="form-control"
                  required
                  autocomplete="off"
                />
              </div>
              <div class="col-md-6 col-sm-12 px-3 mt-3">
                <label class="form-label" for="type"
                  >Accommodation Comfort</label
                >
                <input
                  v-model="comfort"
                  type="text"
                  class="form-control"
                  required
                  autocomplete="off"
                />
              </div>

              <div class="col-md-6 col-sm-12 px-3 mt-3">
                <label class="form-label" for="type">Accommodation Star</label>
                <select
                  class="form-control"
                  v-model="star"
                  aria-label="Default select example"
                >
                  <option value="0">Select accommodation star rating</option>
                  <option value="1">1 Star</option>
                  <option value="2">2 Star</option>
                  <option value="3">3 Star</option>
                  <option value="4">4 Star</option>
                  <option value="5">5 Star</option>
                </select>
              </div>

              <div class="col-md-6 col-sm-12 px-3 mt-3">
                <label class="form-label">Website URL</label>
                <input
                  v-model="website_url"
                  type="text"
                  class="form-control"
                  autocomplete="off"
                />
              </div>

              <div
                class="col-md-12 col-sm-12 px-3 mt-3"
                style="margin-bottom: -20px"
              >
                <label class="form-label fw-bold">Accommodation Location</label>
              </div>

              <div class="col-md-6 col-sm-12 px-3 mt-3">
                <label class="form-label">Country</label>
                <input
                  v-model="country"
                  type="text"
                  class="form-control"
                  required
                  autocomplete="off"
                />
              </div>

              <div class="col-md-6 col-sm-12 px-3 mt-3">
                <label class="form-label">Region state</label>
                <input
                  v-model="region"
                  type="text"
                  class="form-control"
                  required
                  autocomplete="off"
                />
              </div>

              <div class="col-md-6 col-sm-12 px-3 mt-3">
                <label class="form-label">City/Town</label>
                <input
                  v-model="city"
                  type="text"
                  class="form-control"
                  required
                  autocomplete="off"
                />
              </div>

              <div class="col-md-6 col-sm-12 px-3 mt-3">
                <label class="form-label">Latitude</label>
                <input
                  v-model="lat"
                  type="text"
                  class="form-control"
                  required
                  autocomplete="off"
                />
              </div>

              <div class="col-md-6 col-sm-12 px-3 mt-3">
                <label class="form-label">Longitude</label>
                <input
                  v-model="lon"
                  type="text"
                  class="form-control"
                  required
                  autocomplete="off"
                />
              </div>

              <div class="col-sm-12 px-3 mt-3">
                <label class="form-label">Accommodation Images</label>
                <UploadImages
                  @changed="handleImages"
                  fileError="images files only accepted"
                  clearAll="Remove all"
                  uploadMsg="Drag and drop images here or click to upload product images"
                />
              </div>

              <div class="col-sm-12 px-3 mt-5">
                <label class="form-label">Message (optional)</label>
                <textarea v-model="message" class="form-control" rows="5" />
              </div>

              <div :key="updateCheckbox" class="px-3 mt-3">
                <div class="form-check ms-2 mt-1">
                  <input
                    id="conditions"
                    v-model="conditions"
                    class="form-check-input"
                    type="checkbox"
                    required
                  />
                  <label class="form-check-label" for="conditions">
                    I agree to the Safari-Trek-Beach
                  </label>
                  <NuxtLink to="/termsCondition" target="_blank">
                    <span
                      class="ms-1 text-decoration-underline fw-bold text-dark"
                    >
                      Terms and Condition.
                    </span>
                  </NuxtLink>
                </div>
              </div>

              <div class="px-3 my-3 text-end">
                <button type="submit" class="btn btn-danger">
                  <span v-if="!isSending">Register Now</span>
                  <span v-else> Registering...</span>
                </button>
              </div>
              <div v-if="isError" class="text-danger text-end">
                Failed to register. This page is in development now.
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { mapGetters } from "vuex";
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
import UploadImages from "../components/vue-upload-drop-images.vue";

export default {
  name: "RegisterAccommodation",
  components: {
    VuePhoneNumberInput,
    UploadImages,
  },
  data() {
    return {
      accomName: "",
      email: "",
      phone: "",
      personalName: "",
      address: "",
      type: "",
      message: "",
      conditions: false,
      location: "",
      comfort: "",
      website_url: "",
      country: "Tanzania",
      region: "",
      city: "",
      star: "0",
      lat: "0",
      lon: "0",

      formatInternational_number: "",
      selected_country_code: "",

      updateCheckbox: 0,

      isSending: false,
      isError: false,
    };
  },

  metaInfo() {
    return {
      title: `Register your Accommodation | Safari-Trek-Beach`,
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "This is the Register your Accommodation page of the Safari-Trek-Beach.com.",
        },
        {
          property: "og:title",
          content: "Register your Accommodation | Safari-Trek-Beach",
        },
        {
          name: "twitter:title",
          content: "Register your Accommodation | Safari-Trek-Beach",
        },
        // {property: 'og:image', content: ''},
        // {property: 'twitter:image', content: ''},
        // {property: 'og:url', content: window.location.href},
      ],
    };
  },

  computed: {
    ...mapGetters({
      errorData: "operatorController/errorData",
      request_status: "request_status",
    }),
  },

  async created() {
    this.search_result = this.where_to_list;
    // const ipUrl = "https://www.geoplugin.net/json.gp";

        this.selected_country_code = 'TZ';
        this.phone_code = '+255';
    // if (process.browser) {
    //   await axios.get(ipUrl).then((response) => {
    //     this.selected_country_code = response.data.geoplugin_countryCode;
    //     this.phone_code = response.data.calling_code;
    //   });
    // }
    this.getLatLon();
  },

  methods: {
    updateNumber(e) {
      this.formatInternational_number = e.formattedNumber;
    },

    getLatLon() {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position.coords.latitude);
          this.lat = position.coords.latitude;
          console.log(position.coords.longitude);
          this.lon = position.coords.longitude;
        },
        (error) => {
          console.log(error.message);
        }
      );
    },

    handleImages(files) {
      console.log(files);
      /*
                  [
                    {
                        "name": "Screenshot from 2021-02-23 12-36-33.png",
                        "size": 319775,
                        "type": "image/png",
                        "lastModified": 1614080193596
                        ...
                    },
                    ...
                    ]
                 */
    },

    submitAccomData() {
      let companyData = {};

      this.isSending = true;

      this.isError = false;

      this.$store
        .dispatch("operatorController/becomePartner", companyData)
        .then(() => {
          this.isSending = false;

          if (this.request_status == true) {
            this.$router.push("/thankyou-partner");
          } else {
            this.isError = true;
            this.$notify({
              group: "warning",
              title: "Submit Error !",
              text: "Sorry, Something went wrong...",
            });
          }
        })
        .catch((e) => {
          this.isError = true;
          console.log(this.errorData);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
#become-partner-page {
  padding-top: 50px;
  padding-bottom: 100px;
  section {
    margin-top: 100px;
  }

  .Password {
    input {
      background-color: red !important;
    }
  }

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
  .form-control ~ .form-label {
    padding-top: 0;
    margin-top: 0.37rem;
    background-color: white;
  }
  input:-internal-autofill-selected {
    background-color: white !important;
  }
}
input:-internal-autofill-selected {
  background-color: white !important;
}
</style>
