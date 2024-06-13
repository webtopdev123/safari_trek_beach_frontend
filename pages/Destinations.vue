<template>
  <div class="destination-page">
    <div class="container">
      <section>
        <header class="section-header mt-5">
          <h1>DESTINATIONS</h1>
        </header>

        <div class="row gx-0">
          <div
            v-for="(destination, index) in listDestination.slice(
              (pageNumber - 1) * destinations_per_page,
              pageNumber * destinations_per_page
            )"
            :key="'destination' + index"
            class="col-lg-4 col-md-6 col-xs-12"
          >
            <DestinationCard :destination="destination" />
          </div>
          <div class="d-flex justify-content-center mt-4 px-2">
            <client-only>
              <paginate
                v-model="pageNumber"
                :page-count="
                  Math.ceil(listDestination.length / destinations_per_page)
                "
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
      </section>
    </div>
  </div>
</template>

<script>
import DestinationCard from "../components/DestinationCard";

export default {
  name: "DestinationPage",
  components: {
    DestinationCard,
    [process.browser && "Paginate"]: () => import("vuejs-paginate"),
  },
  data() {
    return {
      pageNumber: null,
      destinations_per_page: 6,
    };
  },

  metaInfo() {
    return {
      title: `Destination | Safari-Trek-Beach`,
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "Safari Trek Beach",
        },
        { hid: "twitter:site", name: "twitter:site", content: "@STB" },
        { hid: "twitter:creator", name: "twitter:creator", content: "@STB" },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Destinations - Safari Trek Beach",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "Tanzania is an East African country known for its vast wilderness areas. They include the plains of Serengeti National Park, a safari mecca populated by the “big five” game (elephant, lion, leopard, buffalo, rhino), and Kilimanjaro National Park, home to Africa’s highest mountain.",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content:
            "https://safaritrekbeach.org/_nuxt/img/aboutus_banner.65bdc7d.jpg",
        },
        {
          hid: "description",
          name: "description",
          content:
            "Tanzania is an East African country known for its vast wilderness areas. They include the plains of Serengeti National Park, a safari mecca populated by the “big five” game (elephant, lion, leopard, buffalo, rhino), and Kilimanjaro National Park, home to Africa’s highest mountain.",
        },
        {
          hid: "og:url",
          name: "og:url",
          content: "https://safaritrekbeach.org/Destinations",
        },
        {
          hid: "og:image",
          property: "og:image",
          content:
            "https://dev.safaritrekbeach.org/_nuxt/img/aboutus_banner.65bdc7d.jpg",
        },
        {
          hid: "og:site_name",
          name: "og:site_name",
          content: "Destinations - Safari Trek Beach",
        },

        {
          hid: "og:title",
          name: "og:title",
          content: "Destinations - Safari Trek Beach",
        },
        {
          hid: "og:description",
          name: "og:description",
          content: "Destinations - Safari Trek Beach",
        },
      ],
    };
  },

  asyncData: ({ $http }) =>
    $http
      .$get(`https://siteapi.safaritreksbeach.com/destination-posts`)
      .then((listDestination) => ({ listDestination })),

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
          name: "Destinations",
          query: { p: newValue },
        });
      else if (newValue == 1) this.$router.push("/Destinations");
    },
  },

  created() {
    if (this.page_id != "") {
      if (
        Math.ceil(this.listDestination.length / this.destinations_per_page) <
        parseInt(this.page_id)
      )
        this.pageNumber = 1;
      else this.pageNumber = parseInt(this.page_id);
    } else this.pageNumber = 1;
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.destination-page {
  padding-top: 50px;
  padding-bottom: 100px;
  section {
    margin-top: 100px;
  }
}
</style>