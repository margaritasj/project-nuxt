<template>
	<div class="container">
		<div class="row p-3">
			<form class="col-12 bg-white p-2 rounded" action="">
				<counter-text textC="Si inviertes"/>
				<simulate-input/>
				<counter-text textC="Gana anualmente"/>
				<div class="text-center">
					<h3><small> S/. </small> </h3>
				</div>
				<counter-text textC="Tasa fija"/>
			</form>
		</div>
	</div>
</template>
<script>

	import CounterText from "@/components/simulate-counter/CounterText";
	import SimulateInput from "@/components/simulate-counter/SimulateInput";

	export default {
		components: {
			CounterText,
			SimulateInput,
		}
		
	} 

</script>
<style>
	h3 small {
		font-weight: 500;
		color: #2bb5c5;
	}
	h3 {
		margin: 0;
		color: #424242;
		font-size: 40px;
		font-weight: 800;
		color: #2bb5c5;
	}




</style>

