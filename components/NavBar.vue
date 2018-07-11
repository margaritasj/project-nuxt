<template>
  <div class="">
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container">
				<logo/>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
		      <div class="navbar-nav text-uppercase ml-auto text-center">
            <nuxt-link class="navbar-item nav-link" to="/prestamos">préstamos</nuxt-link>
            <nuxt-link class="navbar-item nav-link" to="/invertir">invertir</nuxt-link>
            <nuxt-link class="navbar-item nav-link" to="/nosotros">nosotros</nuxt-link>
            <nuxt-link class="navbar-item nav-link" to="/preguntas">preguntas frecuentes</nuxt-link>
            <nuxt-link class="navbar-item nav-link" to="/articulos">artículos</nuxt-link>
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
  background-color: #fff;
  height: 35vh;
}

.navbar-item {
  font-size: 0.9rem;
  font-weight: 600;
  padding: 0.55rem;
  color: #424242;
}

.navbar-item:hover {
  border: 1px solid #c9c9c9;
  border-radius: 0.6rem;
}

/* ------------ Media para tablet y desktop------------ */
@media (min-width: 1024px) {
  .navbar-item {
    font-size: 1rem;
    font-weight: 700;
    padding: 1rem;
    color: #fff;
    box-shadow: 1px #fff;
  }
  .navbar-collapse {
    height: 0;
  }
}
</style>
