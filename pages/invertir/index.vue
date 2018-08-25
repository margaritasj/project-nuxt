<template>
  <div>
    <!-- Header -->
    <div class="parallax p-header">
      <HeaderApp v-for="(infoh,index) in infos" :infoh="infoh" :key="index"/>
    </div>
    <!-- Sections -->
    <div class="box-invert bg-white ml-3 mr-3">
      <CardCounter/> 
    </div>
    <SignUp/>
    <WhyInvert/>
    <CardList/>
  </div>
</template>

<script>
 
  import HeaderApp from "@/components/HeaderApp";
  import CardCounter from "@/components/CardCounter";
  import SignUp from "@/components/SignUp";
  import WhyInvert from "@/components/invert/WhyInvert";
  import CardList from "@/components/invert/CardList";
  export default {
    name: "invert",
    components: {
      HeaderApp,
      CardCounter,
      SignUp,
      WhyInvert,
      CardList,
    },
    data() {
      return {
        infos: [
          {
            txta: "RENTABILIZA TUS AHORROS",
            txtb: "DE LA FORMA MÁS SEGURA"
          }
        ]
      }
    }
  };
</script>
<style scoped>

  @import url(assets/css/root.css);
  @import url(assets/css/header.css);

  .parallax {
    background-image: url("https://res.cloudinary.com/prestamype/image/upload/v1533326661/banner-inv.png");  
  }

  .box-invert {
    border-radius: 1rem;
    margin-top: -140px;
  }


</style>

