module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "author",
        name: "author",
        content: "Prestamype"
      },
      {
        hid: "robots",
        name: "robots",
        content: "all, index, follow"
      },
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
    css: [
      '@/assets/css/header.css',
      '@/assets/css/root.css',
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
    color: "#01cd78"
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
  },
  env: {
    baseURL: (process.env.NODE_ENV === 'production' ? 'http//your-url' : 'http://localhost:3000')
  }
};
