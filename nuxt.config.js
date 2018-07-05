module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "Proyecto prestamype",
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: "proyecto basado en nuxt.js"
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico"
      },
      {
        // include bootstrap css
        rel: "stylesheet",
        href:"https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
      },
      {
        // include google fonts css
        rel: "stylesheet",
        href:"https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,800,900"
      },
      {
        rel:"stylesheet",
        href:"https://use.fontawesome.com/releases/v5.1.0/css/all.css"
      }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js'},
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js'},
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js'}
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: "#3B8070"
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
