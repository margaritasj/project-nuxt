<template>
	<div class="container">
		<div class="row p-3">
			<form class="col-12 bg-white p-2 rounded border border-primary" action="">
				<counter-text textC="Si inviertes"/>
				<counter-group/>
				<counter-text textC="Gana anualmente"/>
				<counter-amount amount="1300"/>
				<counter-text textC="Tasa fija"/>
			</form>
		</div>
	</div>
</template>
<script>

	import CounterText from "@/components/simulate-counter/CounterText";
	import CounterGroup from "@/components/simulate-counter/CounterGroup";
	import CounterAmount from "@/components/simulate-counter/CounterAmount"

	export default {
		components: {
			CounterText,
			CounterGroup,
			CounterAmount
		}
	} 

</script>
<style>





</style>

