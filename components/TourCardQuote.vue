<template>
  <div id="tour-card" class="card mx-3 mb-3">
    <div
      v-if="!isLoading"
      v-lazy:background-image="tourData.image"
      class="bg-image"
    >
      <div class="tour_title">
        {{ tourData.noOfDay }}-Day {{ tourData.title }}
      </div>
      <!-- <img
        v-lazy="tourData.logo"
        class="position-absolute rounded-bottom top-0 ms-4"
        alt="Operator Logo"
        width="65"
      /> -->
    </div>
    <div
      v-if="!isLoading"
      class="card-body position-relative mx-3 px-1 border-bottom border-dark"
    >
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
        {{ tourData.start_city }} -
        {{ tourData.end_city }}
      </p>
      <p class="card-text my-2">
        <strong> Tour Type: </strong>
        <span v-if="tourData.tour_group == 'private'">Private, </span>
        <span v-if="tourData.tour_group == 'group'">Group, </span>
        <span>{{ tourData.tour_focus }}</span>
      </p>
      <p class="card-text trip-route mb-0">
        <strong> Destination: </strong>
        <span class="text-capitalize">{{ getMidRoute(tourData.day) }}</span>
      </p>
    </div>
    <div v-if="!isLoading" class="row gx-0 pt-1 position-relative">
      <div>
        <p class="card-text mb-1 ps-3 company-name text-capitalize">
          {{ tourData.company_name }}
        </p>
        <p class="card-text ps-3 d-flex mb-2 company-review">
          <CustomStarRating
            :rating="tourData.avg_review"
            :size="18"
            class="mb-1"
          />
          <strong v-if="tourData.avg_review == '5'"> &nbsp;5.0/5&nbsp;</strong>
          <strong v-else-if="tourData.avg_review == '4'">
            &nbsp;4.0/5&nbsp;</strong
          >
          <strong v-else-if="tourData.avg_review == '3'">
            &nbsp;3.0/5&nbsp;</strong
          >
          <strong v-else-if="tourData.avg_review == '2'">
            &nbsp;2.0/5&nbsp;</strong
          >
          <strong v-else-if="tourData.avg_review == '1'">
            &nbsp;1.0/5&nbsp;</strong
          >
          <strong v-else>
            &nbsp;{{
              Math.round(tourData.avg_review * 10) / 10
            }}/5&nbsp;</strong
          >
          (
          <span v-if="tourData.num_review == 1"
            >{{ tourData.num_review }} Review</span
          >
          <span v-else>{{ tourData.num_review }} Reviews</span>
          )
        </p>
      </div>
      <div class="price">
        <p class="mb-2">
          <strong>
            {{
              (tourPrice * (1 - tourData.currency_discount * 0.01)) | currency
            }}</strong
          >
          &nbsp;<small>pp</small>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import CustomStarRating from "../components/CustomStarRating";
export default {
  components: {
    CustomStarRating,
  },
  props: {
    tourData: {
      type: Object,
      required: true,
    },
    tourPrice: {
      type: Number,
      // required: true,
    },
  },
  data() {
    return {
      isLoading: true,
    };
  },
  created() {
    if (Object.keys(this.tourData).length === 0) {
      this.isLoading = true;
    } else {
      this.isLoading = false;
    }
  },
  methods: {
    getMidRoute(destination_o) {
      if (destination_o == undefined || destination_o == null) return "";
      let route_data = "";

      //all make lower case
      var sorted = [];
      for (var i = 0; i < destination_o.length; i++) {
        sorted.push(destination_o[i].destination.toLowerCase());
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
  },
};
</script>

<style lang="scss" scoped>
#tour-card {
  .price {
    width: 100px;
    color: #0f6d24;
    right: 10px;
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
  }

  .card-body {
    display: block;
    @media (max-width: 600px) {
      display: none;
    }
    p.card-text {
      font-size: 14px;
      line-height: 20px;
    }
  }
  p.company-name {
    font-size: 15px;
    @media (max-width: 1200px) {
      font-size: 14px;
      padding-left: 20px !important;
    }
  }
  .trip-route {
    // min-height: 60px;
  }
  @media (max-width: 1200px) {
    .company-review {
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
}
</style>
