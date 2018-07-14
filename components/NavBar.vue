<template>
  <div class="">
    <nav class="navbar navbar-expand-lg fixed-top">
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
  name: "NavBar",
  components: {
    Logo
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fixed-top {
  z-index: 1000;
}
button {
  color: #fff;
}
.navbar {
  margin-top: 1rem;
  padding: 0.9rem 0;
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
</style>
