<template>
  <div class="px-3 px-md-1 px-sm-1">
    <h4 class="h5 fw-bold mt-5">Map</h4>
    <div style="height: 400px; width: 100%">
      <no-ssr>
        <l-map
          :zoom="zoom"
          :center="center"
          :options="{ attributionControl: false }"
        >
          <l-tile-layer :url="url"></l-tile-layer>
          <l-marker
            v-for="(destination, index) in tooltipData"
            :key="index"
            :ref="'marker' + index"
            :lat-lng="[latlngs[index][0], latlngs[index][1]]"
            @click="clickMarker(index)"
            ><l-popup> {{ destination }}</l-popup></l-marker
          >
          <l-polyline :lat-lngs="latlngs" color="green"></l-polyline>
        </l-map>
      </no-ssr>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    mapData: {
      type: Array,
      required: true,
    },
    dayData: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 9,
      center: [],
      latlngs: [],
      airport: [-3.4284, 37.072],
      timer: null,
      count: 0,
      filteredMapData: null,
      tooltipData: [],

      mapCounter: 0,
    };
  },
  mounted: function () {
    this.filteredMapData = this.mapData.filter(function (el) {
      return el.longitude != null && el.latitude != null;
    });

    const xmax = Math.max.apply(
      Math,
      this.filteredMapData.map(function (o) {
        return o.latitude;
      })
    );

    const xmin = Math.min.apply(
      Math,
      this.filteredMapData.map(function (o) {
        return o.latitude;
      })
    );

    const ymax = Math.max.apply(
      Math,
      this.filteredMapData.map(function (o) {
        return o.longitude;
      })
    );

    const ymin = Math.min.apply(
      Math,
      this.filteredMapData.map(function (o) {
        return o.longitude;
      })
    );

    this.center = [(ymax + ymin) / 2, (xmax + xmin) / 2]; // Center of the MAP

    //let's calculate the zoom factor for better looking.
    const dx = xmax - xmin;
    const dy = ymax - ymin;

    if (dx > 2 || dy > 2) this.zoom = 5;
    else if (dx > 1.8 || dy > 1.8) this.zoom = 6;
    else if (dx > 1.5 || dy > 1.5) this.zoom = 7;
    else if (dx > 1 || dy > 1) this.zoom = 8;

    // create new array for the trajectory of the tour route based on the filtered map data
    // this.latlngs = this.filteredMapData.map((v) => [v.longitude, v.latitude]);

    // Title should be regenerated becuase of the duplicated day ex. Day 3-5
    //problem is that data from backend is different from in dayByday data in order
    let startDay = 0;
    let r_counter = 0;
    for (let index = 0; index < this.dayData.length; index++) {
      let endDay = 0;
      if (
        index != this.dayData.length - 1 &&
        this.dayData[index].destination == this.dayData[index + 1].destination
      ) {
        if (r_counter == 0) startDay = index + 1;
        r_counter++;
        continue;
      } else {
        endDay = index + 1;
      }

      //let's push

      //first geo data
      let flag = 0;

      for (let index1 = 0; index1 < this.mapData.length; index1++) {
        if (this.mapData[index1].name == this.dayData[index].destination) {
          if (
            this.mapData[index1].longitude == null ||
            this.mapData[index1].latitude == null
          )
            break;
          this.latlngs.push([
            this.mapData[index1].longitude,
            this.mapData[index1].latitude,
          ]);
          flag = 1; // pushed
          break;
        }
      }

      if (flag != 0) {
        if (startDay == 0)
          if (endDay == 1)
            this.tooltipData.push(
              "Day " +
                endDay +
                ":" +
                this.dayData[index].destination +
                " (Start Day)"
            );
          else if (endDay == this.dayData.length)
            this.tooltipData.push(
              "Day " +
                endDay +
                ":" +
                this.dayData[index].destination +
                " (End Day)"
            );
          else
            this.tooltipData.push(
              "Day " + endDay + ":" + this.dayData[index].destination
            );
        else {
          if (startDay == 1)
            this.tooltipData.push(
              "Day " +
                startDay +
                "-" +
                endDay +
                ":" +
                this.dayData[index].destination +
                " (Start Day)"
            );
          else if (endDay == this.dayData.length)
            this.tooltipData.push(
              "Day " +
                startDay +
                "-" +
                endDay +
                ":" +
                this.dayData[index].destination +
                " (End Day)"
            );
          else
            this.tooltipData.push(
              "Day " +
                startDay +
                "-" +
                endDay +
                ":" +
                this.dayData[index].destination
            );
        }
      }

      startDay = 0;
      r_counter = 0;
    }

    this.timer = setInterval(() => {
      this.cycle();
    }, 2500);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  methods: {
    cycle() {
      let index = this.count % this.tooltipData.length;
      this.$refs["marker" + index][0].mapObject.openPopup();
      this.count++;
    },
    clickMarker(index) {
      this.count = index;
    },
  },
};
</script>
