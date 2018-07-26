<template>
  <div>
    <nav class="navbar navbar-expand-lg fixed-top" :class="{'scrolled':scrolled}">
      <div class="container-fluid">
				<logo/>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse bg-white" id="navbarResponsive">
		      <div class="navbar-nav text-uppercase text-center ml-auto">
            <nuxt-link class="navbar-item nav-link align-self-sm-center" to="/prestamos">préstamos</nuxt-link>
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
import Logo from "./Logo.vue";
  export default {
    components: {
      Logo
    },
    data() {
      return {
        scrolled: false,
      }
    },
    methods: {
      handleScroll() {
        this.scrolled = window.scrollY > 50;
      }
    },
    beforeMount() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll);
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fixed-top {
  z-index: 1000;
}
button {
  color: #fff;;
}
.navbar {
  margin-top: 1rem;
  padding: 0.9rem 0;
  transition: 0.35s all ease;
  color: #fff;
}
.navbar-collapse {
  margin: 0.8rem;
  margin-top: 0;
  border-radius: 0.6rem;
  max-height: 35vh;
}
.navbar-item {
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.55rem;
  color: #424242;
}
.navbar-item:hover {
  box-shadow: 0 1px 5px 1px #d2cece;
  border: 1px solid #c9c9c9;
  border-radius: 0.6rem;
}

/* ------------ Media para tablet y desktop------------ */
@media (min-width: 992px) {
  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 1rem;
    padding-left: 1rem;
  }
}

@media (min-width: 1024px) {
  .navbar {
    margin: 2rem;
  }

  .navbar-item {
    font-size: 0.8rem;
    font-weight: 700;
    color: #fff;
    margin: 0 1rem;
  }

  .navbar-collapse {
    height: 0;
  }

  .navbar-item:hover,
  .nuxt-link-exact-active,
  .nuxt-link-active {
    box-shadow: 0 1px 5px 1px #d2cece;
    border: 0px;
    border-radius: 2rem;
  }
}

/* ------------------ Scroll Navbar ------------------ */


.scrolled {
  background: #eee;
  z-index: 3000;
  color: #000!important;
}

.scrolled > nuxt-link.navbar-item {
  color: #000!important;
}


/* --------------------------------------------------- */
</style>
