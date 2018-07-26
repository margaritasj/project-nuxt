<template>
  <div>
    <BlackLine txt="INGRESAR"/>
    <ModalLogin/>
    <NavbarApp/>
    <nuxt/>
    <HowFunctionate/>
    <FollowUs/>
    <WhoSpeak/>
    <Testimonials/>
    <OurAllies/>
    <Footer/>
  </div>
</template>

<script>
import BlackLine from "@/components/BlackLine";
import ModalLogin from "@/components/ModalLogin"
import NavbarApp from "@/components/NavbarApp";
import HowFunctionate from "@/components/index/HowFunctionate";
import FollowUs from "@/components/index/FollowUs";
import WhoSpeak from "@/components/index/WhoSpeak";
import Testimonials from "@/components/index/Testimonials";
import OurAllies from "@/components/index/OurAllies"
import Footer from "@/components/Footer"

export default {
  components: {
    BlackLine,
    ModalLogin,
    NavbarApp,
    HowFunctionate,
    FollowUs,
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
