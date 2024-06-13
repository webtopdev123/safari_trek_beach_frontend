<template>
  <div class="border rounded shadow-sm">
    <VueSlickCarousel :autoplay="true">
      <div v-for="(item, i) in images" :key="'d' + i">
        <img class="w-100 rounded-top" :src="item" height="auto" />
        <p class="text-center my-2">
          Walking Safari (#{{ i + 1 }} of {{ images.length }})
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
  name: "Walking",
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      images: [
        require("@/assets/images/transport_activity/Walking safari/1.jpg"),
        require("@/assets/images/transport_activity/Walking safari/2.jpg"),
        require("@/assets/images/transport_activity/Walking safari/3.jpg"),
        require("@/assets/images/transport_activity/Walking safari/4.jpg"),
        require("@/assets/images/transport_activity/Walking safari/5.jpg"),
        require("@/assets/images/transport_activity/Walking safari/6.jpg"),
        require("@/assets/images/transport_activity/Walking safari/9.jpg"),
        require("@/assets/images/transport_activity/Walking safari/10.jpg"),
        require("@/assets/images/transport_activity/Walking safari/11.jpg"),
        require("@/assets/images/transport_activity/Walking safari/12.jpg"),
        require("@/assets/images/transport_activity/Walking safari/13.jpg"),
        require("@/assets/images/transport_activity/Walking safari/14.jpg"),
      ],
    };
  },
};
</script>
