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
    title: 'Vue.js London | October 2020 | Conference',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1' },
      {
        hid: 'description',
        content: 'Vue.js London | October 2020 | Conference',
      },
      {
        name: 'description',
        content: 'Vue.js London | October 2020 | Conference',
      },
      {
        property: 'og:title',
        content: 'Vue.js London | October 2020 | Conference',
      },
      {
        property: 'og:site_name',
        content: 'Vue.js London | October 2020 | Conference',
      },
      { property: 'og:url', content: 'https://vuejs.london' },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:description',
        content: 'Vue.js London | October 2020 | Conference',
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
        content: 'Vue.js London | October 2020 | Conference',
      },
      {
        property: 'twitter:description',
        content: 'Vue.js London | October 2020 | Conference',
      },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#3EB882' },
    ],
    link: [
      { rel: 'preload', href: 'https://www.universe.com/embed2.js', as: 'script' },
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
            test: /[/\\]node_modules[/\\]/,
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
