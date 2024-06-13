<template>
  <div class="border rounded shadow-sm">
    <VueSlickCarousel :autoplay="true">
      <div v-for="(item, i) in images" :key="'d' + i">
        <img class="w-100 rounded-top" :src="item" height="auto" />
        <p class="text-center my-2">
          Hot air balloon safari (#{{ i + 1 }} of {{ images.length }})
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
  name: "Balloon",
  components: {
    VueSlickCarousel,
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
