/* eslint-disable vue/no-v-html */ /* eslint-disable */
<template>
  <div style="margin-top: -60px">
    <div
      v-for="(item, index6) in packagedataday"
      :key="'E' + index6"
      class="itinery mt-5 pt-5"
    >
      <div class="itinery-title mb-3">
        <h5 class="fw-bold text-danger">Day {{ index6 + 1 }}</h5>
        <h5 class="fw-bold my-0">
          {{ item.title }}
        </h5>
      </div>
      <div v-if="item.image != null">
        <img
          :src="item.image"
          class="w-100"
          :alt="'Oops! ' + item.image + 'is temporarily unavailable.'"
          @error="changeImg"
        />
      </div>
      <!-- <div v-else>
                <h4 class="fw-bold my-2">Day {{ index6 }}</h4>
                <h5 class="fw-bold my-0">
                    {{ item.title }}
                </h5>
            </div> -->
      <div class="mt-3">
        <!-- eslint-disable vue/no-v-html -->
        <div class="itinery-content" v-html="item.description" />
        <!--eslint-enable-->
      </div>
      <div class="mt-4 mb-0">
        <div class="fw-bold mb-2 d-flex align-items-center">
          <img
            src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%235e0302' width='24' height='16'%3E%3Cpath d='M5 9.5a2 2 0 100-4 2 2 0 000 4zm4 0h10.667a.833.833 0 00.623-1.386C18.233 5.8 14.1 4.372 9.309 4.51a.833.833 0 00-.809.832V9a.5.5 0 00.5.5z'/%3E%3Cpath d='M23 3.75a1 1 0 00-1 1v5.5a.5.5 0 01-.5.5h-19a.5.5 0 01-.5-.5v-8.5a1 1 0 00-2 0v12.5a1 1 0 102 0v-1a.5.5 0 01.5-.5h19a.5.5 0 01.5.5v1a1 1 0 002 0v-9.5a1 1 0 00-1-1z'/%3E%3C/svg%3E"
            width="24"
          />
          <span class="ms-2"> Accommodation: </span>
          <span
            v-if="
              !item.accomName &&
              !item.accomLevel &&
              !item.accomType &&
              !item.accomRating
            "
            class="fst-italic fw-normal"
          >
            &nbsp;Not included
          </span>
        </div>

        <ul>
          <li v-if="item.accomName != null" class="include">
            Name: <strong>{{ item.accomName }}</strong>
          </li>

          <li
            v-if="item.accomLevel != null && item.accomType != null"
            class="include"
          >
            Standard:
            <strong> {{ item.accomLevel }}&nbsp;{{ item.accomType }}</strong>
          </li>

          <!-- <li v-if="item.accomRating != null" class="my-2">
                        Rating:
                        <strong> Great {{ item.accomRating }}&nbsp;Star {{ item.accomType }}</strong>
                    </li> -->
          <li
            v-if="
              item.accomName != null &&
              item.accomPhotos != undefined &&
              item.accomPhotos.length != 0
            "
          >
            <div class="d-flex flex-wrap acc-gallery mt-4">
              <div
                v-for="(src, index) in item.accomPhotos.slice(0, size)"
                :key="src"
                class="position-relative me-1 mb-1"
              >
                <img :src="src" @click="show(index)" width="120" />
              </div>

              <div
                class="position-relative me-1 mb-1"
                v-if="item.accomPhotos.length > size"
              >
                <img :src="item.accomPhotos[size]" @click="show(size)" />
                <div
                  class="
                    text-center
                    position-absolute
                    top-50
                    start-50
                    translate-middle
                    fw-bold
                    text-white
                    imgbox
                  "
                >
                  +{{ item.accomPhotos.length - size }}<br />
                  Pictures
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <!-- <div v-if="facilities != undefined" class="mt-4 mb-0">
                <h6 v-if="facilities[index6] != undefined" class="fw-bold">
                    Important Facilities:
                </h6>

                <ul>
                    <li v-for="(facility, index) in facilities[index6]" :key="index" class="my-2">
                        {{ facility }}
                    </li>
                </ul>
            </div> -->

      <div class="mt-4 meal">
        <div class="mb-2 fw-bold d-flex align-items-center meal ps-1">
          <img
            src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%235e0302' width='18' height='24'%3E%3Cpath fill='%235e0302' d='M12.5 0a.75.75 0 00-.75.75V23a1 1 0 002 0v-8a.5.5 0 01.5-.5H16a1.244 1.244 0 001.25-1.25v-.007C17.186 6.055 14.832 0 12.5 0zM7.75 0a1 1 0 00-1 1v5c0 .524-.204 1.026-.571 1.4a.251.251 0 01-.429-.175V1a1 1 0 00-2 0v6.223a.251.251 0 01-.429.175A1.993 1.993 0 012.75 6V1a1 1 0 00-2 0v5a4.009 4.009 0 002.667 3.772.5.5 0 01.333.471V23a1 1 0 102 0V10.243a.5.5 0 01.333-.471A4.009 4.009 0 008.75 6V1a1 1 0 00-1-1z'/%3E%3C/svg%3E"
            height="24"
          />
          <span class="ms-2">Meals & Drinks:</span>
          <span v-if="!item.mealsDrinks" class="fst-italic fw-normal">
            Not included
          </span>
        </div>

        <ul>
          <li
            v-if="
              item.mealsDrinks.indexOf('Breakfast') > -1 ||
              item.mealsDrinks.indexOf('Lunch') > -1 ||
              item.mealsDrinks.indexOf('Diner') > -1
            "
            class="include"
          >
            <span>Drinks:</span>
            <strong v-if="item.mealsDrinks.indexOf('Breakfast') > -1"
              >Breakfast,
            </strong>
            <strong v-if="item.mealsDrinks.indexOf('Lunch') > -1"
              >Lunch,
            </strong>
            <strong v-if="item.mealsDrinks.indexOf('Diner') > -1"
              >Dinner,
            </strong>
            <span
              style="
                width: 20px;
                display: inline-block;
                background: white;
                margin-left: -8.5px;
                color: white;
              "
            >
              .
            </span>
          </li>

          <li
            v-if="
              item.mealsDrinks.indexOf('Drinking water') > -1 ||
              item.mealsDrinks.indexOf('Non-alcoholic drinks') > -1 ||
              item.mealsDrinks.indexOf('Beer and wine') > -1 ||
              item.mealsDrinks.indexOf('Spirits/liquor') > -1
            "
            class="include"
          >
            <span>Meals:</span>
            <strong v-if="item.mealsDrinks.indexOf('Drinking water') > -1"
              >Drinking water,
            </strong>
            <strong v-if="item.mealsDrinks.indexOf('Non-alcoholic drinks') > -1"
              >Non-alcoholic drinks,
            </strong>
            <strong v-if="item.mealsDrinks.indexOf('Beer and wine') > -1"
              >Beer and wine,
            </strong>
            <strong v-if="item.mealsDrinks.indexOf('Spirits/liquor') > -1"
              >Spirits/liquor,
            </strong>
            <span
              style="
                width: 20px;
                display: inline-block;
                background: white;
                margin-left: -8.5px;
                color: white;
              "
            >
              .
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    packagedataday: {
      type: Array,
      required: true,
    },
    // packagedatadaymeal: {
    //   type: Object,
    //   required: true,
    // },
    // facilities: {
    //   type: Object,
    //   required: true
    // }
  },

  data() {
    return {
      size: 4,
      images: [
        "https://loremflickr.com/320/240?random=1",
        "https://loremflickr.com/320/240?random=2",
        "https://loremflickr.com/320/240?random=3",
        "https://loremflickr.com/320/240?random=4",
        "https://loremflickr.com/320/240?random=5",
        "https://loremflickr.com/320/240?random=6",
        "https://loremflickr.com/320/240?random=7",
        "https://loremflickr.com/320/240?random=8",
        "https://loremflickr.com/320/240?random=9",
        "https://loremflickr.com/320/240?random=10",
        "https://loremflickr.com/320/240?random=11",
        "https://loremflickr.com/320/240?random=12",
        "https://loremflickr.com/320/240?random=14",
        "https://loremflickr.com/320/240?random=25",
        "https://loremflickr.com/320/240?random=54",
      ],
    };
  },

  created() {
    if (this.isMobile()) {
      this.size = 2;
    }
  },

  methods: {
    isMobile() {
      /* eslint-disable */

      let check = false;
      (function (a) {
        if (
          /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
            a
          ) ||
          /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            a.substr(0, 4)
          )
        )
          check = true;
      })(navigator.userAgent || navigator.vendor || window.opera);
      return check;
    },
    changeImg(event) {
      event.target.src =
        "https://gallery.safaritrekbeach.com/images/gallery/tanzania/tour_gallery/DARTOGA_AND_HADZABE_1.jpg";
    },
    show(index) {
      this.$viewerApi({
        options: {
          toolbar: true,
          initialViewIndex: index,
        },
        images: this.images,
      });
    },
  },
};
</script>

<style scoped lang="scss">
.itinery-title {
  width: 100%;
  color: black;
  font-size: 2rem;
  line-height: 2.5rem;
  font-weight: 700;
  z-index: 3;
  h5::first-letter {
    text-transform: uppercase;
  }
}

ul li {
  list-style: none;
  font-size: 16px;
  margin-bottom: 5px;
}

ul li.include::before {
  content: "✓";
  color: #f93154;
  display: inline-block;
  width: 1.5em;
}

ul li.exclude::before {
  content: "✗";
  color: black;
  display: inline-block;
  width: 1.5em;
}

.meal img {
  transform: rotate(-90deg);
}

.imgbox {
  cursor: pointer;
  background-color: rgba($color: #000000, $alpha: 0.5);
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}
.acc-gallery {
  img {
    cursor: pointer;
    width: 120px;
    @media (max-width: 767px) {
      width: 90px;
    }
  }
}
</style>
