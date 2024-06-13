<template>
  <div class="container operators">
    <section>
      <header class="section-header">
        <h1>Tour Operators</h1>
      </header>
    </section>

    <div>
      <a
        v-for="(operator, index) in operatorList.slice(
          (pageNumber - 1) * operators_per_page,
          pageNumber * operators_per_page
        )"
        :key="'operator' + index"
        class="card p-0 mt-5 tour-operator-card"
        target="_blank"
        :href="'/operator/' + operator.id"
      >
        <div class="wrapper">
          <div class="operator-logo text-center m-auto">
            <img
              width="150px"
              height="150px"
              v-lazy="operator.logo"
              alt="Operator Logo"
            />
          </div>
          <div class="px-3 operator-content my-3">
            <h2 class="h4 fw-bold text-capitalize">
              {{ operator.companyName }}
            </h2>
            <div class="mt-2 d-flex">
              <client-only>
                <CustomStarRating
                  :rating="operator.avgReview"
                  :size="22"
                  class="me-2 mb-2"
                />
              </client-only>
              <span
                >{{ Math.round(operator.avgReview * 10) / 10 }}/5 ({{
                  operator.numReview
                }}
                Reviews)</span
              >
            </div>
            <p class="description text-muted fst-italic mb-3">
              {{ operator.mission | limitText }}
            </p>
            <button class="btn btn-danger mb-3">Learn More</button>
          </div>
          <div class="logo-layout text-center">
            <img v-lazy="operator.banner" alt="Operator Banner" />
          </div>
        </div>
      </a>
    </div>

    <div class="operator-pagination">
      <client-only>
        <paginate
          v-model="pageNumber"
          :page-count="Math.ceil(operatorList.length / operators_per_page)"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :container-class="'pagination'"
          :page-class="'page-item'"
          :prev-class="'page-link prev'"
          :next-class="'page-link next'"
          :page-link-class="'page-link'"
        />
      </client-only>
    </div>
  </div>
</template>

<script>
import CustomStarRating from "../components/CustomStarRating";
export default {
  name: "tour-operators",
  components: {
    CustomStarRating,
    [process.browser && "Paginate"]: () => import("vuejs-paginate"),
  },

  filters: {
    limitText: function (string) {
      if (string.length > 200) return string.substring(0, 200) + "...";
      else return string;
    },
  },

  data() {
    return {
      pageNumber: 1,
      operators_per_page: 5,
      current_page_operators: [],
    };
  },

  asyncData: ({ $http }) =>
    $http
      .$get(`https://siteapi.safaritreksbeach.com/tour-operators`)
      .then((operatorList) => ({ operatorList })),

  metaInfo() {
    return {
      title: `Tour Operators of Safari-Trek-Beach.com`,
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content: "This is Tour Operators of Safari-Trek-Beach.com",
        },
        {
          property: "og:title",
          content: "Tour Operators of Safari-Trek-Beach.com",
        },
        {
          name: "twitter:title",
          content: "Tour Operators of Safari-Trek-Beach.com",
        },
        // {property: 'og:image', content: this.blogData.post_inner_image},
        // {property: 'twitter:image', content: this.blogData.post_inner_image},
        // {property: 'og:url', content: window.location.href},
      ],
    };
  },
  computed: {
    page_id: function () {
      var id = this.$route.query.p;
      if (id != undefined) return id;
      else return "";
    },
  },
  watch: {
    pageNumber: function (newValue) {
      if (newValue > 1)
        this.$router.push({
          name: "tour-operators",
          query: { p: newValue },
        });
      else if (newValue == 1) this.$router.push("/tour-operators");
    },
  },
  created() {
    if (this.page_id != "") this.pageNumber = parseInt(this.page_id);
    else this.pageNumber = 1;
  },
  methods: {},
};
</script>

<style lang="scss">
.operators {
  padding-top: 50px;
  padding-bottom: 100px;
  @media (max-width: 420px) {
    padding-top: 0;
  }

  section {
    margin-top: 100px;
    margin-bottom: 30px;
  }
  .wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    @media (max-width: 1200px) {
      flex-direction: column;
      justify-content: center;
    }
  }

  .logo-layout {
    min-width: 400px;
    width: 400px;

    img {
      width: 100%;
      height: auto;
      @media (max-width: 480px) {
        min-width: 100%;
        width: 100%;
        border: 3px solid #ccc;
        border-radius: 10px;
        background: #f7f6e7;
        padding: 7px;
      }
    }
    @media (max-width: 1200px) {
      margin: auto;
      padding: 20px;
    }
    @media (max-width: 480px) {
      min-width: 100%;
      width: 100%;
    }
    @media (min-width: 1200px) {
      img {
        border-bottom-right-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
        height: 100%;
      }
    }
  }
  .operator-logo {
    min-width: 180px;
    width: 180px;

    @media (max-width: 1200px) {
      margin-top: 20px !important;
    }

    img {
      width: 150px;
      border: 2px solid #ccc;
      border-radius: 5px;
      background: #f7f6e7;
      padding: 5px;
      transform: rotate(2deg);
    }
  }
  .tour-operator-card {
    cursor: pointer;
    text-decoration: none;
    color: black;
    &:hover {
      outline: 2px solid #ccc;
    }
  }

  .operator-content {
    position: relative;
    min-width: calc(100% - 580px);
    @media (max-width: 1200px) {
      margin-top: 20px;
      margin-bottom: 20px;
      h2 {
        text-align: center;
      }
    }

    @media (min-width: 1200px) {
      .description {
        max-height: 70px;
        min-height: 70px;
      }
    }
  }
  .operator-pagination {
    display: flex;
    justify-content: center;
    margin-top: 40px;
  }

  .pagination {
    width: 100%;
    position: relative;
    justify-content: center;
  }

  .page-item {
    margin-right: 10px;
    margin-left: 10px;
  }

  .page-link.prev {
    position: absolute;
    left: 0;
  }

  .page-link.next {
    position: absolute;
    right: 0;
  }

  @media (max-width: 480px) {
    .pagination {
      width: 100%;
      position: relative;
      justify-content: center;
    }

    .page-item {
      margin-right: 1px;
      margin-left: 1px;
    }
  }
}
</style>