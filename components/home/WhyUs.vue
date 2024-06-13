<template>
  <div title="Why Choose Us" class="py-5 bg-white">
    <lazy-component @show.once="whyUs" />
    <div v-if="isWhy" class="container">
      <div class="row mt-3">
        <header class="section-header">
          <h1>Why Choose Us</h1>
        </header>
        <div
          v-for="(item, index) in whyData"
          :key="index"
          class="col-lg-3 col-md-6 col-xs-12 mt-3"
        >
          <div class="d-flex align-items-center">
            <div class="img-icon d-flex align-items-center">
              <img
                class="w-100"
                :src="item.image"
                alt="Why Safari-Trek-Beach"
              />
            </div>
            <h5 class="my-0 ms-2">
              {{ item.title }}
            </h5>
          </div>
          <p class="px-4 mt-3 text-muted">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isWhy: false,
      whyData: [
        {
          title: "Compare Tour Offers",
          description:
            "Clients get the best offer by sending request to 3 Tour operators.",
          image:
            "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' width='22' height='24'%3E%3Cpath fill='%23f93154' d='M20.25 4.5H14.5a.25.25 0 00-.25.25v8.025a.75.75 0 11-1.5 0V3a1.5 1.5 0 00-1.5-1.5h-6a.5.5 0 00-.5.5v12a.5.5 0 00.5.5h4.23c-.683.359-1.23.93-1.561 1.627a1 1 0 00.929 1.373h11.4a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.498-1.5zM1.75 0a1.5 1.5 0 00-1.5 1.5v21a1.5 1.5 0 003 0v-21A1.5 1.5 0 001.75 0z'/%3E%3C/svg%3E",
        },
        {
          title: "Compliance Standard",
          description:
            "We set compliance standard that tour operators should meet.",
          image:
            "data:image/svg+xml;charset=utf-8,%3Csvg width='32' height='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M28.547 15.44l-12-12a2.65 2.65 0 00-1.88-.773H5.333a2.675 2.675 0 00-2.666 2.666v9.334c0 .733.293 1.4.786 1.893l12 12a2.65 2.65 0 001.88.773c.734 0 1.4-.293 1.88-.786l9.334-9.334c.493-.48.786-1.146.786-1.88 0-.733-.306-1.413-.786-1.893zM7.333 9.333c-1.106 0-2-.893-2-2 0-1.106.894-2 2-2 1.107 0 2 .894 2 2 0 1.107-.893 2-2 2zM23.027 20.36l-5.694 5.693-5.693-5.693a3.36 3.36 0 01-.973-2.36A3.335 3.335 0 0114 14.667c.92 0 1.76.373 2.36.986l.973.96.974-.973c.6-.6 1.44-.973 2.36-.973A3.335 3.335 0 0124 18c0 .92-.373 1.76-.973 2.36z' fill='%23f93154'/%3E%3C/svg%3E",
        },
        {
          title: "Licensed Tour Operators",
          description:
            "All tour operators In Safari Trek Beach are registered and have Tour License.",
          image:
            "data:image/svg+xml;charset=utf-8,%3Csvg width='32' height='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 1.33L4 6.67v8c0 7.4 5.12 14.32 12 16 6.88-1.68 12-8.6 12-16v-8L16 1.33zm-2.67 21.34L8 17.33l1.88-1.88 3.45 3.44 8.79-8.78L24 12 13.33 22.67z' fill='%23f93154'/%3E%3C/svg%3E",
        },
        {
          title: "Unbiased Reviews",
          description:
            "Clients can read unbiased reviews from previous clients.",
          image:
            "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='24' fill='%23f93154'%3E%3Cpath d='M14.5 9h-9a.75.75 0 000 1.5h9a.75.75 0 100-1.5zm.75 4.249a.75.75 0 00-.75-.75h-9a.75.75 0 100 1.5h9a.75.75 0 00.75-.75zM8 6.5h4a1 1 0 001-1V3A3.006 3.006 0 009.192.107 3.045 3.045 0 007 3.087V5.5a1 1 0 001 1zm1.25-3.75a.75.75 0 11.057.286.75.75 0 01-.057-.287v.001z'/%3E%3Cpath d='M17.5 3h-2.75a.25.25 0 00-.25.25v1.5a.25.25 0 00.25.25H17a.5.5 0 01.5.5v12.792a.5.5 0 01-.146.354l-3.208 3.207a.5.5 0 01-.353.146H3a.5.5 0 01-.5-.5V5.5A.5.5 0 013 5h2.25a.25.25 0 00.25-.25v-1.5A.25.25 0 005.25 3H2.5a2 2 0 00-2 2v17a2 2 0 002 2h15a2 2 0 002-2V5a2 2 0 00-2-2z'/%3E%3Cpath d='M5.5 16a.75.75 0 100 1.5h3.75a.75.75 0 100-1.5H5.5z'/%3E%3C/svg%3E",
        },
        {
          title: "Advice Clients",
          description:
            "On questions to ask and things to ensure before booking a Tour.",
          image:
            "data:image/svg+xml;charset=utf-8,%3Csvg width='32' height='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M26.67 20.67c-1.67 0-3.27-.27-4.76-.76a1.36 1.36 0 00-1.36.32l-2.94 2.93a20.1 20.1 0 01-8.78-8.77l2.93-2.95c.37-.36.48-.88.33-1.35-.49-1.49-.76-3.09-.76-4.76C11.33 4.6 10.73 4 10 4H5.33C4.6 4 4 4.6 4 5.33A22.66 22.66 0 0026.67 28c.73 0 1.33-.6 1.33-1.33V22c0-.73-.6-1.33-1.33-1.33zM16 4v13.33l4-4h8V4H16z' fill='%23f93154'/%3E%3C/svg%3E",
        },
        {
          title: "Large pool of Operators",
          description:
            "We have the largest number of tour operators from Tanzania.",
          image:
            "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' width='24' height='16'%3E%3Cpath fill='%23f93154' d='M6.471 1.271a1 1 0 00-.877-.047A9.178 9.178 0 00.114 11.1a1.46 1.46 0 00.66 1 1.48 1.48 0 001.2.172l9.431-2.728a.5.5 0 00.344-.613c-.874-3.182-2.782-6.27-5.278-7.66zm11.51 5.847A9.187 9.187 0 008.792.5a.251.251 0 00-.15.442A15.258 15.258 0 0113.187 8.5a.5.5 0 00.621.344l3.832-1.108a.5.5 0 00.341-.618zm5.991 4.782A1.516 1.516 0 0023 10.772L18.274 9.3a.508.508 0 00-.289 0l-9.194 2.66a.5.5 0 00-.046.945l4.84 1.935a9.827 9.827 0 003.635.671 9.457 9.457 0 006.3-2.211 1.51 1.51 0 00.452-1.4z'/%3E%3C/svg%3E",
        },
        {
          title: "Cover All Destination",
          description: "We cover all destinations In Tanzania and Zanzibar.",
          image:
            "data:image/svg+xml;charset=utf-8,%3Csvg width='32' height='32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M16 14.533c-.813 0-1.467.654-1.467 1.467 0 .813.654 1.467 1.467 1.467.813 0 1.467-.654 1.467-1.467 0-.813-.654-1.467-1.467-1.467zm0-11.866C8.64 2.667 2.667 8.64 2.667 16S8.64 29.333 16 29.333 29.333 23.36 29.333 16 23.36 2.667 16 2.667zm2.92 16.253L8 24l5.08-10.92L24 8l-5.08 10.92z' fill='%23f93154'/%3E%3C/svg%3E",
        },
        {
          title: "Competitive Offers",
          description:
            "Compare over 10,000 Tour Packages offered by Top Operators.",
          image:
            "data:image/svg+xml;charset=utf-8,%3Csvg width='32' height='32' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 14 14'%3E%3Cpath fill='%23f93154' d='M7 .33a6.66 6.66 0 100 13.33A6.66 6.66 0 007 .33zm.67 10H6.33v-4h1.34v4zm0-5.33H6.33V3.67h1.34V5z'/%3E%3C/svg%3E",
        },
      ],
    };
  },
  methods: {
    whyUs() {
      this.isWhy = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.img-icon {
  min-width: 40px;
  min-height: 50px;
  img {
    width: 40px;
  }
}
</style>
