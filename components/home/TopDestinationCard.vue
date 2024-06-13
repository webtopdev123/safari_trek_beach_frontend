<template>
  <div
    class="card mb-3 mx-2"
    :title="data.title"
    v-lazy:background-image="data.image.desktop[0]"
  >
    <div
      v-lazy:background-image="data.image.desktop[randIndex]"
      class="bg-image hover-overlay ripple"
      data-mdb-ripple-color="light"
    >
      <div class="overlay-text">
        <span>
          {{ data.title }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      randIndex: 0,
    };
  },

  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  created() {
    if (process.client) {
      setTimeout(() => this.changeBanner(), 5000);
    }
  },

  methods: {
    changeBanner() {
      var time = this;
      setInterval(function () {
        time.randIndex = Math.floor(
          Math.random() * time.data["image"]["desktop"].length
        );
      }, 5000);
    },
  },
};
</script>
  
  <style scoped lang="scss">
.card {
  position: relative;
  top: 0;
  transition: box-shadow 0.2s ease-in-out, top ease 0.5s;
  box-shadow: 0px 2px 3px rgb(0 0 0 / 18%);
  cursor: pointer;
  &:hover {
    position: relative;
    top: -7px;
    transition: box-shadow 0.2s ease-in-out, top ease 0.5s;
    box-shadow: 0px 1px 13px #666;
    cursor: pointer;
  }
}
.bg-image {
  background-size: cover;
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 100%;
  -webkit-transition: background-image 1s ease-in-out;
  transition: background-image 1s ease-in-out;
}

.overlay-text {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
  font-family: coolvetica;
  color: white;
  font-size: 25px;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-weight: 300;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding-right: 10px;
  padding-left: 10px;
  span {
    text-shadow: 2px 2px black;
  }
}
</style>
  