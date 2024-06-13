<template>
  <div class="gallery">
    <h4 class="fw-bold mt-3">Photo Gallery</h4>
    <div class="row">
      <div class="col-lg-6 col-md-6 col-xs-12 mt-4">
        <img :src="gallery[0]" class="w-100" height="auto" @error="changeImg" />
      </div>
      <div class="col-lg-6 col-md-6 col-xs-12 mt-4">
        <img :src="gallery[1]" class="w-100" height="auto" @error="changeImg" />
      </div>
    </div>

    <VueSlickCarousel
      v-if="gallery.length > 2"
      :dots="true"
      :autoplay="true"
      class="mt-4"
    >
      <div v-for="(item, index8) in gallery.slice(2)" :key="'G23' + index8">
        <img
          :src="item"
          class="w-100"
          height="auto"
          :alt="item + ' is an Invalid image URL'"
          @error="changeImg"
        />
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  name: "Gallery",
  props: {
    gallery: {
      type: Array,
      required: true,
    },
  },

  components: {
    VueSlickCarousel,
  },

  methods: {
    changeImg(event) {
      // console.log("Image failed to load, setting fallback.");
      event.target.src =
        "https://gallery.safaritrekbeach.com/images/gallery/tanzania/tour_gallery/DARTOGA_AND_HADZABE_1.jpg";
    },
  },
};
</script>
