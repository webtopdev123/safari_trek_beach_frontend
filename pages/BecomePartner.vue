<template>
  <div id="become-partner-page">
    <div class="container">
      <section>
        <header class="section-header">
          <h1>Become Our Partner</h1>
        </header>
        <div class="card mt-5 p-3">
          <form autocomplete="off" @submit.prevent="submitCompanyData">
            <div class="row g-0">
              <div class="col-md-6 col-sm-12 px-3 mt-3">
                <label class="form-label">Company Name</label>
                <input
                  v-model="companyName"
                  type="text"
                  class="form-control"
                  required
                  autocomplete="off"
                />
              </div>
              <div class="col-md-6 col-sm-12 px-3 mt-3">
                <label class="form-label">Contact Person Name</label>
                <input
                  v-model="personalName"
                  type="text"
                  class="form-control"
                  required
                  autocomplete="off"
                />
              </div>
              <div class="col-md-6 col-sm-12 px-3 mt-3">
                <label class="form-label">Email</label>
                <input
                  v-model="email"
                  type="email"
                  class="form-control"
                  required
                  autocomplete="off"
                />
              </div>
              <div class="col-md-6 col-sm-12 px-3 mt-3">
                <label class="form-label">Password</label>
                <password
                  class="px-0 mw-100"
                  v-model="password"
                  :toggle="true"
                  defaultClass="w-100 form-control"
                />
                <!-- <input
                  v-model="password"
                  type="password"
                  class="form-control"
                  required
                  autocomplete="new-password"
                /> -->
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
                <label class="form-label">Address</label>
                <input
                  v-model="address"
                  type="text"
                  class="form-control"
                  required
                  autocomplete="off"
                />
              </div>
              <div class="col-md-6 col-sm-12 px-3 mt-3">
                <label class="form-label" for="stuffs">Number of Stuffs</label>
                <input
                  id="stuffs"
                  v-model="stuffs"
                  type="number"
                  class="form-control"
                  required
                  autocomplete="off"
                />
              </div>
              <div class="col-md-6 col-sm-12 px-3 mt-3">
                <label class="form-label" for="tourType">Tour Type</label>
                <input
                  id="tourType"
                  v-model="tourType"
                  type="text"
                  class="form-control"
                  required
                  autocomplete="off"
                />
              </div>
              <div class="col-md-6 col-sm-12 px-3 mt-3">
                <label class="form-label">Office Location</label>
                <input
                  v-model="office_location"
                  type="text"
                  class="form-control"
                  required
                  autocomplete="off"
                />
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
              <div class="col-sm-12 px-3 mt-3">
                <label class="form-label">Company Mission</label>
                <textarea
                  v-model="companyMission"
                  class="form-control"
                  rows="10"
                  required
                />
              </div>
              <div class="col-sm-12 px-3 mt-3">
                <label class="form-label">Company Vision</label>
                <textarea
                  v-model="companyVision"
                  class="form-control"
                  rows="10"
                  required
                />
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

              <div class="px-3 my-3">
                <button type="submit" class="btn btn-danger">
                  <span v-if="!isSending"> Send Request</span>
                  <span v-else> Sending Request...</span>
                </button>
              </div>
              <div v-if="isError" class="text-danger">
                Failed to send. Password should be strong and greater than 7
                charactors, or user might be registered already. Change your
                email.
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
import VuePhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
// import Password from "vue-password-strength-meter";

export default {
  name: "BecomePartner",
  components: {
    VuePhoneNumberInput,
    [process.browser && "Password"]: () =>
      import("vue-password-strength-meter"),
  },
  data() {
    return {
      companyName: "",
      email: "",
      phone: "",
      stuffs: "",
      personalName: "",
      password: "",
      address: "",
      tourType: "",
      companyMission: "",
      companyVision: "",
      conditions: false,
      office_location: "",
      website_url: "",

      formatInternational_number: "",
      selected_country_code: "",

      updateCheckbox: 0,

      isSending: false,
      isError: false,
    };
  },

  metaInfo() {
    return {
      title: `Become a Partner | Safari-Trek-Beach`,
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "This is the become a partner page of the Safari-Trek-Beach.com.",
        },
        {
          property: "og:title",
          content: "Become a Partner | Safari-Trek-Beach",
        },
        {
          name: "twitter:title",
          content: "Become a Partner | Safari-Trek-Beach",
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
  },

  methods: {
    updateNumber(e) {
      this.formatInternational_number = e.formattedNumber;
    },

    submitCompanyData() {
      let companyData = {};

      this.isSending = true;

      companyData = {
        username: this.email,
        companyName: this.companyName,
        email: this.email,
        phoneNo: parseInt(this.formatInternational_number),
        noOfStaff: parseInt(this.stuffs),
        personName: this.personalName,
        password: this.password,
        address: this.address,
        tourType: this.tourType,
        mission: this.companyMission,
        vision: this.companyVision,
        officeLocation: this.office_location,
        websiteUrl: this.website_url,
      };
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

          // this.companyName = "";
          // this.email = "";
          // this.phone = "";
          // this.stuffs = "";
          // this.personalName = "";
          // this.password = "";
          // this.address = "";
          // this.tourType = "";
          // this.companyMission = "";
          // this.companyVision = "";
          // this.office_location = "";
          // this.website_url = "";
          // this.conditions = false;
          // this.updateCheckbox++;
        })
        .catch((e) => {
          this.isError = true;
          console.log(this.errorData);
          // this.$notify({
          //   group: "warning",
          //   title: "Submit Error !",
          //   text: "Sorry, Something went wrong...",
          // });

          // this.companyName = "";
          // this.email = "";
          // this.phone = "";
          // this.stuffs = "";
          // this.personalName = "";
          // this.password = "";
          // this.address = "";
          // this.tourType = "";
          // this.companyMission = "";
          // this.companyVision = "";
          // this.office_location = "";
          // this.website_url = "";
          // this.conditions = false;
          // this.updateCheckbox++;
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
