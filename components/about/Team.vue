<template>
  <div class="bg-gray">
    <section class="container">
      <div class="p-4">
        <div class="row">
          <h3 class="text-center col-12">NUESTRO EQUIPO</h3>
          <p class="text-center col-12">Nuestro equipo estรก liderado por los fundadores de la empresa, quienes buscan siempre la eficiencia en sus operaciones.</p>
        </div>
        <div class="row">
          <card-team v-for="(team,index) in teams" :team="team" :key="index" class="pl-2 pr-2"/>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import CardTeam from "@/components/about/CardTeam"
  export default {
    components: {
      CardTeam
    },
    data() {
      return {
        teams:[
          {
            img:"https://res.cloudinary.com/prestamype/image/upload/v1533948168/prestamype/personajes/carlos.png",
            name:"carlos ferreyros",
            url:"https://www.linkedin.com/in/carlos-ferreyros-ba9a34102/",
            profession:"gerente general"
          },
          {
            img:"https://res.cloudinary.com/prestamype/image/upload/v1533948168/prestamype/personajes/laure.png",
            name:"LAURE SCHLESINGER",
            url:"https://www.linkedin.com/in/laure-schlesinger/",
            profession:"gerente de operaciones"
          },
          {
            img:"https://res.cloudinary.com/prestamype/image/upload/v1533948168/prestamype/personajes/srcarlos.jpg",
            name:"CARLOS FERREYROS GARCร�A MONTERO",
            url:"https://www.linkedin.com/in/laure-schlesinger/",
            profession:"GERENTE LEGAL"
          },          
        ]
      }
    }
  }
</script>
<style scoped>
.bg-gray {
  background: #f1f1f1;
  padding: 60px 0;
}

.bg-gray h3 {
  font-weight: 800;
  margin-bottom: 80px;
  margin-top: 0;
}

.bg-gray p {
  max-width: 700px;
  font-weight: 600;
  font-size: 16px;
  margin: 0 auto;
  margin-bottom: 80px;
  color: #424242;
}

</style>

