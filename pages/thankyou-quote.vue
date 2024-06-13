<template>
  <div class="px-3 py-5 text-center position-relative">
    <div class="bg-banner"></div>
    <h1 class="h2 mt-5 fw-bolder text-white">Thank you</h1>
    <p class="h5 mb-0 mt-5 text-white">Successfully sent.</p>
    <p class="h5 mt-3 text-white">
      We Recommend Sending Request to 2 other tour Operator To Get The Best
      Deal.
    </p>
    <div class="text-center my-5">
      <router-link to="/our-tours/" class="btn btn-danger">
        Compare Packages
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "thankyou-quote",
  metaInfo() {
    return {
      title: "Thank you for your quote! - Safari-Trek-Beach.com",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
    };
  },
};
</script>

<style scoped>
.bg-banner {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom center;
  background-image: url("~@/assets/images/banner08.jpg");
  z-index: -1;
}
</style>
