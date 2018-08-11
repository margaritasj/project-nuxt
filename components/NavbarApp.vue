<template>
  <div class="">
    <nav class="navbar navbar-expand-lg fixed-top" :class="{'scrolled':scrolled}">
      <div class="container-fluid">
        <div class="logo">
          <nuxt-link class="navbar-brand nav-logo js-scroll-trigger" to="/">
            <div class="logo-white logo-green" ></div>
          </nuxt-link>
        </div>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse bg-white" id="navbarResponsive">
		      <div class="navbar-nav text-uppercase text-center ml-auto">
            <nuxt-link class="navbar-item  nav-link align-self-sm-center" to="/prestamos">préstamos</nuxt-link>
            <nuxt-link class="navbar-item nav-link align-self-sm-center" to="/invertir">invertir</nuxt-link>
            <nuxt-link class="navbar-item nav-link align-self-sm-center" to="/nosotros">nosotros</nuxt-link>
            <nuxt-link class="navbar-item nav-link align-self-sm-center" to="/preguntas-frecuentes">preguntas frecuentes</nuxt-link>
            <nuxt-link class="navbar-item nav-link align-self-sm-center" to="/articulos">artículos</nuxt-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      scrolled: false
    };
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 50;
    }
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .fixed-top {
    z-index: 10000;
  }

  .navbar {
    transition: 0.35s all ease;
    margin-top: 1.8rem;
  }

  .navbar-collapse {
    margin: 0.8rem;
    margin-top: 0.2rem;
    border-radius: 0.6rem;
    max-height: 35vh;
  }
  .navbar-item {
    font-size: 0.9rem;
    font-weight: 600;
    padding: 0.55rem;
  }
  .nuxt-link:hover,
  .navbar-nav .nuxt-link-active {
    box-shadow: 0 1px 5px 1px #d2cece;
    border: 0.2px solid #c9c9c9;
    border-radius: 1rem;
  }


  .navbar-toggler {
    color: white;
  }

  .navbar-collapse a {
    color: #424242;
  }

  .logo-white {
    background-image: url("~/assets/images/logo-prestamype-blanco.png");
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: 7rem;
    text-align: center;
    height: 1.6rem;
    width: 8.2rem;
    padding: 0.5rem;
  }


/* ------------ Media para tablet y desktop------------ */

  @media (min-width: 992px) {
    .navbar-expand-lg .navbar-nav .nav-link {
      padding-right: 1rem;
      padding-left: 1rem;
      color: #fff;
    }

    .logo-white {
      background-size: cover;
      text-align: center;
      width: 9rem;
    }
  }

  @media (min-width: 1024px) {
    .navbar {
      margin: 1.7rem 0;
      padding-top: 1rem;
    }

    .navbar-item {
      font-size: 0.8rem;
      font-weight: 700;
      margin: 0 1rem;
    }

    .navbar-collapse {
      height: 0;
    }

    .navbar-item:hover,
  {
      box-shadow: 0 1px 5px 1px #d2cece;
      border: 0px;
      border-radius: 2rem;
    }
  }

  /* ------------------ Estilos - Scrolled Navbar ------------------ */

  .scrolled {
    background: #fff;
    z-index: 3000;
    box-shadow: 0 1px 5px 1px #d2cece;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transition-duration: 0.4s;
  }

  .scrolled button,
  .scrolled .navbar-item {
    color: #424242 !important;
  }

  .scrolled div.logo-green {
    background-image: url("~/assets/images/logo-prestamype.png");
  }

  .scrolled button:hover,
  .scrolled button:active,
  .scrolled button:focus {
    background-color: #01cd78;
    color: #fff!important;
    border-radius: 0;
    height: 2.5rem;
  }

  .scrolled .navbar-item:hover,
  .scrolled .navbar-nav .nuxt-link-active {
    box-shadow: 0 1px 5px 1px #01cd78;
    border: .5px solid #01cd78;
    border-radius: 1rem;
  }

/* --------------------------------------------------- */
</style>
