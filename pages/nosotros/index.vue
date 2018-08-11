<template>
  <div class="we">
    <!-- Header -->
    <HeaderApp v-for="(infoh,index) in infos" :infoh="infoh" :key="index" class="parallax"/>
  </div>
</template>

<script>
 
 import HeaderApp from "@/components/HeaderApp"
  export default {
    name: "we",
    layout: "we",
    components: {
      HeaderApp
    },
    data() {
      return {
        infos: [
          {
            txta: "Conoce más de nosotros,",
            txtb: " tus socios para crecer."
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
    background-image: url("https://res.cloudinary.com/prestamype/image/upload/v1533859858/prestamype/background/nosotrosc.png");
  }


</style>
