<template>
	<div class="logo-img text-center">
		<a target="_blank" :href="logo.url">
			<img :src="logo.img" class="img"/>
		</a>
	</div>
</template>
<script>
export default {
  props: {
    logo: Object
  }
};
</script>
<style scoped>

img {
  max-width: 80px;
  margin: 10px;
}
</style>

