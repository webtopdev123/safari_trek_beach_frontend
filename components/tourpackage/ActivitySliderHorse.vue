<template>
  <div class="border rounded shadow-sm">
    <VueSlickCarousel :autoplay="true">
      <div v-for="(item, i) in images" :key="'d' + i">
        <img class="w-100 rounded-top" :src="item" height="auto" />
        <p class="text-center my-2">
          Horse Ride Safari (#{{ i + 1 }} of {{ images.length }})
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
  name: "Horse",
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      images: [
        require("@/assets/images/transport_activity/Horse ride safari/Desktop/1.jpg"),
        require("@/assets/images/transport_activity/Horse ride safari/Desktop/2.jpg"),
        require("@/assets/images/transport_activity/Horse ride safari/Desktop/3.jpg"),
        require("@/assets/images/transport_activity/Horse ride safari/Desktop/4.jpg"),
        require("@/assets/images/transport_activity/Horse ride safari/Desktop/5.jpg"),
      ],
    };
  },
};
</script>
