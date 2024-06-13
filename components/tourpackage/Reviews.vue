<template>
  <div class="listReview">
    <h4 class="fw-bold mt-3">Reviews</h4>
    <h5 class="mb-0">Traveler Rating</h5>
    <h5 class="reviews mt-3 d-flex align-items-center">
      <CustomStarRating :rating="avg_review" :size="20" class="me-2 mb-2" />
      <span v-if="avg_review == '5'" class="text-danger">
        {{ avg_review }}.0 / 5
      </span>
      <span v-else-if="avg_review == '4'" class="text-danger">
        {{ avg_review }}.0 / 5
      </span>
      <span v-else-if="avg_review == '3'" class="text-danger">
        {{ avg_review }}.0 / 5
      </span>
      <span v-else-if="avg_review == '2'" class="text-danger">
        {{ avg_review }}.0 / 5
      </span>
      <span v-else-if="avg_review == '1'" class="text-danger">
        {{ avg_review }}.0 / 5
      </span>
      <span v-else class="text-danger">
        {{ Math.round(avg_review * 10) / 10 }} / 5
      </span>

      <span v-if="num_review == '1'" class="text-muted">
        <small>&nbsp;({{ num_review }} Review)</small>
      </span>
      <span v-else class="text-muted">
        <small>&nbsp;({{ num_review }} Reviews)</small>
      </span>
    </h5>
    <div :key="update_checklist" class="rating-wrap">
      <div
        class="rating-item"
        :style="[review_5 == 0 ? { color: 'gray' } : {}]"
      >
        <span class="rating-grade pe-2">
          <div class="form-check ms-2 form-check-inline">
            <input
              v-model="excellent"
              class="form-check-input"
              type="checkbox"
              :disabled="review_5 == 0 ? true : false"
              @change="reviewFilter"
            />
          </div>
        </span>
        <span class="rating-grade pe-3">Exellent</span>
        <div class="rating-grade w-100">
          <div class="progress">
            <div
              class="progress-bar bg-danger"
              role="progressbar"
              :style="{
                width: (review_5 * 100) / num_review + '%',
              }"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </div>
        <span class="rating-grade ps-3">{{ review_5 }}</span>
      </div>

      <div
        class="rating-item"
        :style="[review_4 == 0 ? { color: 'gray' } : {}]"
      >
        <span class="rating-grade pe-2">
          <div class="form-check ms-2 form-check-inline">
            <input
              v-model="verygood"
              class="form-check-input"
              type="checkbox"
              :disabled="review_4 == 0 ? true : false"
              @change="reviewFilter"
            />
          </div>
        </span>
        <span class="rating-grade pe-3">Very Good</span>
        <div class="rating-grade w-100">
          <div class="progress">
            <div
              class="progress-bar bg-danger"
              role="progressbar"
              :style="{
                width: (review_4 * 100) / num_review + '%',
              }"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </div>
        <span class="rating-grade ps-3">{{ review_4 }}</span>
      </div>

      <div
        class="rating-item"
        :style="[review_3 == 0 ? { color: 'gray' } : {}]"
      >
        <span class="rating-grade pe-2">
          <div class="form-check ms-2 form-check-inline">
            <input
              v-model="average"
              class="form-check-input"
              type="checkbox"
              :disabled="review_3 == 0 ? true : false"
              @change="reviewFilter"
            />
          </div>
        </span>
        <span class="rating-grade pe-3">Average</span>
        <div class="rating-grade w-100">
          <div class="progress">
            <div
              class="progress-bar bg-danger"
              role="progressbar"
              :style="{
                width: (review_3 * 100) / num_review + '%',
              }"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </div>
        <span class="rating-grade ps-3">{{ review_3 }}</span>
      </div>

      <div
        class="rating-item"
        :style="[review_2 == 0 ? { color: 'gray' } : {}]"
      >
        <span class="rating-grade pe-2">
          <div class="form-check ms-2 form-check-inline">
            <input
              v-model="poor"
              class="form-check-input"
              type="checkbox"
              :disabled="review_2 == 0 ? true : false"
              @change="reviewFilter"
            />
          </div>
        </span>
        <span class="rating-grade pe-3">Poor</span>
        <div class="rating-grade w-100">
          <div class="progress">
            <div
              class="progress-bar bg-danger"
              role="progressbar"
              :style="{
                width: (review_2 * 100) / num_review + '%',
              }"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </div>
        <span class="rating-grade ps-3">{{ review_2 }}</span>
      </div>

      <div
        class="rating-item"
        :style="[review_1 == 0 ? { color: 'gray' } : {}]"
      >
        <span class="rating-grade pe-2">
          <div class="form-check ms-2 form-check-inline">
            <input
              v-model="terrible"
              class="form-check-input"
              type="checkbox"
              :disabled="review_1 == 0 ? true : false"
              @change="reviewFilter"
            />
          </div>
        </span>
        <span class="rating-grade pe-3">Terrible</span>
        <div class="rating-grade w-100">
          <div class="progress">
            <div
              class="progress-bar bg-danger"
              role="progressbar"
              :style="{
                width: (review_1 * 100) / num_review + '%',
              }"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </div>
        </div>
        <span class="rating-grade ps-3">{{ review_1 }}</span>
      </div>
    </div>
    <hr />
    <div
      v-if="filtered_reviewList.length != 0"
      :key="'Filter_review' + update_checklist"
    >
      <div
        v-for="(item, index7) in current_page_reviews"
        :key="current_review_page + 'F' + index7"
        class="review my-5"
      >
        <ReviewCard :reviewItem="item"></ReviewCard>
      </div>

      <div class="d-flex justify-content-center mt-5">
        <client-only>
          <paginate
            v-model="current_review_page"
            :page-count="total_page_number"
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
    <h5 v-else class="text-center">No reviews to display...</h5>
  </div>
