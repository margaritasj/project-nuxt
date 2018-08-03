<template>
  <div class="invert">
    <!-- Header -->
    <HeaderApp v-for="(infoh,index) in infos" :infoh="infoh" :key="index"/>
  </div>
</template>

<script>
 
 import HeaderApp from "@/components/HeaderApp"
  export default {
    name: "invert",
    layout: "invert",
    components: {
      HeaderApp
    },
    data() {
      return {
        infos: [
          {
            img:"https://res.cloudinary.com/prestamype/image/upload/v1533326661/banner-inv.png",
            name: "banner-invert",  
            txta: "RENTABILIZA TUS AHORROS",
            txtb: "DE LA FORMA MÁS SEGURA"
          },
        ]
      }
    }
  };
</script>
<style scoped>
  .container-fluid {
    padding-right: 15px;
    padding-left: 15px;
  }

  img.masthead {
    width: 100vw;
    height: 75vh;
    display: block;
    object-fit: cover;
    padding-top: 3rem;
  }

</style>

