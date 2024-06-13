<template>
  <div class="operator">
    <div class="container">
      <div class="card p-4">
        <div v-if="loading">
          <content-placeholders :rounded="true">
            <content-placeholders-text :lines="7" />
          </content-placeholders>
        </div>
        <div v-else-if="operatorData != null">
          <h1 class="fw-bold mb-3 text-capitalize h3">
            {{ operatorData.companyName }}
          </h1>
          <div class="mt-2 mb-0 d-flex h6 align-items-center">
            <div class="fw-bold">Reviews:&nbsp;</div>
            <div class="d-flex align-items-center">
              <CustomStarRating
                :rating="operatorData.avgReview"
                :size="20"
                class="mx-1 mb-1"
              />
              <span
                >{{ Math.round(operatorData.avgReview * 10) / 10 }}/5 ({{
                  operatorData.numReview
                }}</span
              >
              <span class="desktop">&nbsp;Reviews)</span>
              <span class="mobile">&nbsp;Rvs)</span>
            </div>
          </div>
          <div class="h6 mt-2 mb-0 d-flex">
            <div class="fw-bold" style="min-width: 83px">Tour Type:&nbsp;</div>
            <div>{{ operatorData.tourType }}</div>
          </div>
          <div class="mt-2 mb-0 d-flex">
            <div style="min-width: 69px" class="fw-bold">Address:&nbsp;</div>
            <div>{{ operatorData.address }}</div>
          </div>
          <div class="mt-2 mb-0 d-flex">
            <div class="fw-bold">Contact Person:&nbsp;</div>
            <div>{{ operatorData.contactPerson }}</div>
          </div>
          <div
            v-if="operatorData.officeLocation != null"
            class="mt-2 mb-0 d-flex"
          >
            <div class="fw-bold" style="min-width: 123px">
              Office Location:&nbsp;
            </div>
            <div v-if="operatorData.officeLocation != null">
              {{ operatorData.officeLocation }}
            </div>
          </div>
        </div>
      </div>
      <div class="card mt-4 pb-4">
        <!-- Tabs navs -->
        <ul
          id="ex1"
          class="nav nav-tabs mb-3 border"
          role="tablist"
          style="background: #f1f1f1"
        >
          <li class="nav-item border-end" role="presentation">
            <a
              id="ex1-tab-1"
              class="nav-link active"
              data-mdb-toggle="tab"
              href="#ex1-tabs-1"
              role="tab"
              aria-controls="ex1-tabs-1"
              aria-selected="true"
            >
              OVERVIEW
            </a>
          </li>
          <li class="nav-item border-end" role="presentation">
            <a
              id="ex1-tab-2"
              class="nav-link"
              data-mdb-toggle="tab"
              href="#ex1-tabs-2"
              role="tab"
              aria-controls="ex1-tabs-2"
              aria-selected="false"
            >
              SAFARI & TOURS
            </a>
          </li>
          <li class="nav-item border-end" role="presentation">
            <a
              id="ex1-tab-3"
              class="nav-link"
              data-mdb-toggle="tab"
              href="#ex1-tabs-3"
              role="tab"
              aria-controls="ex1-tabs-3"
              aria-selected="false"
            >
              REVIEWS
            </a>
          </li>
        </ul>
        <!-- Tabs navs -->

        <!-- Tabs content -->
        <div id="ex1-content" class="tab-content">
          <div
            id="ex1-tabs-1"
            class="tab-pane fade show active"
            role="tabpanel"
            aria-labelledby="ex1-tab-1"
          >
            <div v-if="loading" class="px-3 px-md-5">
              <content-placeholders :rounded="true">
                <content-placeholders-text :lines="10" />
              </content-placeholders>
            </div>
            <div v-else-if="operatorData != null" class="px-3 px-md-5">
              <div v-if="operatorData.mission != null">
                <h6 class="fw-bold mb-0 mt-3">Company Mission</h6>

                <p class="mt-2">
                  {{ operatorData.mission }}
                </p>
              </div>

              <div v-if="operatorData.vision != null">
                <h6 class="fw-bold mb-0 mt-5">Company Vision</h6>
                <!-- eslint-disable vue/no-v-html -->
                <p class="mt-2">
                  {{ operatorData.vision }}
                </p>
              </div>

              <div v-if="operatorData.description != null">
                <h6 class="fw-bold mb-0 mt-5">About Us</h6>
                <!-- eslint-disable vue/no-v-html -->
                <div class="mt-2" v-html="operatorData.description" />
              </div>

              <!-- <div v-if="operatorData.files.length > 0"> -->
              <!-- eslint-enable -->
              <!-- <h6 class="fw-bold mb-0 mt-5">
                  Company License and Certificate
                </h6>
                <hr /> -->
              <!-- <div class="row g-0 mt-3">
                  <div
                    v-for="(file, index) in operatorData.files"
                    :key="index"
                    class="col-12 col-lg-4 col-md-6 col-sm-12 px-5 mt-3"
                    :class="
                      /(jpg|gif|png)$/.test(file.document) ? 'd-none' : ''
                    "
                  >
                    <a
                      v-if="!/(jpg|gif|png)$/.test(file.document)"
                      class="text-decoration-none text-dark"
                      target="_blank"
                      :href="file.document"
                      :title="file.document_type"
                    >
                      <div class="shadow pt-5">
                        <div
                          class="text-center mx-4"
                          style="background: #dfe3e2"
                        >
                          <img
                            src="/images/big_pdf.svg"
                            width="80"
                            class="mx-auto my-4"
                          />
                        </div>
                        <div
                          class="position-relative text-center w-100 py-2"
                          style="
                            background: #f1f1f1;
                            box-shadow: 0px -2px 3px #999;
                            padding: 0 40px;
                          "
                        >
                          <img
                            class="
                              ms-2
                              float-start
                              position-absolute
                              top-50
                              translate-middle-y
                              start-0
                            "
                            src="/images/small_pdf.svg"
                            width="30"
                          />
                          <span class="fw-bold">{{ file.document_type }} </span>
                        </div>
                      </div>
                    </a>
                  </div>
                </div> -->

              <!-- <h6 class="fw-bold mb-0 mt-5">Company Photo</h6>
                <hr /> -->
              <!-- <div class="row g-0 mt-3">
                  <div
                    v-for="(file, index) in operatorData.files"
                    :key="index"
                    class="col-12 col-lg-4 col-md-6 col-sm-12 px-5 mt-3"
                    :class="
                      /(jpg|gif|png)$/.test(file.document) ? '' : 'd-none'
                    "
                  >
                    <a
                      v-if="/(jpg|gif|png)$/.test(file.document)"
                      class="text-decoration-none text-dark"
                      target="_blank"
                      :href="file.document"
                      :title="file.document_type"
                    >
                      <div class="shadow">
                        <div v-lazy:background="file.document" class="photo" />
                        <div
                          class="
                            text-center
                            w-100
                            py-2
                            bg-danger
                            fw-bold
                            text-white
                          "
                        >
                          {{ file.document_type }}
                        </div>
                      </div>
                    </a>
                  </div>
                </div> -->

              <!-- <h6 class="fw-bold mb-0 mt-5">
                                    Company Rewards
                                </h6>
                                <hr />
                                <div class="row g-0 mt-3 ">
                                    <div
                                        v-for="index in 3"
                                        :key="index"
                                        class="col-12 col-lg-4 col-md-6 col-sm-12 px-5 mt-3"
                                    >
                                        <a
                                            class="text-decoration-none text-dark"
                                            target="_blank"
                                            href="https://dasf52hkr0qti.cloudfront.net/documents/see_endless_adventures_business_name_certificate.png"
                                        >
                                            <div class="shadow pt-5">
                                                <div class="text-center mx-3" style="background: #dfe3e2">
                                                    <img src="/images/big_pdf.svg" width="80" class="mx-auto my-4" />
                                                </div>
                                                <div
                                                    class="position-relative text-center w-100 py-2"
                                                    style="background: #dfe3e2; box-shadow:0px -2px 3px #888;"
                                                >
                                                    <img
                                                        class="ms-2 float-start position-absolute top-50 translate-middle-y start-0"
                                                        src="/images/small_pdf.svg"
                                                        width="30"
                                                    />
                                                    <span class="fw-bold">TALA License</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div> -->
              <!-- </div> -->
            </div>
          </div>
          <div
            id="ex1-tabs-2"
            class="tab-pane fade"
            role="tabpanel"
            aria-labelledby="ex1-tab-2"
          >
            <lazy-component @show.once="packageList" />
            <div v-if="loading || !isPackageTab" class="px-3 px-md-5">
              <div class="row g-0 mt-3">
                <div
                  v-for="index in 6"
                  :key="'pre' + index"
                  class="col-lg-4 col-md-6 col-sm-12 px-2"
                >
                  <TourCardSkelecton />
                </div>
              </div>
            </div>
            <div
              v-else-if="
                operatorData != null &&
                operatorData.packages.length > 0 &&
                isPackageTab
              "
              class="row g-0 mt-3 px-0 px-md-3"
            >
              <div
                v-for="(item, index) in operatorData.packages"
                :key="'package' + index"
                class="col-lg-4 col-md-6 col-sm-12"
              >
                <TourCardOperator
                  :tour-data="item"
                  :company_name="operatorData.companyName"
                  :avgReview="operatorData.avgReview"
                  :sum_review="operatorData.numReview"
                  :tag="operatorData.tag"
                />
              </div>
            </div>
            <h5
              v-else-if="operatorData.packages.length == 0"
              class="text-center my-3 fst-italic"
            >
              There are no packages yet.
            </h5>
          </div>
          <div
            id="ex1-tabs-3"
            class="tab-pane fade"
            role="tabpanel"
            aria-labelledby="ex1-tab-3"
          >
            <lazy-component @show.once="reviewList" />
            <div v-if="!loading" class="text-center px-3 px-md-5">
              <button
                type="button"
                class="btn btn-danger my-3"
                data-mdb-toggle="modal"
                data-mdb-target="#writeareview"
              >
                Write A Review
              </button>
              <ReviewModal :operator_id="operatorData.id" :package_id="0" />
            </div>
            <div v-if="loading" />
            <div
              v-else-if="
                operatorData != null &&
                operatorData.reviews.length > 0 &&
                isReviewTab
              "
              class="px-3 px-md-5"
            >
              <Reviews
                :avg_review="operatorData.avgReview"
                :num_review="operatorData.numReview"
                :package-datareview="operatorData.reviews"
              />
            </div>
            <div v-else-if="operatorData.reviews.length == 0">
              <h5 class="text-center my-3 fst-italic">
                There is no review yet. Be the first person who write a review.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CustomStarRating from "../../components/CustomStarRating";
