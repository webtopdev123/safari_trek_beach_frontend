<template>
  <transition name="exit-intent-fade">
    <div class="exit-wrap">
      <div
        v-click-outside-dropdown="closePopUp"
        class="
          position-fixed
          top-50
          start-50
          translate-middle
          bg-white
          p-3 p-md-5
          shadow-lg
          exit
        "
      >
        <div
          style="top: 5px; right: 15px; font-size: 20px; cursor: pointer"
          class="
            text-danger
            float-right
            position-absolute
            text-decoration-none
            p-2
          "
          @click="closePopUp"
        >
          ✕
        </div>

        <h4 class="fw-bold text-center text-capitalize mt-3 mt-md-0 mb-3">
          Do you want to get a picture perfect experiences?
        </h4>
        <div class="row border border-danger g-0 p-3">
          <div class="col-12 col-md-7 col-sm-12 px-3">
            <h3 class="fw-bold h2 mt-2 mt-md-4 fs-4 mb-0">Get Tips</h3>
            <h2 class="text-danger h1 fw-bold my-2 fs-2">How To Avoid Bad</h2>
            <h3 class="fw-bold h2 fs-4 mt-0">Tour Experience</h3>
            <form class="button-wrap mt-3 mt-md-5" @submit.prevent="delay">
              <input
                v-model="email"
                class="w-100 px-4 py-2 form-control"
                placeholder="Enter Your Email Here"
                required
                type="email"
              />
              <div class="mt-2 mt-md-3">
                <button
                  type="submit"
                  class="btn btn-danger py-2 w-100"
                  :disabled="disabled"
                >
                  I Want A Picture Perfect Experience
                </button>
              </div>
              <div class="text-center mt-4">
                <a @click="closePopUp"> No thanks </a>
              </div>
            </form>
          </div>
          <div class="col-12 col-md-5 col-sm-12 mt-2">
            <div class="row">
              <div class="col-6 col-sm-6 col-md-12">
                <h6 class="text-center fw-bold fst-italic mt-2">From</h6>
                <div class="text-center">
                  <img :src="require('@/assets/images/sad.png')" width="100" />
                </div>
              </div>
              <div class="col-6 col-sm-6 col-md-12">
                <h6 class="text-center mt-2 mt-md-4 fw-bold fst-italic">To</h6>
                <div class="text-center">
                  <img
                    :src="require('@/assets/images/happy.jpg')"
                    width="100"
                  />
                </div>
              </div>
            </div>

            <h6 class="text-center mt-2 mt-sm-4 fs-6 fw-bold fst-italic">
              Return Home With Best Pictures, Memories and Smile
            </h6>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "ExitIntent",
  directives: {
    "click-outside-dropdown": {
      bind: function (el, binding) {
        const ourClickEventHandler = (event) => {
          if (!el.contains(event.target) && el !== event.target) {
            binding.value(event);
          }
        };
        el.__vueClickEventHandler__ = ourClickEventHandler;
        document.addEventListener("click", ourClickEventHandler);
      },
      unbind: function (el) {
        document.removeEventListener("click", el.__vueClickEventHandler__);
      },
    },
  },
  props: {
    isSent: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      /* Change it to false after debugging/review */
      debugging: true,
      /* Value in days */
      showAfterDays: 10,
      /* Value in minutes */
      minDelayBeforeShow: 0.1,
      /* 0 - 100 */
      scrollPercentageBeforeShow: 0,
      scrollPercentageFlag: false,
      isMobile: false,
      canBeShown: false,
      avoid_repetitive: true,

      disabled: false,
      timeout: null,
      email: "",
    };
  },

  mounted: function () {
    this.canBeShown = this.debugging == true ? true : false;
    this.checkLocalStorage();
    this.checkDevice();
    this.checkScrollPercentage();

    if (!this.isMobile) {
      setTimeout(() => {
        document.addEventListener("mouseout", (evt) => {
          this.mouseOutCallback(evt);
        });
      }, this.minDelayBeforeShow * 60000); /* Convert ms to minutes */
    }
    setTimeout(() => {
      let isScrolling, startPos, finalPos, destUpwards, i;
      document.addEventListener("scroll", () => {
        if (!this.scrollPercentageFlag) this.checkScrollPercentage();
        if (this.isMobile) {
          this.scrollCallback(isScrolling, startPos, finalPos, destUpwards, i);
        }
      });
    }, this.minDelayBeforeShow * 60000); /* Convert ms to minutes */
  },
  beforeDestroy() {
    clearTimeout(this.timeout);
  },

  methods: {
    delay() {
      this.disabled = true;
      this.timeout = setTimeout(() => {
        this.disabled = false;
      }, 5000);
      this.$emit("modalClick", this.email);
      this.$emit("closePopUp");
    },

    closePopUp() {
      this.$emit("closePopUp");
    },
    showPopUp() {
      this.$emit("showPopUp");
      let value = {
        value: true,
        timestamp: new Date().getTime(),
      };
      localStorage.setItem("exitintent", JSON.stringify(value));
      /* False cause we only want to present the popUp once */
      this.canBeShown = this.debugging == true ? true : false;
    },
    checkLocalStorage() {
      if (localStorage.getItem("exitintent")) {
        let value = JSON.parse(localStorage.getItem("exitintent"));
        let old = value.timestamp;
        let current = new Date().getTime();
        this.canBeShown =
          current - old > this.showAfterDays * 86400000 ? true : false;
        /* Ignore the above calculation if we are in debug mode*/
        if (this.debugging) this.canBeShown = true;
      } else this.canBeShown = true;
    },
    checkDevice() {
      let self = this;
      /* eslint-disable */
      (function (a) {
        if (
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            a
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            a.substr(0, 4)
          )
        )
          self.isMobile = true;
      })(navigator.userAgent || navigator.vendor || window.opera);
      /* eslint-enable */
    },
    checkScrollPercentage() {
      if (this.scrollPercentageBeforeShow == 0) {
        this.scrollPercentageFlag = true;
        return;
      }

      let h = document.documentElement;
      let b = document.body;
      let st = "scrollTop";
      let sh = "scrollHeight";

      let percentage =
        ((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight)) * 100;

      this.scrollPercentageFlag =
        this.scrollPercentageBeforeShow <= percentage ? true : false;
    },
    mouseOutCallback(evt) {
      this.checkLocalStorage();
      if (
        evt.toElement === null &&
        evt.relatedTarget === null &&
        this.canBeShown &&
        this.scrollPercentageFlag &&
        this.avoid_repetitive &&
        this.isSent
      ) {
        this.showPopUp();
        this.avoid_repetitive = false;
      }
    },
    scrollCallback(isScrolling, startPos, finalPos, destUpwards, i = 0) {
      i++;
      if (i == 1) startPos = window.scrollY;

      /* Clear our timeout throughout the scroll */
      window.clearTimeout(isScrolling);

      isScrolling = setTimeout(() => {
        finalPos = window.scrollY;
        destUpwards = finalPos - startPos;
        if (
          destUpwards < -300 &&
          this.canBeShown &&
          this.scrollPercentageFlag &&
          this.avoid_repetitive &&
          this.isSent
        ) {
          this.showPopUp();
          this.avoid_repetitive = false;
        }
      }, 50);
    },
  },
};
</script>

<style scoped>
.exit-intent-fade-enter,
.exit-intent-fade-leave-active {
  opacity: 0;
}

.exit-intent-fade-enter-active,
.exit-intent-fade-leave-active {
  transition: opacity 0.5s ease;
}
.exit-wrap {
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 1030;
  top: 0;
}
.exit {
  z-index: 1031;
  max-width: 750px;
  width: 100%;
  border-radius: 10px;
}
.button-wrap {
  max-width: 400px;
}
input,
button {
  height: 40px;
  text-align: center;
  font-size: 18px;
}
input {
  border-color: gray;
  font-size: 18px;
}
.h1 {
  font-size: 30px;
}
.border {
  border-radius: 10px;
}
a {
  cursor: pointer;
}
a:hover {
  text-decoration: underline !important;
}

@media (max-width: 768px) {
  img {
    width: 80px;
  }
  form {
    margin: auto;
  }
  input,
  button {
    font-size: 14px;
    height: 38px;
  }
  h3 {
    text-align: center;
    font-size: 17px !important;
  }
  h2 {
    text-align: center;
    font-size: 20px !important;
  }
  h5 {
    font-size: 15px;
  }
  h4 {
    font-size: 18px;
  }
  .exit {
    border-radius: 0;
  }
}
</style>
