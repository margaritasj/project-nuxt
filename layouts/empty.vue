<template>
  <div>
    <BlackLine txt="INGRESAR"/>
    <ModalLogin/>
    <Navbar/>
    <nuxt/>
    <HowFunctionate/>
    <FollowUs/>
    <WhoSpeak/>
    <Footer/>
  </div>
</template>

<script>
import BlackLine from "@/components/BlackLine";
import ModalLogin from "@/components/ModalLogin"
import Navbar from "@/components/Navbar";
import HowFunctionate from "@/components/index/HowFunctionate";
import FollowUs from "@/components/index/FollowUs";
import WhoSpeak from "@/components/index/WhoSpeak";
import Footer from "@/components/Footer";

export default {
  components: {
    BlackLine,
    ModalLogin,
    Navbar,
    HowFunctionate,
    FollowUs,
    WhoSpeak,
    Footer
  }
};
</script>
<style scoped>

* {
  font-family: "Montserrat", sans-serif;
}
</style>
