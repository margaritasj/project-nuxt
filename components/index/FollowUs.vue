<template>
<!-- Seccion de siguenos -->
  <section class="container-fluid img-green text-white pt-5">
		<div class="row m-3">
			<h5 class="col-12 text-uppercase pt-5 pb-5">Síguenos en: 
        <img src="@/assets/images/fb-circular-2.png" alt="fb-circular">
      </h5>
		</div>
  </section>
</template>
<style scoped>
.img-green {
  background-image: url("~/assets/images/separador.jpg");
  background-attachment: scroll;
  background-position: center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: 200%;
  text-align: center;
  height: 39vh;
  width: 100%;
}

h5 {
  font-weight: 800;
  letter-spacing: 2px;
}

img {
  width: 65px;
}

/* ------------ Media para tablet y desktop------------ */
@media (min-width: 375px) {
  .img-green {
    background-size: 150%;
    height: 33vh;
  }

  h5 {
    font-size: 1.5rem;
  }

  img {
    width: 70px;
  }
}

@media (min-width: 768px) {
  .img-green {
    background-size: 80%;
    height: 30vh;
  }

  h5 {
    font-size: 2.5rem;
  }

  img {
    width: 75px;
  }

  .mt-6 {
    margin-top: 6rem;
  }
}
</style>

