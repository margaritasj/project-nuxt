<template>
  <div class="black">
		<div class="container">
			<div class="row pr-5">
				<div class="col-12 d-flex justify-content-end line-black fixed-top">
					<span><img src="~/assets/images/icono_telefono_footer.png" alt="">{{ txt }}</span>
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
  },
  methods: {


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
  z-index: 4000;
}

.line-black span {
  cursor: pointer;
}

.f-icon {
  padding: 0 1rem;
}

span {
  font-size: 0.95rem;
  font-weight: 600;
  padding: 0 .4rem;
}

img {
  padding: 0 1rem;
}
</style>
