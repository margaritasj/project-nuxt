<template>
  <div class="home">
    <!-- Header -->
    <header class="masthead container-fluid">
      <div class="title text-center">
		    <h1 class="title d-flex justify-content-center text-uppercase"> CONECTAMOS A PERSONAS <br class="d-none d-sm-block">PARA QUE CUMPLAN SUS METAS </h1>
      </div>
      <div @click="pageScroll()" id="arrow">
        <a href="#" class="arrow arrow-1">
          <span></span>
        </a>
        <a href="#" class="arrow arrow-2">
          <span></span>
        </a>
        <a href="#" class="arrow arrow-3">
          <span></span>
        </a>
      </div>








      
    </header>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.masthead {
  background-image: url("~/assets/images/banner-home.png");
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  color: #fff;
  text-align: center;
  height: 100vh;
  width: 100%;
}

.title {
  color: #fff;
  font-size: 28px;
  font-weight: 800;
  letter-spacing: 0.8px;
  line-height: 50px;
  padding: 5rem 0;
  text-align: center;
}

@media (min-width: 320px) {
  .title {
    font-size: 28px;
    line-height: 1.3;
  }
}
</style>

