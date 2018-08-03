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
  import BtnHome from "~/components/home/GroupBtn.vue";
  export default {
    name: "Home",
    layout: "empty",
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
    height: 100vh;
    width: 100%;
  }

  .title {
    font-size: 25px;
    font-weight: 800;
    letter-spacing: 0.8px;
    line-height: 50px;
    padding-top: 3.7rem;
    padding-bottom: 1.2rem;
    text-align: center;
  }

  /* ------------ Media para tablet y desktop------------ */
  @media (min-width: 375px) {
    .masthead {
      height: 78vh;
    }
  }

  @media (min-width: 425px) {
    .masthead {
      height: 75vh;
    }

    .title {
      font-size: 30px;
      padding-top: 4;
    }
  }

  @media (min-width: 768px) {
    .masthead {
      height: 70vh;
    }

    .title {
      font-size: 35px;
      padding-top: 5rem;
    }
  }

</style>

