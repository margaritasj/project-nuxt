<template>
  <div>
    <BlackLine txt="(01)480-0708"/>
    <NavbarApp/>
    <nuxt/>
    <CardCounter/>
    <SignUp/>
    <WhyInvert/>
    <CardList/>
    <WhoSpeak/>
    <Testimonials/>
    <OurAllies/>
    <Footer/>
  </div>
</template>

<script>

  import BlackLine from "@/components/BlackLine";
  import NavbarApp from "@/components/NavbarApp";
  import CardCounter from "@/components/CardCounter";
  import SignUp from "@/components/SignUp";
  import WhyInvert from "@/components/invert/WhyInvert";
  import CardList from "@/components/invert/CardList"
  import WhoSpeak from "@/components/home/WhoSpeak";
  import Testimonials from "@/components/home/Testimonials";
  import OurAllies from "@/components/home/OurAllies";
  import Footer from "@/components/Footer"

  export default {
    components: {
      BlackLine,
      NavbarApp,
      CardCounter,
      SignUp,
      WhyInvert,
      CardList,
      WhoSpeak,
      Testimonials,
      OurAllies,
      Footer
    }
  };

</script>
<style scoped>

  @import url(assets/css/root);
  
</style>