</template>

<script>
import CustomStarRating from "../CustomStarRating";
import ReviewReply from "./ReviewReply";
import ReviewCard from "./ReviewCard";

export default {
  name: "Reviews",
  components: {
    CustomStarRating,
    ReviewReply,
    ReviewCard,
    Paginate: () => import("vuejs-paginate"),
  },
  props: {
    avg_review: Number,
    num_review: Number,
    packageDatareview: Array,
  },
  data() {
    return {
      current_review_page: 1,
      reviews_per_page: 5,
      current_page_reviews: [],
      excellent: true,
      verygood: true,
      average: true,
      poor: true,
      terrible: true,

      review_5: 0,
      review_4: 0,
      review_3: 0,
      review_2: 0,
      review_1: 0,

      filtered_reviewList: [],

      update_checklist: 0,

      total_page_number: 1,

      likes: 0,
      dislikes: 0,
    };
  },
  watch: {
    current_review_page: function (newValue) {
      this.getCurrentPageReviews(newValue);
    },
  },
  created() {
    for (let i = 0; i < this.packageDatareview.length; i++) {
      if (this.packageDatareview[i].rate == 5) this.review_5++;
      else if (this.packageDatareview[i].rate == 4) this.review_4++;
      else if (this.packageDatareview[i].rate == 3) this.review_3++;
      else if (this.packageDatareview[i].rate == 2) this.review_2++;
      else if (this.packageDatareview[i].rate == 1) this.review_1++;
    }

    if (this.review_5 == 0) this.excellent = false;
    if (this.review_4 == 0) this.verygood = false;
    if (this.review_3 == 0) this.average = false;
    if (this.review_2 == 0) this.poor = false;
    if (this.review_1 == 0) this.terrible = false;

    this.update_checklist++;

    this.reviewFilter();
  },
  methods: {
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

    reviewFilter() {
      let filtered_reviewData = [];

      for (let i = 0; i < this.packageDatareview.length; i++) {
        if (this.packageDatareview[i].rate == 5 && this.excellent == true) {
          filtered_reviewData.push(this.packageDatareview[i]);
          continue;
        }
        if (this.packageDatareview[i].rate == 4 && this.verygood == true) {
          filtered_reviewData.push(this.packageDatareview[i]);
          continue;
        }
        if (this.packageDatareview[i].rate == 3 && this.average == true) {
          filtered_reviewData.push(this.packageDatareview[i]);
          continue;
        }
        if (this.packageDatareview[i].rate == 2 && this.poor == true) {
          filtered_reviewData.push(this.packageDatareview[i]);
          continue;
        }
        if (this.packageDatareview[i].rate == 1 && this.terrible == true) {
          filtered_reviewData.push(this.packageDatareview[i]);
        }
      }

      this.filtered_reviewList = filtered_reviewData;

      // //console.log('filter', this.filtered_reviewList)

      this.update_checklist++;

      this.current_review_page = 1;

      this.total_page_number = Math.floor(
        this.filtered_reviewList.length / this.reviews_per_page
      );

      if (this.filtered_reviewList.length % this.reviews_per_page > 0) {
        this.total_page_number = this.total_page_number + 1;
      }

      this.getCurrentPageReviews(1);
    },
    getCurrentPageReviews(page_num) {
      this.current_page_reviews = [];
      let index = 0;
      for (
        let i = (page_num - 1) * this.reviews_per_page;
        i < page_num * this.reviews_per_page;
        i++
      ) {
        if (this.filtered_reviewList[i] != undefined) {
          this.current_page_reviews[index] = this.filtered_reviewList[i];
          index++;
        }
      }
    },
    thumbDown() {
      this.dislikes++;
    },
    thumbUp() {
      this.likes++;
    },
  },
};
</script>
<style lang="scss">
.listReview {
  .review button {
    border: none;
    outline: none;
    span {
      color: #757575;
    }

    #thumbdown {
      transform: rotate(180deg);
    }
  }
  .review-content {
    p,
    span {
      font-size: 16px;
    }
  }

  .rating-wrap {
    display: table;
    max-width: 400px;
    width: 100%;
    position: relative;
  }

  .rating-item {
    display: table-row;
    span {
      font-size: 16px;
    }
    .progress {
      height: 15px;
    }
  }

  .rating-grade {
    display: table-cell;
    white-space: nowrap;
    vertical-align: middle;
  }

  .pagination {
    width: 100%;
    position: relative;
    justify-content: center;
  }

  .page-item {
    margin-right: 10px;
    margin-left: 10px;
  }

  .page-link.prev {
    position: absolute;
    left: 0;
  }

  .page-link.next {
    position: absolute;
    right: 0;
  }

  @media (max-width: 480px) {
    .pagination {
      width: 100%;
      position: relative;
      justify-content: center;
    }

    .page-item {
      margin-right: 1px;
      margin-left: 1px;
    }
  }
  hr {
    color: #e0e0e0;
    height: 2px;
  }
}
</style>
