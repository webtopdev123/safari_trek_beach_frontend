<template>
  <a
    class="card mb-5 mx-2 tour-card"
    target="_blank"
    :href="'/tour-package/' + tourData.id"
  >
    <div
      v-lazy:background-image="tourData.image"
      class="bg-image hover-overlay ripple"
      data-mdb-ripple-color="light"
    >
      <div class="tour_title">
        {{ tourData.noOfDay }}-Day {{ tourData.title }}
      </div>
      <img
        v-if="tourData.cardDetails.showOperatorLogo"
        v-lazy="tourData.operator.logo"
        class="position-absolute rounded-bottom top-0 ms-4"
        alt="Operator Logo"
        width="70"
      />
    </div>
    <div class="card-body position-relative mx-3 px-1">
      <div v-if="tourData.cardDetails.showTag" class="tag-image">
        <img
          v-if="tourData.tag == 'review'"
          v-lazy="require('@/assets/images/best-review.png')"
          style="margin-top: -3px; width: 60px; height: auto"
        />
        <img
          v-else-if="tourData.tag == 'seller'"
          v-lazy="require('@/assets/images/bestseller.png')"
          style="width: 60px; height: auto"
        />
        <img
          v-else-if="tourData.tag == 'rated'"
          v-lazy="require('@/assets/images/toprated2.png')"
          style="width: 100px; height: auto"
        />
        <img
          v-else-if="tourData.tag == 'offer'"
          v-lazy="require('@/assets/images/best_offer.png')"
          style="width: 110px; height: auto; margin-top: -10px"
        />
      </div>
      <p class="card-text mb-0">
        <strong v-if="tourData.noOfDay == 1"
          >{{ tourData.noOfDay }} Day:
        </strong>
        <strong v-else-if="tourData.noOfDay > 1"
          >{{ tourData.noOfDay }} Days:
        </strong>

        <span v-if="tourData.noOfNight == 1"
          >{{ tourData.noOfNight }} Night</span
        >
        <span v-else>{{ tourData.noOfNight }} Nights</span>
      </p>
      <p class="card-text my-2 text-capitalize">
        <strong> Country: </strong>
        Tanzania
      </p>
      <p class="card-text my-2 text-capitalize">
        <strong> Start & End: </strong>
        {{ tourData.startCity }} -
        {{ tourData.endCity }}
      </p>
      <p class="card-text my-2 text-capitalize">
        <strong> Tour Type: </strong>
        {{ getTourLevel(tourData.levels) }}
      </p>
      <p class="card-text trip-route mb-0 text-capitalize">
        <strong> Destination: </strong>
        {{ getMidRoute(tourData.destinations) }}
      </p>
    </div>
    <div class="row gx-0" style="position: relative; font-size: 1rem">
      <div>
        <p class="card-text mb-0 mt-2 ps-3 text-capitalize">
          {{ company_name }}
        </p>
        <div class="card-text ps-3 d-flex">
          <CustomStarRating :rating="avgReview" :size="18" class="mb-2" />
          <strong v-if="avgReview == '5'"> &nbsp;5.0/5&nbsp;</strong>
          <strong v-else-if="avgReview == '4'"> &nbsp;4.0/5&nbsp;</strong>
          <strong v-else-if="avgReview == '3'"> &nbsp;3.0/5&nbsp;</strong>
          <strong v-else-if="avgReview == '2'"> &nbsp;2.0/5&nbsp;</strong>
          <strong v-else-if="avgReview == '1'"> &nbsp;1.0/5&nbsp;</strong>
          <strong v-else> &nbsp;{{ Math.round(avgReview * 10) / 10 }}/5</strong>
          <span>({{ sumReview }}Rvw)</span>
        </div>
      </div>
      <div class="price">
        <p class="fs-6 mb-0 text-dark">
          <small>From</small>
        </p>
        <p class="mb-1">
          <strong>
            {{
              (tourData.adultCurrency * (1 - tourData.currencyDiscount * 0.01))
                | currency
            }}
          </strong>
          &nbsp;<small>pp</small>
        </p>
      </div>
      <div
        v-if="
          tourData.cardDetails.showDiscountIcon &&
          tourData.currencyDiscount != 0
        "
        class="discount text-white bg-success p-2 rounded-circle"
        style="transform: rotate(30deg)"
      >
        {{ tourData.currencyDiscount }}%<br />OFF
      </div>
    </div>
  </a>
