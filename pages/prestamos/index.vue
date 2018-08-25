<template>
  <div>
    <!-- Header -->
    <div class="parallax p-header">
      <HeaderApp v-for="(infoh,index) in infos" :infoh="infoh" :key="index"/>
    </div>
  </div>
</template>
<script>
 
  import HeaderApp from "@/components/HeaderApp";

  export default {
    components: {
      HeaderApp
    },
    data() {
      return {
        infos: [
          {
            txta: "Préstamos con",
            txtb: " garantía hipotecaria",
            span:" para empresarios que piensan en grande"
          }
        ]
       }
    },
    async asyncData() {


      return {

      };
    },
    head() {
      return {
      
      }  
    }
  }
</script>
<style scoped>

  @import url(assets/css/root.css);
  @import url(assets/css/header.css);

  .parallax {
    background-image: url("https://res.cloudinary.com/prestamype/image/upload/v1533859863/prestamype/background/emp.png");
  }

</style>