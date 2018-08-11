<template>
  <div class="text-center">
		<button class="btn" @click.prevent="doThis">{{ txtBtn }}</button>
	</div>
</template>
<script>
	export default {
		props: {
			txtBtn:String
		}
	}
</script>
<style>
	.btn {
		background: #2bb5c5;
		border: none;
		color: #fff;
		width: 260px;
		font-weight: 600;
		font-size: 18px;
		border-radius: 5px;
		padding: 10px;
		display: block;
		margin: 0 auto;
	}
</style>

