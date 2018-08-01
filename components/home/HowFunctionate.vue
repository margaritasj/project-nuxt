<template>
<!-- Seccion - como funciona -->
	<section class="container bg-white">
		<div class="row mt-5 mb-4">
			<div class="col-12 text-center">
				<h5 class="p-1">Cómo funciona</h5>
				<linetitle/>
			</div>
		</div>
		<div class="row mt-5 mb-4">
			<div class="col-12 d-flex justify-content-between">
				<img class="img-emp d-none d-md-block" src="@/assets/images/empresario.png">
				<img class="img-inv d-none d-md-block" src="@/assets/images/inversionista.png">
			</div>
			<div class="col-12 pl-0 d-none d-md-block ">
				<div class="arrow-md-box">
					<img class="arrow-md" src="@/assets/images/flecha-fintech.png">
				</div>
			</div>
			<card v-for="(nota,index) in notas" :nota="nota" :key="index" class="mb-4 col-12 col-sm-12 col-md-12 col-lg-4 card-md" v-bind:class="nota.bgcolor"/>
		</div>
  </section>
</template>
<script>
import Card from "@/components/home/Card";
import LineTitle from "@/components/home/LineTitle";

export default {
  data() {
    return {
      notas: [
        {
          title: "empresario",
          description:
            "Recibe el préstamo que necesita para hacer crecer su negocio.",
          bgcolor: "bg-light"
        },
        {
          title: "prestamype",
          description:
            "Conecta, asesora y gestiona el préstamo con condiciones justas para ambas partes.",
          bgcolor: "bg-white"
        },
        {
          title: "inversionista",
          description:
            "Rentabiliza mensualmente sus ahorros invirtiendo en proyectos de personas.",
          bgcolor: "bg-light",
          icon:"i-none"
        }
      ]
    };
  },
  components: {
		card: Card,
		linetitle: LineTitle
  }
};
</script>
<style scoped>
h5 {
  letter-spacing: 0.1rem;
  font-weight: 400;
}

.arrow-md-box {
  position: absolute;
  bottom: -15px;
  z-index: 1000;
}

.arrow-md {
  width: 100%;
}

.img-emp,
.img-inv {
  z-index: 2000;
}



/* ------------ Media para tablet y desktop------------ */
@media (min-width: 375px) {
}

@media (min-width: 425px) {
}

@media (min-width: 768px) {
  .card-md {
    background-color: #f8f9fa !important;
    border: none !important;
    margin-bottom: 0!important;
  }

  h5 {
    font-size: 2rem;
  }
}

@media (min-width: 1024px) {
}

@media (min-width: 1440px) {
}
</style>