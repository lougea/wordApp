const join = require('path').join
const tailwindJS = join(__dirname, 'tailwind.config.js')
export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [{ src: 'https://kit.fontawesome.com/106294197b.js' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~assets/css/tailwind.css'],
  /*
   ** Plugins to load before mounting the App
   */
  // plugins: ['~/plugins/vuefire.js', '~/plugins/firebaseAuth.js'],
  /*
   ** Middleware for router authentication
   */
  // router: {
  //   middleware: 'router-auth'
  // },
  /*
   ** Nuxt.js dev-modules
   */
  devModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-purgecss'
  ],
  purgeCSS: {
    // your settings here
    mode: 'postcss'
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    postcss: {
      plugins: {
        tailwindcss: tailwindJS,
        'postcss-import': {},
        autoprefixer: {}
      }
    }
    // extend(config, ctx) {}
  }
}
