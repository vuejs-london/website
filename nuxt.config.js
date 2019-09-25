import open from 'open'

export default {
  /*
   ** Set source directory
   */
  srcDir: 'src/',
  /*
   ** Headers of the page
   */
  head: {
    title: 'Vue.js London | 4-5 October 2019 | Conference',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1' },
      {
        hid: 'description',
        content: 'Vue.js London | 4-5 October 2019 | Conference',
      },
      {
        name: 'description',
        content: 'Vue.js London | 4-5 October 2019 | Conference',
      },
      {
        property: 'og:title',
        content: 'Vue.js London | 4-5 October 2019 | Conference',
      },
      {
        property: 'og:site_name',
        content: 'Vue.js London | 4-5 October 2019 | Conference',
      },
      { property: 'og:url', content: 'https://vuejs.london' },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:description',
        content: 'Vue.js London | 4-5 October 2019 | Conference',
      },
      { property: 'og:image', content: 'img/cover.png' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:site', content: '@vue_london' },
      {
        property: 'twitter:image',
        content: 'https://vuejs.london/img/cover.png',
      },
      {
        property: 'twitter:title',
        content: 'Vue.js London | 4-5 October 2019 | Conference',
      },
      {
        property: 'twitter:description',
        content: 'Vue.js London | 4-5 October 2019 | Conference',
      },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#3EB882' },
    ],
    link: [
      { rel: 'preload', href: 'https://www.universe.com/embed2.js', as: 'script' },
      {
        rel: 'prerender',
        href:
          'https://www.universe.com/embed2/tickets/vue-js-london-2019-conference-tickets-mountain-view-V1BH5D?state=%7B%22analytics%22%3A%7B%22host%22%3A%7B%22ref%22%3Anull%2C%22url%22%3A%22https%3A%2F%2Fvuejs.london%2Ftickets%22%7D%2C%22google%22%3A%7B%22clientId%22%3A%22383231438.1554980838%22%7D%2C%22ref%22%3Anull%7D%2C%22accessKeys%22%3A%5B%5D%2C%22currentDiscountCode%22%3A%7B%22code%22%3Anull%7D%2C%22buttonColor%22%3A%22%2342b883%22%2C%22buttonText%22%3A%22Get%20Tickets%22%2C%22targetType%22%3A%22Listing%22%2C%22targetId%22%3A%22vue-js-london-2019-conference-tickets-mountain-view-V1BH5D%22%2C%22widgetHeight%22%3Anull%2C%22widgetId%22%3A%22038d1bb6-2779-41f3-b0ff-f21a39816ded%22%7D',
      },

      {
        rel: 'prerender',
        href:
          'https://www.universe.com/embed2/tickets/vue-js-london-2019-conference-tickets-mountain-view-V1BH5D?state=%7B%22analytics%22%3A%7B%22host%22%3A%7B%22ref%22%3Anull%2C%22url%22%3A%22http%3A%2F%2Flocalhost%3A3000%2Ftickets%22%7D%2C%22google%22%3A%7B%22clientId%22%3A%221824927216.1559499219%22%7D%2C%22ref%22%3Anull%7D%2C%22accessKeys%22%3A%5B%5D%2C%22currentDiscountCode%22%3A%7B%22code%22%3Anull%7D%2C%22buttonColor%22%3A%22%2342b883%22%2C%22buttonText%22%3A%22Get%20Tickets%22%2C%22targetType%22%3A%22Listing%22%2C%22targetId%22%3A%22vue-js-london-2019-conference-tickets-mountain-view-V1BH5D%22%2C%22widgetHeight%22%3Anull%2C%22widgetId%22%3A%2268d9c17c-6c8b-4cbb-b852-ac62698cb27f%22%7D',
      },
      { rel: 'icon', type: 'image/x-icon', href: '/img/logo-48.png' },
      { rel: 'manifest', href: '/manifest.json' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600&amp;subset=latin-ext',
      },
    ],
  },

  plugins: [
    { src: '~plugins/drift.client.js', mode: 'client' },
    { src: '~plugins/ga.js', mode: 'client' },
  ],

  modules: ['@nuxtjs/pwa', '@nuxtjs/onesignal'],

  oneSignal: {
    cdn: true,
    init: {
      appId: '34fc5412-6b71-4692-94d3-d6fc93eae038',
    },
  },

  loading: { color: '#3B8070' },

  css: ['~/style'],

  hooks: {
    listen(server, { host, port }) {
      if (process.env.NODE_ENV !== 'production') {
        open(`http://${host}:${port}`)
      }
    },
  },

  build: {
    optimization: {
      runtimeChunk: true,
      splitChunks: {
        chunks: 'async',
        minSize: 30000,
        maxSize: 0,
        cacheGroups: {
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            enforce: true,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true,
          },
        },
      },
    },
    postcss: {
      order: [
        'postcss-import',
        'postcss-nested-ancestors',
        'postcss-nested',
        'postcss-extend',
        'postcss-preset-env',
        'postcss-calc',
      ],

      plugins: {
        'postcss-import': { path: './src' },
        'postcss-nested-ancestors': {},
        'postcss-nested': {},
        'postcss-extend': {},
        'postcss-preset-env': {
          stage: 1,
          importFrom: ['./src/style/definition/media.css'],
        },
        'postcss-calc': {},
      },
    },
  },
}
