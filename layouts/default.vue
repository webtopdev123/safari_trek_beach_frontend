<template>
  <div class="layout" id="app">
    <div class="container-fluid" style="padding-left: 0px; padding-right: 0px">
      <NavBar></NavBar>
      <nuxt />
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
export default {
  scrollToTop: true,
  name: "App",
  components: {
    NavBar,
    Footer,
  },
  data: () => ({}),
};
</script>
<style lang="scss">
#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: space-between;
}
@import "../assets/scss/main.scss";
</style>

