<template>
  <div>
    <BlackLine txt="INGRESAR"/>
    <ModalLogin/>
    <NavbarApp/>
    <nuxt/>
    <Footer/>
  </div>
</template>
<script>
  import BlackLine from '~/components/BlackLine.vue'
  import ModalLogin from '~/components/ModalLogin.vue'
  import NavbarApp from '~/components/NavbarApp.vue'
  import Footer from '~/components/Footer.vue'

  export default {
    components: {
    BlackLine,
    ModalLogin,
    NavbarApp,
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
