<template>
  <div class="border rounded shadow-sm">
    <VueSlickCarousel :autoplay="true">
      <div v-for="(item, i) in images" :key="'d' + i">
        <img class="w-100 rounded-top" :src="item" height="auto" />
        <p class="text-center my-2">
          Evening or Night game driver (#{{ i + 1 }} of {{ images.length }})
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
  name: "Night",
  components: {
    VueSlickCarousel,
  },
  data() {
    return {
      images: [
        require("@/assets/images/transport_activity/Evenin or gnight game drivers/Desktop/1.jpg"),
        require("@/assets/images/transport_activity/Evenin or gnight game drivers/Desktop/2.jpg"),
        require("@/assets/images/transport_activity/Evenin or gnight game drivers/Desktop/3.jpg"),
        require("@/assets/images/transport_activity/Evenin or gnight game drivers/Desktop/4.jpg"),
        require("@/assets/images/transport_activity/Evenin or gnight game drivers/Desktop/5.jpg"),
        require("@/assets/images/transport_activity/Evenin or gnight game drivers/Desktop/6.jpg"),
        require("@/assets/images/transport_activity/Evenin or gnight game drivers/Desktop/7.jpg"),
        require("@/assets/images/transport_activity/Evenin or gnight game drivers/Desktop/8.jpg"),
        require("@/assets/images/transport_activity/Evenin or gnight game drivers/Desktop/9.jpg"),
        require("@/assets/images/transport_activity/Evenin or gnight game drivers/Desktop/10.jpg"),
        require("@/assets/images/transport_activity/Evenin or gnight game drivers/Desktop/11.jpg"),
        require("@/assets/images/transport_activity/Evenin or gnight game drivers/Desktop/12.jpg"),
      ],
    };
  },
};
</script>
