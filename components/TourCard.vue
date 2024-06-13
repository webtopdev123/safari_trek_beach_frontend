<template>
  <a
    class="card tour-card"
    :title="tourData.noOfDay + '-Day ' + tourData.title"
    :href="'/tour-package/' + tourData.id"
    target="_blank"
    @click="toInnerPackage()"
  >
    <div class="fav-icon" @click.prevent="addRemoveToWishlist">
      <svg width="100%" height="100%" viewBox="0 0 24 24">
        <path
          :class="{ fav: isFav }"
          d="M12,21 L10.55,19.7051771 C5.4,15.1242507 2,12.1029973 2,8.39509537 C2,5.37384196 4.42,3 7.5,3 C9.24,3 10.91,3.79455041 12,5.05013624 C13.09,3.79455041 14.76,3 16.5,3 C19.58,3 22,5.37384196 22,8.39509537 C22,12.1029973 18.6,15.1242507 13.45,19.7149864 L12,21 Z"
          fill-rule="nonzero"
        ></path>
      </svg>
    </div>
    <div
      v-lazy:background-image="{
        src: tourData.image,
        error: require('@/assets/images/aboutus_banner.jpg'),
        loading: require('@/assets/images/aboutus_banner.jpg'),
      }"
      class="bg-image hover-overlay ripple"
      data-mdb-ripple-color="light"
    >
      <div class="tour_title">
        {{ tourData.noOfDay }}-Day {{ tourData.title }}
      </div>
      <img
        v-lazy="tourData.operator.logo"
        v-if="tourData.cardDetails != undefined && tourData.cardDetails.showOperatorLogo"
        class="position-absolute rounded-bottom top-0 ms-4"
        alt="Operator Logo"
        width="65"
      />
    </div>
    <div class="card-body position-relative mx-3 px-1">
      <div v-if="tourData.cardDetails != undefined && tourData.cardDetails.showTag" class="tag-image">
        <img
          v-if="tourData.tag == 'review'"
          v-lazy="require('@/assets/images/best-review.png')"
          class="best-review"
          alt="Best Review"
        />
        <img
          v-else-if="tourData.tag == 'seller'"
          v-lazy="require('@/assets/images/bestseller.png')"
          class="best-seller"
          alt="Best Seller"
        />
        <img
          v-else-if="tourData.tag == 'rated'"
          v-lazy="require('@/assets/images/toprated2.png')"
          class="top-rated"
          alt="Top Rated"
        />
        <img
          v-else-if="tourData.tag == 'offer'"
          v-lazy="require('@/assets/images/best_offer.png')"
          class="best-offer"
          alt="Best Offer"
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
    <div class="row gx-0 pt-1 position-relative">
      <div>
        <p class="card-text mb-1 ps-3 company-name text-capitalize">
          {{ tourData.operator.companyName }}
        </p>
        <p class="card-text ps-3 d-flex mb-2 company-review">
          <client-only>
            <CustomStarRating
              :rating="tourData.operator.avgReview"
              :size="18"
              class="mb-1"
          /></client-only>
          <strong v-if="tourData.operator.avgReview == '5'">
            &nbsp;5.0/5&nbsp;</strong
          >
          <strong v-else-if="tourData.operator.avgReview == '4'">
            &nbsp;4.0/5&nbsp;</strong
          >
          <strong v-else-if="tourData.operator.avgReview == '3'">
            &nbsp;3.0/5&nbsp;</strong
          >
          <strong v-else-if="tourData.operator.avgReview == '2'">
            &nbsp;2.0/5&nbsp;</strong
          >
          <strong v-else-if="tourData.operator.avgReview == '1'">
            &nbsp;1.0/5&nbsp;</strong
          >
          <strong v-else>
            &nbsp;{{
              Math.round(tourData.operator.avgReview * 10) / 10
            }}/5&nbsp;</strong
          >
          (
          <span v-if="tourData.operator.numReview == 1"
            >{{ tourData.operator.numReview }} Review</span
          >
          <span v-else>{{ tourData.operator.numReview }} Reviews</span>
          )
        </p>
      </div>
      <client-only>
        <div class="price">
          <p class="fs-6 mb-0 text-dark">
            <small>From</small>
          </p>
          <p class="mb-2">
            <strong
              v-if="
                tourData.currencyDiscount != null &&
                tourData.currencyDiscount != null
              "
            >
              {{
                new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }).format(
                  tourData.adultCurrency *
                    (1 - tourData.currencyDiscount * 0.01)
                )
              }}
            </strong>
            <strong v-else
              >{{
                new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "USD",
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                }).format(tourData.adultCurrency)
              }} </strong
            >&nbsp;<small>pp</small>
          </p>
        </div>
      </client-only>
      <div
        v-if="
        tourData.cardDetails != undefined && 
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
    where_to_search: String,
    start_date: String,
    adults_number: Number,
    children_number: Number,
  },
  data() {
    return {
      favList: [],
      isFav: false,
    };
  },

  mounted() {
    this.favList = JSON.parse(localStorage.getItem("safariWishList") || "[]");
    let index = this.favList.findIndex((x) => x.id == this.tourData.id);
    if (index > -1) {
      this.isFav = true;
    }
  },

  methods: {
    addRemoveToWishlist() {
      this.favList = JSON.parse(localStorage.getItem("safariWishList") || "[]");
      let index = this.favList.findIndex((x) => x.id == this.tourData.id);
      if (index > -1) {
        this.favList.splice(index, 1);
        this.isFav = false;
      } else {
        this.favList.push(this.tourData);
        this.isFav = true;
      }
      this.$store.dispatch(
        "tourController/setWishlistCount",
        this.favList.length
      );
      localStorage.setItem("safariWishList", JSON.stringify(this.favList));
    },

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
      let searchData = {};
      searchData = {
        where_to_search: this.where_to_search,
        start_date: this.start_date,
        adults_number: this.adults_number,
        children_number: this.children_number,
      };
      this.$store.dispatch("tourController/setSearchData", searchData);
    },
  },
};
</script>

