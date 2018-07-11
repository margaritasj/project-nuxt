<template>
  <div class="logo">
    <nuxt-link class="navbar-brand nav-logo js-scroll-trigger" to="/">
    	<img src="~/assets/images/logo-prestamype-blanco.png" class="nav-logo nav-logo-sm ">
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "LogoNav"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-logo-sm {
  width: 8rem;
  padding: 0.5rem;
}
/* ------------ Media para tablet y desktop------------ */
@media (min-width: 450px) {
  .nav-logo {
    width: 10rem;
  }
}
</style>
