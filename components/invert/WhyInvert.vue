<template>
  <!-- Seccion - Por qué invertir en Prestamype -->
	<section class="container">
		<div class="row mt-5 mb-1">
			<div class="col-12 text-center">
				<h5 class="p-1">¿Por qué invertir en Prestamype?</h5>
				<line-title/>
			</div>
		</div>
		<div class="row mt-5 mb-1">
			<card-gen v-for="(info,index) in infos" :info="info" :key="index" class="col-12 col-lg-4"/>	
		</div>
	</section>
</template>
<script>

	import CardGen from "@/components/CardGen";
	import LineTitle from "@/components/LineTitle";
	export default {
		components: {
			CardGen,
			LineTitle
		},
		data() {
			return {
				infos:[
					{
						img:"https://res.cloudinary.com/prestamype/image/upload/v1533748907/prestamype/icons/dolar.png",
						name: "icon-dolar",
						title: "inversión segura",
						description: "Tu capital está totalmente asegurado gracias a una garantía hipotecaria inscrita a tu nombre en Registros Públicos."
					},
					{
						img:"https://res.cloudinary.com/prestamype/image/upload/v1533748907/prestamype/icons/agree.png",
						name: "icon-agree",
						title: "ASESORÍA DE INICIO A FIN",
						description: "Gestionamos tu inversión hasta el levantamiento de la hipoteca, siempre de manera personalizada."
					},
					{
						img:"https://res.cloudinary.com/prestamype/image/upload/v1533748950/prestamype/icons/money.png",
						name: "icon-money",
						title: "rentabilidad al 20%",
						description: "Prestando directamente tus ahorros, evitas los márgenes altos de los intermediarios y recibes la rentabilidad que mereces."
					}
				]
			}
		}
	}

</script>


