<template>
  <div class="home">
    <!-- Header -->
    <header class="masthead container-fluid text-white">
      <div class="title text-center">
		    <h1 class="title d-flex justify-content-center text-uppercase"> CONECTAMOS A PERSONAS <br class="d-none d-sm-block">PARA QUE CUMPLAN SUS METAS </h1>
      </div>
      <BtnHome/> 
    </header>
  </div>
</template>

<script>
import BtnHome from '~/components/index/GroupBtn.vue'
export default {
  name: "Home",
  components: {
    BtnHome
  }
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
  text-align: center;
  height: 92vh;
  width: 100%;
}

.title {
  font-size: 28px;
  font-weight: 800;
  letter-spacing: 0.8px;
  line-height: 50px;
  padding-top: 5rem;
  padding-bottom: 1.2rem;
  text-align: center;
}

@media (min-width: 320px) {
  .title {
    font-size: 28px;
    line-height: 1.3;
  }
}
</style>

