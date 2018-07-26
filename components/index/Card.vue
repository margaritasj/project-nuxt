<template>
	<div class="col-12 text-center p-4 mb-0">
		<h6 class="text-uppercase font-weight-bold p-3"> {{ nota.title }} </h6>
		<p class="m-2"> {{ nota.description }} </p>
		<Arrow/>
	</div>
</template>
<script>
import Arrow from '@/components/index/Arrow'

export default {
	components: {
		Arrow
	},
	props:{
		nota: Object
	},
};
</script>
<style scoped>

p {
	font-weight: 200;
}

@media (min-width: 768px) {

	h6 {
		font-size: 1.3rem;
		font-weight: 900;
		letter-spacing: 0;
	}
}

</style>
