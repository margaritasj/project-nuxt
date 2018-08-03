<template>
  <div>
    <BlackLine txt="(01)480-0708"/>
    <NavbarApp/>
    <nuxt/>
    <WhoSpeak/>
    <Testimonials/>
    <OurAllies/>
    <Footer/>
  </div>
</template>

<script>

  import BlackLine from "@/components/BlackLine";
  import NavbarApp from "@/components/NavbarApp";
  import WhoSpeak from "@/components/home/WhoSpeak";
  import Testimonials from "@/components/home/Testimonials";
  import OurAllies from "@/components/home/OurAllies"
  import Footer from "@/components/Footer"

  export default {
    components: {
      BlackLine,
      NavbarApp,
      WhoSpeak,
      Testimonials,
      OurAllies,
      Footer
    }
  };

</script>
<style scoped>

  * {
    font-family: "Montserrat", sans-serif;
  }
  
</style>