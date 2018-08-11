<template>
	<div class="text-center">
		<h3><small> S/. </small> {{ amount }} </h3>
	</div>
</template>
<script>
	export default {
		props: {
			amount: String
		}
	}
</script>
<style scoped>
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

