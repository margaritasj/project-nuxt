<template>
  <div>
    <BlackLine txt="INGRESAR"/>
    <ModalLogin/>
    <NavBar/>
    <nuxt/>
    <Footer/>
  </div>
</template>
<script>
  import BlackLine from '~/components/BlackLine.vue'
  import ModalLogin from '~/components/ModalLogin.vue'
  import NavBar from '~/components/NavBar.vue'
  import Footer from '~/components/Footer.vue'

  export default {
    components: {
    BlackLine,
    ModalLogin,
    NavBar,
    Footer
    }
  }
</script>

<style>
html {
  box-sizing: border-box;
}

*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family:'Montserrat', sans-serif;
}

</style>
