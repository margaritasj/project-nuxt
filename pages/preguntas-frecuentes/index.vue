<template>
  <div>
    <!-- Header -->  
    <div class="parallax p-header">
      <HeaderApp v-for="(infoh,index) in infos" :infoh="infoh" :key="index"/>
    </div>
    <!-- Sections -->
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

  @import url(assets/css/root.css);
  @import url(assets/css/header.css);

  .parallax {
    background-image: url("https://res.cloudinary.com/prestamype/image/upload/v1533859859/prestamype/background/preguntasc.png");
  }


</style>