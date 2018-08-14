<template>
	<div class="container">
		<div class="row p-3">
			<form class="col-12 bg-white p-2 rounded" action="">
				<counter-text textC="Si inviertes"/>
				<simulate-input/>
				<counter-text textC="Gana anualmente"/>
				<counter-amount amount="1300"/>
				<counter-text textC="Tasa fija"/>

			</form>
		</div>
	</div>
</template>
<script>

	import CounterText from "@/components/simulate-counter/CounterText";
	import SimulateInput from "@/components/simulate-counter/SimulateInput";
	import CounterAmount from "@/components/simulate-counter/CounterAmount"

	export default {
		components: {
			CounterText,
			SimulateInput,
			CounterAmount
		}
	} 

</script>
<style>





</style>

