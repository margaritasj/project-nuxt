<template>
  <div class="">
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container">
				<logo/>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
		      <div class="navbar-nav text-uppercase ml-auto">
            <nuxt-link class="navbar-item nav-link" to="/">préstamos</nuxt-link>
            <nuxt-link class="navbar-item nav-link" to="/about">invertir</nuxt-link>
            <nuxt-link class="navbar-item nav-link" to="/projects">nosotros</nuxt-link>
            <nuxt-link class="navbar-item nav-link" to="/contact">preguntas frecuentes</nuxt-link>
            <nuxt-link class="navbar-item nav-link" to="/contact">artículos</nuxt-link>
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
.navbar {
  margin-top: 1rem;
  padding: 15px 0;
}

.fixed-top {
  z-index: 1000;
}

button {
  color: #fff;
}

.navbar-item {
  font-size: 1rem;
  font-weight: 700;
  padding: 1rem;
  color: #fff;
  box-shadow: 1px #fff;
}


@media (max-width: 575.98px) { }

</style>
