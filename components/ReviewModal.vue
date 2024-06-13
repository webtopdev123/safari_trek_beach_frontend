<template>
  <div>
    <!-- Modal -->
    <div
      id="writeareview"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="reviewLavel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
        <form class="modal-content" @submit.prevent="submitReview">
          <div class="modal-header bg-danger text-white">
            <h5 id="reviewLavel" class="modal-title">Write a Review</h5>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-mdb-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div class="modal-body text-start">
            <div class="row align-items-center">
              <div class="col-sm-12">
                <div class="form-outline">
                  <input
                    id="Name"
                    v-model="name"
                    type="text"
                    class="form-control"
                    autocomplete="off"
                    required
                  />
                  <label class="form-label" for="Name">Name</label>
                </div>
              </div>
              <div class="col-sm-12 mt-3">
                <div class="form-outline">
                  <input
                    id="Email"
                    v-model="email"
                    type="email"
                    class="form-control"
                    required
                    autocomplete="off"
                  />
                  <label class="form-label" for="Email">Email</label>
                </div>
              </div>
              <div class="col-sm-12 mt-3">
                <div class="form-outline">
                  <input
                    id="Title"
                    v-model="title"
                    type="text"
                    class="form-control"
                    autocomplete="off"
                    required
                  />
                  <label class="form-label" for="Title">Title</label>
                </div>
              </div>
              <div class="col-sm-12 mt-5">
                <h5 class="fw-bold">Rate:</h5>
              </div>
              <div class="col-sm-12 mt-3">
                <star-rating
                  v-model="rating"
                  :show-rating="false"
                  active-color="#f93154"
                />
              </div>
              <div class="col-sm-12 mt-5">
                <div class="form-outline">
                  <textarea
                    id="message"
                    v-model="review"
                    class="form-control"
                    name="review"
                    rows="6"
                    required
                  />
                  <label class="form-label" for="review">Write a review</label>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              ref="closeButton"
              type="button"
              class="btn btn-light"
              data-mdb-dismiss="modal"
            >
              Close
            </button>
            <button type="submit" class="btn btn-danger">Send</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
// import StarRating from "vue-star-rating";
export default {
  name: "TourPackage",
  components: {
    StarRating: () => import("vue-star-rating"),
  },
  props: {
    operator_id: Number,
    package_id: Number,
  },
  data() {
    return {
      name: "",
      email: "",
      title: "",
      rating: 5,
      review: "",
    };
  },

  computed: {
    ...mapGetters({
      request_status: "request_status",
    }),
  },

  methods: {
    reset() {
      this.name = "";
      this.email = "";
      this.title = "";
      this.review = "";
      this.rating = 5;
    },
    submitReview() {
      let params = {};

      params = {
        fullName: this.name,
        email: this.email,
        title: this.title,
        description: this.review,
        rate: this.rating,
        user: this.operator_id,
        package: this.package_id,
      };

      this.$store
        .dispatch("operatorController/postReview", params)
        .then(() => {
          if (this.request_status == true) {
            this.reset();
            this.$router.push("/thankyou-review");
          } else {
            this.$notify({
              group: "warning",
              title: "Submit Error !",
              text: "Sorry, Something went wrong...",
            });
            this.reset();
          }
          const elem = this.$refs.closeButton;
          elem.click();
        })
        .catch(() => {
          this.$notify({
            group: "warning",
            title: "Submit Error !",
            text: "Sorry, Something went wrong...",
          });
          this.reset();
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.form-outline .form-control:focus {
  box-shadow: inset 0px 0px 0px 1px #1266f1 !important;
  border: 0 !important;
}
.form-outline .form-control {
  border: 1px solid #bdbdbd !important;
}
.form-outline .form-control ~ .form-label {
  padding-top: 0;
  margin-top: 0.37rem;
  background-color: white;
}
input:-internal-autofill-selected {
  background-color: white !important;
}
.modal-footer {
  justify-content: center;
}
</style>
