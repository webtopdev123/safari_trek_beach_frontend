export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Safari Trek Beach',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: ' Safari Trek Beach is the biggest market place for Tanzania tour packages. We help travellers find the best Tour Operators with the tour packages of their choice, to suit their budget and standard. We are the experts when it involves Tours and Holidays in Tanzania. Safari Trek Beach enables you to compare different tour operators on different categories such as Luxury, Lodge, Camping safaris or Mountain Climbing tours as well as Beach Holidays. ' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'Safari Trek Beach'
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@STB' },
      { hid: 'twitter:creator', name: 'twitter:creator', content: '@STB' },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Choose Best African Safaris - Safari Trek Beach'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: ' Safari Trek Beach is the biggest market place for Tanzania tour packages. We help travellers find the best Tour Operators with the tour packages of their choice, to suit their budget and standard. We are the experts when it involves Tours and Holidays in Tanzania. Safari Trek Beach enables you to compare different tour operators on different categories such as Luxury, Lodge, Camping safaris or Mountain Climbing tours as well as Beach Holidays. '
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://safaritrekbeach.org/_nuxt/img/aboutus_banner.65bdc7d.jpg'
      },
      { hid: 'description', name: 'description', content: ' Safari Trek Beach is the biggest market place for Tanzania tour packages. We help travellers find the best Tour Operators with the tour packages of their choice, to suit their budget and standard. We are the experts when it involves Tours and Holidays in Tanzania. Safari Trek Beach enables you to compare different tour operators on different categories such as Luxury, Lodge, Camping safaris or Mountain Climbing tours as well as Beach Holidays. ' },
      {
        hid: 'og:url',
        name: 'og:url',
        content: 'https://dev.safaritrekbeach.org'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://dev.safaritrekbeach.org/_nuxt/img/aboutus_banner.65bdc7d.jpg'
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        content: 'Choose Best Africa Safaris - Safari Trek Beach'
      },

      { hid: 'og:title', name: 'og:title', content: 'Choose Best Africa Safaris - Safari Trek Beach' },
      {
        hid: 'og:description',
        name: 'og:description',
        content: 'Choose Best Africa Safaris - Safari Trek Beach'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '~/assets/scss/main.scss',
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/persistedState.client.js', mode: 'client' },
    { src: '~/plugins/vue-datepicker.js', ssr: false },
    { src: '~/plugins/vue-lazyload.js', mode: 'client' },
    { src: '~/plugins/vue-content-placeholders.js', mode: 'client' },
    { src: '~/plugins/vue-currency-filter.js', mode: 'client' },
    { src: '~/plugins/vue-scrollto.js', mode: 'client' },
    { src: '~/plugins/vue-mdb-ui-kit.js', mode: 'client' },
    { src: '~/plugins/vue-meta.js', ssr: true },
    { src: '~/plugins/v-viewer.js', mode: 'client' },
    { src: '~/plugins/vue-paginate.js', mode: 'client' },
    { src: '~/plugins/vue-star-rating.js', mode: 'client' },
    { src: '~/plugins/vue-awesome-swiper.js', mode: 'client' },
    { src: '~/plugins/vue-read-more.js', mode: 'client' },
    { src: '~/plugins/vue-axios.js', mode: 'client' },
    { src: '~/plugins/vue-youtube-embed.js', mode: 'client' },
    { src: '~/plugins/apexchart.js', mode: 'client' },
    { src: '~/plugins/phonenumber.js', mode: 'client' },
    { src: '~plugins/password.js', mode: 'client' },
    '@/plugins/jsonld.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['nuxt-leaflet', { /* module options */ }],
    ['@nuxt/http']
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  server: {
    port: 3002,
  }
}