</template>

<script>
import CustomStarRating from "../components/CustomStarRating";
export default {
  components: {
    CustomStarRating,
  },
  props: {
    tourData: Object,
    company_name: String,
    tag: String,
    avgReview: Number,
    sumReview: Number,
  },
  data() {
    return {};
  },
  computed: {},

  methods: {
    getMidRoute(destination_o) {
      if (destination_o == undefined || destination_o == null) return "";
      let route_data = "";

      //all make lower case
      var sorted = [];
      for (var i = 0; i < destination_o.length; i++) {
        sorted.push(destination_o[i].toLowerCase());
      }

      //delete duplicated one
      var destination = sorted.filter(function (elem, index, self) {
        return index === self.indexOf(elem);
      });

      for (let i = 0; i < destination.length; i++) {
        if (destination[i] == destination[i - 1]) continue;
        if (destination[i].toLowerCase().includes("national park")) {
          let abbr = destination[i].replace(/national park/g, "N.P");
          route_data += abbr + ", ";
        } else if (destination[i].includes("Mount ")) {
          let abbr = destination[i].replace(/Mount/g, "Mt.");
          route_data += abbr + ", ";
        } else route_data = route_data + destination[i] + ", ";
      }
      route_data = route_data.slice(0, -2);
      // if (route_data.length > 100) return route_data.substr(0, 100) + "...";
      return route_data;
    },

    getTourLevel(level) {
      if (level == undefined || level == null) return "";
      var level_data = this.tourData.tourGroup;

      for (var i = 0; i < level.length; i++) {
        level_data += ", " + level[i];
      }

      level_data = level_data
        .toLowerCase()
        .replace(/\b[a-z]/g, function (letter) {
          return letter.toUpperCase();
        });
      return level_data;
    },

    toInnerPackage() {
      let routeData = this.$router.resolve(
        "/tour-package/" + this.tourData.package_id
      );
      window.open(routeData.href, "_blank");
    },
  },
};
</script>

<style lang="scss" scoped>
.tour-card {
  transition: box-shadow 0.2s ease-in-out, transform 0.3s ease-in-out;
  box-shadow: 0px 2px 3px rgb(0 0 0 / 18%);
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  color: black;
  &:hover {
    box-shadow: 0px 1px 13px #666;
  }
  .discount {
    position: absolute;
    right: 5px;
    top: -10px;
    width: auto;
    text-align: center;
    font-size: 15px;
    line-height: 0.9;
  }

  .card-body {
    border-bottom: 1px solid rgba(128, 125, 125, 0.717);
  }

  .price {
    width: 100px;
    color: #0f6d24;
    right: 5px;
    bottom: 0px;
    top: 0px;
    padding-left: 5px;
    position: absolute;
    font-size: 16px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
  }

  .tag-image {
    top: -9px;
    position: absolute;
    right: -10px;
    @media (max-width: 1200px) and (min-width: 991px) {
      right: -15px;
    }
  }

  .bg-image {
    background-size: cover;
    position: relative;
    width: 100%;
    height: 0;
    padding-top: 56.25%;
  }

  .tour_title {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    text-align: left;
    padding: 15px 10px;
    background: rgba(0, 0, 0, 0.4);
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.2) 45%,
      rgba(0, 0, 0, 0.5) 100%
    );
    color: white;
    text-align: center;
    text-shadow: 1px 1px 5px #000;
    font-weight: 700;
    font-size: 20px;
    margin: 40px 0 0px 0;
    // font-family: "Montserrat", sans-serif;
    @media (max-width: 1200px) and (min-width: 991px) {
      font-size: 18px;
    }

    @media (max-width: 360px) {
      font-size: 17px;
      line-height: 1.2;
    }
  }

  p {
    font-weight: 400;
    strong {
      font-weight: 700;
    }
  }

  p.card-text {
    font-size: 14px;
    line-height: 20px;
    @media (max-width: 1200px) and (min-width: 991px) {
      font-size: 13px;
    }
  }

  .trip-route {
    min-height: 60px;
  }

  .company-review-small {
    display: none;
    @media (max-width: 1400px) {
      display: block;
    }
  }

  .company-review {
    display: block;
    @media (max-width: 1400px) {
      display: none;
    }
  }
}
</style>