import TourCardOperator from "../../components/TourCardOperator";
import TourCardSkelecton from "../../components/TourCardSkelecton";
import ReviewModal from "../../components/ReviewModal.vue";
import Reviews from "../../components/tourpackage/Reviews.vue";

export default {
  name: "TourOperator",
  components: {
    TourCardOperator,
    CustomStarRating,
    TourCardSkelecton,
    Reviews,
    ReviewModal,
  },

  data() {
    return {
      title: "",
      isPackageTab: false,
      isReviewTab: false,
      loading: true,
    };
  },

  metaInfo() {
    return {
      title: `${this.title} | Safari-Trek-Beach.com`,
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "This is Tour Operator Pages of Safari-Trek-Beach.com",
        },
        {
          property: "og:title",
          content: "Tour Operator Pages of Safari-Trek-Beach.com",
        },
        {
          name: "twitter:title",
          content: "Tour Operator Pages of Safari-Trek-Beach.com",
        },
        // {property: 'og:image', content: this.blogData.post_inner_image},
        // {property: 'twitter:image', content: this.blogData.post_inner_image},
        // {property: 'og:url', content: window.location.href},
      ],
    };
  },

  computed: {
    operator_id: function () {
      var id = this.$route.params.pathMatch;
      return id.slice(0, id.length);
    },
    ...mapGetters({
      operatorData: "operatorController/operatorData",
    }),
  },
  created() {
    this.getOperatorById(this.operator_id);
  },
  methods: {
    getOperatorById(operator_id) {
      this.$store
        .dispatch("operatorController/getOperatorById", operator_id)
        .then(() => {
          // console.log("tag", this.operatorData);
          this.loading = false;
          if (this.operatorData.length == 0) {
            this.$router.push("/error404");
            return;
          }

          this.title = this.operatorData.companyName;
        });
    },

    packageList() {
      this.isPackageTab = true;
    },

    reviewList() {
      this.isReviewTab = true;
    },
  },
};
</script>

<style lang="scss">
.operator {
  padding-top: 120px;
  padding-bottom: 100px;
  .shadow {
    .photo {
      background-size: cover !important;
      position: relative;
      width: 100%;
      height: 0;
      padding-top: 80%;
    }
  }
  h3 {
    font-size: 1rem;
    font-weight: 700;
  }
}
.mobile {
  display: none;
  @media (max-width: 400px) {
    display: inline;
  }
}
.desktop {
  display: inline;
  @media (max-width: 400px) {
    display: none;
  }
}
</style>
