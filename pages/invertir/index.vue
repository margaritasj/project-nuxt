<template>
  <div class="invert">
    <!-- Header -->
    <HeaderApp v-for="(infoh,index) in infos" :infoh="infoh" :key="index" class="parallax"/>
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

  @import url(assets/css/root);
  @import url(assets/css/header);

  .parallax {
    background-image: url("https://res.cloudinary.com/prestamype/image/upload/v1533326661/banner-inv.png");  
    height: 83vh;
  }

  .box-invert {
    border-radius: 1rem;
    margin-top: -140px;
  }

  /* Small devices (landscape phones, 576px and up) */
  @media (min-width: 576px) { 
    .parallax {
     height: 60vh!important;
    }
  }

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) { 
    .box-invert {
      margin-top: -30px;
    }
  }

  /* Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {  
    
  }

  /* Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) { 

  }

</style>