<style lang="scss" scoped>
.tour-card {
  max-width: 450px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 2.5rem;
  transition: box-shadow 0.2s ease-in-out, transform 0.3s ease-in-out;
  box-shadow: 0px 2px 3px rgb(0 0 0 / 18%);
  cursor: pointer;
  user-select: none;
  text-decoration: none;
  color: black;
  background-color: white !important;

  &:hover {
    box-shadow: 0px 1px 13px #666;
  }
  .discount {
    position: absolute;
    right: 5px;
    top: -15px;
    width: auto;
    text-align: center;
    font-size: 15px;
    line-height: 0.9;
  }
  .price {
    width: 100px;
    color: #0f6d24;
    right: -5px;
    bottom: 0px;
    top: 0px;
    padding-left: 2px;
    position: absolute;
    font-size: 17px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 1200px) {
      font-size: 16px;
    }
    @media (max-width: 330px) {
      p:first-child {
        padding-left: 10px;
      }
    }
  }

  .tag-image {
    top: -10px;
    position: absolute;
    right: -10px;
    .best-review {
      height: auto;
      width: 60px;
      margin-top: -3px;
    }
    .best-seller {
      height: auto;
      width: 65px;
    }
    .top-rated {
      height: auto;
      width: 100px;
    }
    .best-offer {
      height: auto;
      width: 110px;
      margin-top: -10px;
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
    padding: 12px 10px;
    background: rgba(0, 0, 0, 0.4);
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.3) 45%,
      rgba(0, 0, 0, 0.5) 100%
    );
    text-shadow: 1px 1px 5px #000;
    color: white;
    text-align: center;
    font-weight: 700;
    font-size: 19px;
    line-height: 1.5;
    margin: 40px 0 0px 0;
    @media (max-width: 360px) {
      font-size: 17px;
      line-height: 1.2;
    }
  }

  .card-body {
    border-bottom: 1px solid rgba(128, 125, 125, 0.717);
  }

  .card-body p.card-text {
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    strong {
      font-weight: 700;
    }
  }

  p.company-name {
    font-size: 15px;
    @media (max-width: 1200px) {
      font-size: 14px;
      padding-left: 20px !important;
    }
  }

  p {
    font-weight: 400;
    strong {
      font-weight: 700;
    }
  }

  .trip-route {
    min-height: 63px;
  }
  @media (max-width: 1200px) {
    .company-review {
      font-size: 14px;
      padding-left: 20px !important;
    }
  }

  .fav-icon {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 3px;
    right: 3px;
    z-index: 2;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: 3px;

    svg:hover {
      animation: pulse 1s infinite;
    }
    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      30% {
        transform: scale(1.2);
      }

      50% {
        transform: scale(1);
      }
      100% {
        transform: scale(1);
      }
    }

    path {
      fill: #bec0c2;
    }

    .fav {
      fill: #fe415b;
    }
  }
}
</style>
