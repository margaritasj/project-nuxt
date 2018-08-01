<template>
	<div class="arrow arrow-none">
		<img src="~/assets/images/flechas.png">
	</div>
</template>
<script>
export default {
  name: "arrow",
};
</script>
<style scoped>
.arrow img {
  width: 30px;
}

.arrow {
  display: block;
}

.arrow {
  position: absolute;
  top: 90%;
  z-index: 100;
  left: 0;
  right: 0;
}

/* ------------ Media para tablet y desktop------------ */

@media (min-width: 768px) {
  .arrow-none {
    display: none;
  }
}
</style>