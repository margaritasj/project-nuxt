<template>
  <div>
    <BlackLine txt="(01)480-0708"/>
    <NavbarApp/>
    <nuxt/>
    <Footer/>
  </div>
</template>
<script>

  import BlackLine from '~/components/BlackLine.vue'
  import NavbarApp from '~/components/NavbarApp.vue'
  import Footer from '~/components/Footer.vue'

  export default {
    components: {
    BlackLine,
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
