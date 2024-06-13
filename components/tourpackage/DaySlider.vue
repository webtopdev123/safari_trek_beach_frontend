<template>
  <div class="position-relative day-slider">
    <VueSlickCarousel :autoplay="true" style="width: 250px">
      <div v-for="(item, i) in images" :key="'d' + i">
        <img class="w-100" :src="item" height="auto" />
      </div>
    </VueSlickCarousel>
    <p
      class="
        position-absolute
        w-100
        mt-2
        top-100
        start-50
        translate-middle
        text-white text-center
        py-1
        px-2
      "
    >
      {{ accomName }}
    </p>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "DaySlider",
  components: {
    VueSlickCarousel,
  },

  props: {
    accomName: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      images: [
        require("@/assets/images/transport_activity/Hot air balloon safari/Desktop/1.jpg"),
        require("@/assets/images/transport_activity/Hot air balloon safari/Desktop/2.jpg"),
        require("@/assets/images/transport_activity/Hot air balloon safari/Desktop/3.jpg"),
        require("@/assets/images/transport_activity/Hot air balloon safari/Desktop/4.jpg"),
        require("@/assets/images/transport_activity/Hot air balloon safari/Desktop/5.jpg"),
        require("@/assets/images/transport_activity/Hot air balloon safari/Desktop/6.jpg"),
        require("@/assets/images/transport_activity/Hot air balloon safari/Desktop/7.jpg"),
        require("@/assets/images/transport_activity/Hot air balloon safari/Desktop/8.jpg"),
        require("@/assets/images/transport_activity/Hot air balloon safari/Desktop/9.jpg"),
        require("@/assets/images/transport_activity/Hot air balloon safari/Desktop/10.jpg"),
        require("@/assets/images/transport_activity/Hot air balloon safari/Desktop/11.jpg"),
        require("@/assets/images/transport_activity/Hot air balloon safari/Desktop/12.jpg"),
        require("@/assets/images/transport_activity/Hot air balloon safari/Desktop/13.jpg"),
        require("@/assets/images/transport_activity/Hot air balloon safari/Desktop/14.jpg"),
        require("@/assets/images/transport_activity/Hot air balloon safari/Desktop/15.jpg"),
        require("@/assets/images/transport_activity/Hot air balloon safari/Desktop/16.jpg"),
        require("@/assets/images/transport_activity/Hot air balloon safari/Desktop/17.jpg"),
        require("@/assets/images/transport_activity/Hot air balloon safari/Desktop/18.jpg"),
        require("@/assets/images/transport_activity/Hot air balloon safari/Desktop/19.jpg"),
        require("@/assets/images/transport_activity/Hot air balloon safari/Desktop/20.jpg"),
        require("@/assets/images/transport_activity/Hot air balloon safari/Desktop/21.jpg"),
        require("@/assets/images/transport_activity/Hot air balloon safari/Desktop/22.jpg"),
        require("@/assets/images/transport_activity/Hot air balloon safari/Desktop/23.jpg"),
      ],
    };
  },
};
</script> 

<style>
.day-slider {
  z-index: 2;
}
.day-slider p {
  background-color: #666666;
}
.day-slider .slick-prev:before,
.day-slider .slick-next:before {
  color: #666666 !important;
}
</style>
