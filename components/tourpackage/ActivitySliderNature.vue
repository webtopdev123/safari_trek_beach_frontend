<template>
  <div class="border rounded shadow-sm">
    <VueSlickCarousel :autoplay="true">
      <div v-for="(item, i) in images" :key="'d' + i">
        <img class="w-100 rounded-top" :src="item" height="auto" />
        <p class="text-center my-2">
          Nature hikes or walk (#{{ i + 1 }} of {{ images.length }})
        </p>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "Nature",
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      images: [
        require("@/assets/images/transport_activity/Nature hikes or walk/Desktop/1.jpg"),
        require("@/assets/images/transport_activity/Nature hikes or walk/Desktop/2.jpg"),
        require("@/assets/images/transport_activity/Nature hikes or walk/Desktop/3.jpg"),
        require("@/assets/images/transport_activity/Nature hikes or walk/Desktop/4.jpg"),
        require("@/assets/images/transport_activity/Nature hikes or walk/Desktop/5.jpg"),
        require("@/assets/images/transport_activity/Nature hikes or walk/Desktop/6.jpg"),
        require("@/assets/images/transport_activity/Nature hikes or walk/Desktop/7.jpg"),
        require("@/assets/images/transport_activity/Nature hikes or walk/Desktop/8.jpg"),
        require("@/assets/images/transport_activity/Nature hikes or walk/Desktop/9.jpg"),
        require("@/assets/images/transport_activity/Nature hikes or walk/Desktop/10.jpg"),
        require("@/assets/images/transport_activity/Nature hikes or walk/Desktop/12.jpg"),
        require("@/assets/images/transport_activity/Nature hikes or walk/Desktop/13.jpg"),
        require("@/assets/images/transport_activity/Nature hikes or walk/Desktop/14.jpg"),
        require("@/assets/images/transport_activity/Nature hikes or walk/Desktop/15.jpg"),
        require("@/assets/images/transport_activity/Nature hikes or walk/Desktop/16.jpg"),
      ],
    };
  },
};
</script>
