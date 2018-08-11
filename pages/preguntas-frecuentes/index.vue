<template>
  <div class="questions">
    <!-- Header -->
    <HeaderApp v-for="(infoh,index) in infos" :infoh="infoh" :key="index" class="parallax"/>
  </div>
</template>

<script>
 
 import HeaderApp from "@/components/HeaderApp"
  export default {
    name: "questions",
    components: {
      HeaderApp
    },
    data() {
      return {
        infos: [
          {
            txta: "Con nosotros no hay letra chica, ",
            txtb: " Aquí resolvemos tus dudas."
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
    background-image: url("https://res.cloudinary.com/prestamype/image/upload/v1533859859/prestamype/background/preguntasc.png");
  }


</style>