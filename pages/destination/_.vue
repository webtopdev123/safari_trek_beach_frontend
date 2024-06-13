<template>
  <div class="blog-destination">
    <div class="mt-3 gx-0">
      <div
        class="position-relative overflow-hidden bg-image"
        :style="{
          'background-image': 'url(' + destinationData.pageImage + ')',
        }"
      ></div>
      <h1 class="image_title_mobile mb-0 text-center">
        {{ destinationData.title }}
      </h1>
      <div class="pb-5">
        <div class="container card-body px-0 pt-0">
          <div class="row gx-0 mb-3">
            <div class="quick-link-section ps-3 position-relative">
              <div style="position: sticky; top: 65px">
                <div class="w-100 blog-category shadow-sm px-3 py-4 mt-1">
                  <div class="fw-bolder text-center" style="color: #444">
                    Table Of Contents
                  </div>

                  <ul class="m-0 ps-3">
                    <li
                      v-for="(content, index) in destinationData.sections"
                      :key="index"
                      class="mt-2"
                      @click="
                        customScroll(hashString(content.title), content.title)
                      "
                    >
                      <p
                        class="user-select-none text-decoration-none"
                        :title="content.title"
                        :class="
                          hashString(content.title) == active_link
                            ? 'new-red fw-bold'
                            : ''
                        "
                      >
                        {{ content.title }}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="content-section px-3 card pb-5">
              <div style="margin-top: -50px">
                <div
                  v-for="(item, index) in destinationData.sections"
                  :id="hashString(item.title)"
                  :key="index"
                  class="pt-5"
                  style="margin-bottom: -60px"
                >
                  <div :id="'section' + index">
                    <div class="pt-5">
                      <h2 class="section-title-inner pb-3">
                        {{ item.title }}
                      </h2>
                    </div>

                    <div :key="read_update">
                      <div
                        class="section table-responsive"
                        :class="
                          tag_counts[index] > 2 && !read_status[index]
                            ? 'read-more'
                            : ''
                        "
                        v-html="item.longDescription"
                      />
                      <div
                        v-if="tag_counts[index] > 2 && !read_status[index]"
                        class="read-more-button"
                        @click="readMore(index)"
                      >
                        Read more
                      </div>
                      <div
                        v-if="tag_counts[index] > 2 && read_status[index]"
                        class="read-more-button"
                        @click="readMore(index)"
                      >
                        Read less
                      </div>
                    </div>

                    <div
                      v-if="item.buttonName != null && item.buttonUrl != null"
                      class="text-start mt-3"
                    >
                      <a
                        :href="item.buttonUrl"
                        target="_blank"
                        class="btn btn-desti"
                      >
                        {{ item.buttonName }}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="isChart">
                <h2 class="section-title-inner text-center mt-5 pt-5">
                  Climate Chart of {{ destinationData.title }}
                </h2>
                <p
                  class="text-center"
                  :title="'Altitude of ' + destinationData.title"
                >
                  {{ altitude }}
                </p>
                <div class="row gx-0">
                  <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                    <p class="text-center"><strong>Temperature</strong></p>
                    <client-only>
                      <apexchart
                        type="area"
                        :options="chartOptions"
                        :series="series"
                      ></apexchart>
                    </client-only>
                  </div>

                  <div class="col-12 col-sm-12 col-md-6 col-lg-6">
                    <p class="text-center"><strong>Rainfall</strong></p>
                    <client-only>
                      <apexchart
                        type="bar"
                        :options="chartOptions2"
                        :series="series2"
                      ></apexchart>
                    </client-only>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TourCardBlog from "../../components/TourCardBlog";
