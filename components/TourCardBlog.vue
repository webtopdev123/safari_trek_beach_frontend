<template>
  <div
    class="card mb-3 tour-card-blog"
    :title="tourData.noOfDay + '-Day ' + tourData.title"
    @click="toInnerPackage()"
  >
    <div class="fav-icon" @click.stop="addRemoveToWishlist">
      <svg width="100%" height="100%" viewBox="0 0 24 24">
        <path
          :class="{ fav: isFav }"
          d="M12,21 L10.55,19.7051771 C5.4,15.1242507 2,12.1029973 2,8.39509537 C2,5.37384196 4.42,3 7.5,3 C9.24,3 10.91,3.79455041 12,5.05013624 C13.09,3.79455041 14.76,3 16.5,3 C19.58,3 22,5.37384196 22,8.39509537 C22,12.1029973 18.6,15.1242507 13.45,19.7149864 L12,21 Z"
          fill-rule="nonzero"
        ></path>
      </svg>
    </div>
    <div class="ripple position-relative" data-mdb-ripple-color="light">
      <img
        :src="tourData.image"
        :alt="tourData.noOfDay + '-Day ' + tourData.title"
        class="w-100"
        @error="changeImg"
      />
    </div>
    <div class="px-0 pb-2">
      <div class="mx-3">
        <div class="mb-2 mt-1 d-flex place">
          <svg viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 10a10 10 0 1120 0 10 10 0 01-20 0zm14.15-4h2.77a8.04 8.04 0 00-3.78-3.36c.47 1.07.81 2.2 1 3.36zm-1.65 4c0 .71-.03 1.38-.09 2H7.59a22.14 22.14 0 010-4h4.82c.06.62.09 1.29.09 2zm-4.62 4c.54 2.6 1.53 4 2.12 4 .6 0 1.58-1.4 2.12-4H7.88zm0-8C8.42 3.39 9.41 2 10 2c.6 0 1.58 1.39 2.12 4H7.88zM5.85 6c.2-1.16.53-2.29 1.01-3.36A8.04 8.04 0 003.08 6h2.77zM2.26 8H5.6a23.77 23.77 0 000 4H2.26a7.73 7.73 0 010-4zm3.6 6H3.07a8.04 8.04 0 003.78 3.36 13.9 13.9 0 01-1-3.36zm7.28 3.36c.47-1.08.81-2.2 1-3.36h2.78a8.04 8.04 0 01-3.78 3.36zM14.4 12h3.33a7.73 7.73 0 000-4H14.4a23.74 23.74 0 010 4z"
            ></path>
          </svg>
          {{ tourData.startCity }} ,{{ tourData.countries[0] }}
        </div>
        <div class="mb-2 title">
          {{ tourData.noOfDay }}-Day {{ tourData.title }}
        </div>
        <hr class="my-2" />
        <div class="d-flex justify-content-between">
          <span>Reviews &nbsp;{{ tourData.operator.numReview }}</span>
          <span>From</span>
        </div>

        <div class="d-flex justify-content-between align-items-center">
          <CustomStarRatingBlog
            :rating="tourData.operator.avgReview"
            :size="18"
            class="mb-1 mr-2"
          />
          <span class="fw-bold">{{ tourData.adultCurrency | currency }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomStarRatingBlog from "./CustomStarRatingBlog";
export default {
  components: {
    CustomStarRatingBlog,
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
    toInnerPackage() {
      let searchData = {};
      searchData = {
        where_to_search: this.where_to_search,
        start_date: this.start_date,
        adults_number: this.adults_number,
        children_number: this.children_number,
      };
      this.$store.dispatch("tourController/setSearchData", searchData);

      let routeData = this.$router.resolve("/tour-package/" + this.tourData.id);
      window.open(routeData.href, "_blank");
    },

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

    changeImg(event) {
      event.target.src =
        "https://gallery.safaritrekbeach.com/images/gallery/tanzania/tour/SERENGETI_NATIONAL_PARK_67.jpg";
    },
  },
};
</script>

<style lang="scss" scoped>
.tour-card-blog {
  transition: box-shadow 0.2s ease-in-out, transform 0.3s ease-in-out;
  box-shadow: 0px 2px 3px rgb(0 0 0 / 18%);
  border-radius: 10px;
  font-weight: 350;
  background: white !important;
  cursor: pointer;
  user-select: none;
  .ripple img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  svg {
    width: 12px;
    margin-right: 10px;
    fill: #585c63;
  }

  &:hover {
    box-shadow: 0px 1px 13px #666;
  }

  img {
    height: 170px;
    object-fit: cover;
  }

  .title,
  .price {
    font-size: 17px;
  }
  .place {
    font-size: 12px;
    color: #585c63;
  }
  .title {
    min-height: 66px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    --max-lines: 3;
    max-height: calc(var(--lh) * var(--max-lines));
    overflow: hidden;
    font-weight: 600;
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

    svg {
      margin-right: 0px;
      width: 24px;
    }

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
