<template>
  <div class="black">
		<div class="container-fluid">
			<div class="row">
				<div class="col-12 d-flex justify-content-end line-black fixed-top">
					<span href="#login" data-toggle="modal">{{ txt }} </span>
          <!-- Modal Login -->
					<span>
						<a href="https://www.facebook.com/Prestamype/" target="_blank" class="f-icon">
							<img src="~/assets/images/facebook.png">
						</a>
					</span>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
export default {
  name: "BlackBar",
  props: {
    txt: String
  }
};
</script>

<style scoped>
/* Estilos para la barra negra */
.line-black {
  background: #000;
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  padding: 5px 0;
  letter-spacing: 0.2px;
}

.line-black span {
  cursor: pointer;
}

.f-icon {
  padding: 0 1rem;
}
</style>
