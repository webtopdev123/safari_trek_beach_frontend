<template>
  <div class="border rounded shadow-sm">
    <VueSlickCarousel :autoplay="true">
      <div v-for="(item, i) in images" :key="'d' + i">
        <img class="w-100 rounded-top" :src="item" height="auto" />
        <p class="text-center my-2">
          Boat Trip (#{{ i + 1 }} of {{ images.length }})
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
  name: "Boat",
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      images: [
        require("@/assets/images/transport_activity/Boat trip/1.jpg"),
        require("@/assets/images/transport_activity/Boat trip/2.jpg"),
        require("@/assets/images/transport_activity/Boat trip/3.jpg"),
        require("@/assets/images/transport_activity/Boat trip/4.jpg"),
        require("@/assets/images/transport_activity/Boat trip/5.jpg"),
        require("@/assets/images/transport_activity/Boat trip/6.jpg"),
        require("@/assets/images/transport_activity/Boat trip/7.jpg"),
        require("@/assets/images/transport_activity/Boat trip/8.jpg"),
        require("@/assets/images/transport_activity/Boat trip/9.jpg"),
        require("@/assets/images/transport_activity/Boat trip/10.jpg"),
        require("@/assets/images/transport_activity/Boat trip/11.jpg"),
      ],
    };
  },
};
</script>
