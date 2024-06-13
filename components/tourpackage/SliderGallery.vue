<template>
  <div>
    <h4 class="fw-bold text-center my-3">Company Photo</h4>
    <swiper ref="photoSwiper" :options="swiperOption">
      <swiper-slide v-for="(item, index8) in gallery" :key="'G23' + index8">
        <div v-lazy:background-image="item" class="bg-image rounded-0" />
        <div
          class="
            text-center
            position-relative
            py-3
            d-flex
            align-items-center
            justify-content-center
          "
        >
          <div
            slot="button-prev"
            class="swiper-button-prev text-muted"
            @click="prev()"
          />
          <button class="btn btn-danger my-3 mx-5">Company Photo</button>
          <div
            slot="button-next"
            class="swiper-button-next text-muted"
            @click="next()"
          />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
// import { Swiper as SwiperClass, Autoplay } from "swiper/swiper.esm";
// SwiperClass.use([Autoplay]);
import "swiper/swiper-bundle.min.css";
export default {
  components: {
    Swiper: () => import("vue-awesome-swiper").then((m) => m.Swiper),
    SwiperSlide: () => import("vue-awesome-swiper").then((m) => m.SwiperSlide),
    // Autoplay,
  },
  props: {
    gallery: Array,
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        slidesPerView: 1,
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false,
        // },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  methods: {
    prev() {
      this.$refs.photoSwiper.$swiper.slidePrev();
    },
    next() {
      this.$refs.photoSwiper.$swiper.slideNext();
    },
  },
};
</script>

<style lang="scss" scoped>
.swiper-button-prev,
.swiper-button-next {
  position: relative;
}
.swiper-button-next:after,
.swiper-button-prev:after {
  font-size: 25px;
}
button {
  font-size: 17px;
  padding: 2px 20px;
}
</style>
