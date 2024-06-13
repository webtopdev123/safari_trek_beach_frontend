<template>
  <div>
    <swiper
      ref="reviewSwiper"
      :options="swiperOption"
      class="review-slider"
      @transitionEnd="getActiveIndex"
    >
      <swiper-slide v-for="(item, index) in review" :key="'review' + index">
        <div class="mb-3 review-detail">
          <h5 class="text-muted mb-2" :title="item.title">
            {{ item.title }}
          </h5>
          <h5 class="reviews d-flex align-items-center">
            <CustomStarRating :rating="item.rate" :size="18" class="mb-2" />
            <span v-if="item.rate == '5'" class="fs-6">&nbsp;5.0 / 5 </span>
            <span v-else class="fs-6"> &nbsp;{{ item.rate }} / 5 </span>
          </h5>
          <div class="review-description">
            <span style="font-size: 15px"> ❝ </span>
            {{ item.description.substr(0, 200) }}
            <span v-if="item.description.length > 200">...</span>
            <span style="font-size: 15px"> ❞ </span>
          </div>
          <div class="text-end mt-3 fst-italic">
            <h5 class="fw-bold text-dark my-0 ms-3 text-capitalize">
              {{ item.full_name }}
            </h5>
            <h6 class="text-dark my-0 ms-3">
              Reviewed:
              <span class="text-muted">{{
                new Date(item.createdAt).toDateString()
              }}</span>
            </h6>
          </div>
        </div>
      </swiper-slide>
    </swiper>

    <div v-if="review.length != 0" class="text-center mb-3">
      <div class="d-flex justify-content-center align-items-center">
        <button class="btn btn-light px-3 py-1" @click="prev">
          <span style="font-size: 15px">&lt;</span>
        </button>
        <span class="mx-3">
          {{ currentIndex + 1 }} of
          {{ review.length }}
          <!-- <br />
          Reviews -->
        </span>
        <button class="btn btn-light px-3 py-1" @click="next">
          <span style="font-size: 15px"> > </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import "swiper/swiper-bundle.min.css";
import CustomStarRating from "../CustomStarRating";
export default {
  components: {
    CustomStarRating,
    Swiper: () => import("vue-awesome-swiper").then((m) => m.Swiper),
    SwiperSlide: () => import("vue-awesome-swiper").then((m) => m.SwiperSlide),
  },
  props: {
    review: Array,
  },
  data() {
    return {
      currentIndex: 0,
      swiperOption: {
        slidesPerView: 1,
      },
    };
  },
  methods: {
    prev() {
      this.$refs.reviewSwiper.$swiper.slidePrev();
    },
    next() {
      this.$refs.reviewSwiper.$swiper.slideNext();
    },
    getActiveIndex() {
      this.currentIndex = this.$refs.reviewSwiper.$swiper.activeIndex;
    },
  },
};
</script>
