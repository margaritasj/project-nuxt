<template>
	<section class="container-fluid bg-green">
		<div class="row">
			<div class="col-12 text-center pt-5">
				<h5 class="p-2 text-white h5">Casos de éxito</h5>
				<linetitle class="bg-white"/>
			</div>
			<div class="col-12 pb-5">
				<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
					<ol class="carousel-indicators">
						<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
						<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
					</ol>
					<div class="carousel-inner text-white">
						<div class="carousel-item active text-center">
							<p class="p-1 shadow-effect"> "Gracias a Prestamype logré mudarme a un local más grande en dos oportunidades. Incluso contratar más personal para cubrir la demanda. Estoy muy agradecida." </p>	
							<br>
							<h6 class="font-weight-bold mb-5 name-user"> GRECIA AGUIRRE</h6>
						</div>
						<div class="carousel-item text-center">
							<p class="p-1 shadow-effect"> "Gracias a Prestamype logré mudarme a un local más grande en dos oportunidades. Incluso contratar más personal para cubrir la demanda. Estoy muy agradecida." </p>	
							<br>
							<h6 class="font-weight-bold mb-5 name-user"> GRECIA AGUIRRE</h6>
						</div>
						<div class="carousel-item text-center">
							<p class="p-1 shadow-effect"> "Gracias a Prestamype logré mudarme a un local más grande en dos oportunidades. Incluso contratar más personal para cubrir la demanda. Estoy muy agradecida." </p>	
							<br>
							<h6 class="font-weight-bold mb-5 name-user"> GRECIA AGUIRRE</h6>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import LineTitle from "@/components/index/LineTitle";
export default {
  components: {
    linetitle: LineTitle
  }
};
</script>

<style scoped>
.bg-green {
  background-color: rgba(16, 152, 83, 0.89);
}

.carousel-item {
  height: 100%;
  padding: 1.5rem;
  border-radius: 1rem;
  font-size: 0.9rem;
}

.name-user {
  margin: -17px auto 0;
  display: table;
  width: auto;
  background: #01cd78;
  padding: 9px 35px;
  border-radius: 12px;
  text-align: center;
  color: #fff;
  box-shadow: 0 9px 18px rgba(0, 0, 0, 0.12), 0 5px 7px rgba(0, 0, 0, 0.05);
}

.shadow-effect {
  background: transparent;
  border-radius: 1rem;
  text-align: center;
  border: 1px solid #53a04c;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.1), 0 15px 12px rgba(0, 0, 0, 0.02);
}

@media (min-width: 768px) {
  .h5 {
    font-size: 2rem;
  }

  p {
    font-size: 1.5rem;
  }
}
</style>