import { mapGetters } from "vuex";
export default {
  name: "DestinationPackage",
  components: {
    TourCardBlog,
  },
  data() {
    return {
      tag_counts: [],
      read_status: [],
      read_update: 0,
      isLoading: true,
      active_link: "",
      altitude: "",
      isChart: false,
      chartData1: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      series: [
        {
          name: "Average Max",
          // data: [27, 27, 27, 26, 25, 24, 25, 26, 27, 27, 27, 26],
        },
        {
          name: "Average Min",
          // data: [59, 59, 61, 61, 59, 57, 55, 55, 57, 59, 59, 59],
        },
      ],
      chartOptions: {
        chart: {
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
          height: 350,
          type: "area",
        },
        legend: {
          show: true,
          position: "top",
          onItemClick: {
            toggleDataSeries: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          // type: "category",
          categories: [
            "J",
            "F",
            "M",
            "A",
            "M",
            "J",
            "J",
            "A",
            "S",
            "O",
            "N",
            "D",
          ],
        },
        yaxis: [
          {
            min: 0,
            max: 40,
            tickAmount: 4,
            title: {
              text: "°C",
            },
            seriesName: "Average Max",
          },
          {
            min: 32,
            max: 104,
            tickAmount: 4,
            opposite: true,
            title: {
              text: "°F",
            },
            seriesName: "Average Max",
          },
        ],
        tooltip: {
          x: {
            formatter: function (value, series) {
              return [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ][series.dataPointIndex];
            },
          },
          y: {
            formatter: function (value, series) {
              // use series argument to pull original string from chart data
              if (series.seriesIndex == 0)
                return (
                  series.series[series.seriesIndex][series.dataPointIndex] +
                  "°C / " +
                  Math.ceil(
                    (series.series[series.seriesIndex][series.dataPointIndex] *
                      9) /
                      5 +
                      32
                  ) +
                  " °F"
                );
              else
                return (
                  Math.ceil(
                    ((series.series[series.seriesIndex][series.dataPointIndex] -
                      32) *
                      5) /
                      9
                  ) +
                  "°C / " +
                  series.series[series.seriesIndex][series.dataPointIndex] +
                  " °F"
                );
            },
          },
        },
      },

      series2: [
        {
          name: "Rainfall",
          // data: [91, 100, 135, 141, 71, 30, 13, 23, 30, 43, 95, 109],
        },
      ],
      //rain fall chart
      chartOptions2: {
        chart: {
          toolbar: {
            show: false,
          },
          height: 350,
          type: "bar",
        },
        legend: {
          show: true,
          position: "top",
          onItemClick: {
            toggleDataSeries: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: [
            "J",
            "F",
            "M",
            "A",
            "M",
            "J",
            "J",
            "A",
            "S",
            "O",
            "N",
            "D",
          ],
        },
        yaxis: [
          {
            min: 0,
            max: 300,
            tickAmount: 4,
            title: {
              text: "mm",
            },
            seriesName: "Max",
          },
          {
            min: 0,
            max: 12,
            tickAmount: 4,
            opposite: true,
            title: {
              text: "inch",
            },
          },
        ],
        tooltip: {
          x: {
            formatter: function (value, series) {
              // console.log(series);
              return [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
              ][series.dataPointIndex];
            },
          },
          y: {
            formatter: function (value, series) {
              return (
                series.series[series.seriesIndex][series.dataPointIndex] +
                " mm / " +
                Math.round(
                  series.series[series.seriesIndex][series.dataPointIndex] *
                    0.393701
                ) /
                  10 +
                " in"
              );
            },
          },
        },
      },
    };
  },

  metaInfo() {
    return {
      title: `${this.subTitle} | Safari-Trek-Beach`,
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            this.destinationData.sections[this.sectionNumber].shortDescription,
        },
        {
          property: "og:title",
          content: `${this.subTitle} | Safari-Trek-Beach`,
        },
        {
          name: "twitter:title",
          content: `${this.subTitle} | Safari-Trek-Beach`,
        },
        {
          property: "og:image",
          content: this.destinationData.image,
        },
        {
          property: "twitter:image",
          content: this.destinationData.image,
        },
        {
          property: "og:url",
          content: "Https://safaritrekbeach.org/destination/" + this.pathMatch,
        },
      ],
    };
  },

  async asyncData({ $http, params }) {
    const destinationData = await $http.$get(
      `https://siteapi.safaritreksbeach.com/destination-post/${
        params.pathMatch.split("/")[0]
      }`
    );
    const pathMatch = params.pathItem;

    let subTitle = "";
    const pathItem = params.pathMatch.split("/");
    if (pathItem.length == 2) subTitle = pathItem[1];

    let sectionNumber = 0;

    for (let index = 0; index < destinationData.sections.length; index++) {
      let title = destinationData.sections[index].title.replace(
        /[^a-z\d\s]+/gi,
        ""
      );
      title = title.split(" ").join("-");
      if (title == subTitle) {
        sectionNumber = index;
        subTitle = destinationData.sections[index].title;
        break;
      }
      if (index == destinationData.sections.length - 1)
        subTitle = destinationData.title;
    }

    return { destinationData, subTitle, pathMatch, sectionNumber };
  },

  computed: {
    destination_id: function () {
      // console.log(this.$route);
      var id = this.$route.params.pathMatch;
      var temp_hash_arry = [];
      temp_hash_arry = id.split("/");

      if (temp_hash_arry.length == 2) {
        this.active_link = temp_hash_arry[1];
        return temp_hash_arry[0];
      } else if (temp_hash_arry.length == 1) {
        this.active_link = "";
        return temp_hash_arry[0];
      }
    },
    ...mapGetters({
      climateData: "tourController/climateData",
    }),
  },

  created() {
    var id = this.$route.params.pathMatch;
    var temp_hash_arry = [];
    temp_hash_arry = id.split("/");

    if (temp_hash_arry.length == 2) {
      this.active_link = temp_hash_arry[1];
    } else if (temp_hash_arry.length == 1) {
      this.active_link = "";
    }
    this.countCollect();
    this.scrollToId();

    this.$store.dispatch("tourController/setClimateData").then(() => {
      if (this.climateData[temp_hash_arry[0]] != null) {
        this.isChart = true;
        this.series[0].data = this.climateData[temp_hash_arry[0]].max;
        this.series[1].data = this.climateData[temp_hash_arry[0]].min;
        this.series2[0].data = this.climateData[temp_hash_arry[0]].rain;
        this.altitude = this.climateData[temp_hash_arry[0]].altitude;
      }
    });
  },
  methods: {
    countCollect() {
      setTimeout(() => {
        if (process.browser) {
          for (let i = 0; i < this.destinationData.sections.length; i++) {
            let selectionCount = document.querySelector(
              "#section" + i + " .section"
            ).childElementCount;
            this.tag_counts.push(selectionCount);
            this.read_status.push(false);
          }
        }
      }, 10);
    },

    customScroll(hash, title) {
      this.active_link = hash;
      if (process.browser) {
        history.pushState(
          {},
          null,
          "/destination/" + this.destination_id + "/" + encodeURIComponent(hash)
        );
        this.$scrollTo(document.getElementById(hash), 0);
        document.title = title + " | Safari-Trek-Beach";
      }
    },

    scrollToId() {
      setTimeout(() => {
        if (this.active_link != "") {
          if (process.browser) {
            this.$scrollTo(document.getElementById(this.active_link), 0);
            // var title = document
            //   .getElementById(this.active_link)
            //   .getElementsByClassName("section-title-inner")[0].textContent;
          }
        }
      }, 10);
    },

    readMore(index) {
      this.read_status[index] = !this.read_status[index];
      this.read_status.slice(0, this.read_status.length);
      this.read_update++;
    },

    hashString(title) {
      // This is the function for convert normal section title to non-space
      // string to use it as a ID of the section block
      title = title.replace(/[^a-z\d\s]+/gi, "");
      title = title.split(" ").join("-");
      return title;
    },
  },
};
</script>

<style lang="scss">
@import "../../assets/scss/blog_destination.scss";
.blog-category a {
  color: #444;
}
</style>