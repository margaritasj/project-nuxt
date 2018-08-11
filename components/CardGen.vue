<template>
	<div class="text-center mb-5">
		<div class="icon-card">
			<img :src="info.img" :alt="info.name">
		</div>
		<h4 class="title-card text-uppercase"> {{ info.title }} </h4>
		<p class="p-card"> {{ info.description }} </p>
	</div>
</template>
<script>
	export default {
		props:{
			info: Object
		}
	}
</script>
<style>

	.icon-card {
		display: inline-block;
		background: #fff;
		width: 110px;
		height: 110px;
		position: relative;
		text-align: center;
		border-radius: 60px;
	}

	.title-card {
		font-weight: 800;
		margin: 25px 0;
		font-size: 20px;
		color: #7ab0bf;
	}

	.p-card {
		margin-bottom: 50px;
		font-size: 15px;
		padding: 0 30px;
		font-weight: 500;
		color: #323232;
		line-height: 1.57;
	}

</style>


