<template>
  <div>
    <black-line txt="INGRESAR"/>
    <modal-login/>
    <nav-bar/>
    <home/>
    <nuxt/>
  </div>
</template>
<script>
  import BlackLine from '~/components/BlackLine.vue'
  import ModalLogin from '~/components/ModalLogin.vue'
  import NavBar from '~/components/NavBar.vue'
  import Home from '~/components/Home.vue'

  export default {
    components: {
    BlackLine,
    ModalLogin,
    NavBar,
    Home
    }
  }
</script>

<style>
html {
  box-sizing: border-box;
  font-family:'Montserrat', sans-serif;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;

}

</style>
