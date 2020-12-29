module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'cartclient',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
  auth: { 
    strategies: { 
      local: { 
        token: {
          property: 'meta.token',
        },
        user: {
          property: 'data',
          autoFetch: false,
        },
        endpoints: { 
          login: { 
            url: '/auth/login', 
            method: 'POST', 
          }, 
          // logout: { 
          //   url: '/api/v1/web/logout', 
          //   method: 'POST' 
          // }, 
          user: {
            url: '/auth/me', 
            method: 'get', 
            propertyName: false
          }

        } 
      } 
    } 
  },
  // auth: {
  //   strategies: {
  //     local: {
  //       endpoints: {
  //         login: {
  //           url: '/auth/login',
  //           method: 'post',
  //           propertyName: 'meta.token'
  //         },
  //         user: {
  //           url: '/auth/me',
  //           method: 'get',
  //           propertyName: 'data'
  //         },
  //         logout: false
  //       }
  //     }
  //   }
  // },

  // router: {
  //   middleware: [
  //     'auth',
  //   ]
  // },

  axios: {
    baseURL: 'http://local.cart/api'
  },

  css: [
    '~assets/styles/app.scss'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: {
        'postcss-custom-properties': false
      }
    },
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

