<template>
  <div class="">
    <!-- Header -->
    <header class="container-fluid text-white">
      <img :src="infoh.img" class="img-fluid masthead" :alt="infoh.name">
      <div class="title text-center">
		    <h1 class="title d-flex justify-content-center text-uppercase"> {{ infoh.txta }}
 					<br class="d-none d-sm-block"> {{ infoh.txtb }}
				</h1>
      </div>
    </header>
  </div>
</template>

<script>
 
  export default {
		name: "",
		props: {
			infoh: Object
		}
	};
	
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



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

  }

  @media (min-width: 425px) {

    .title {
      font-size: 30px;
      padding-top: 4;
    }

  }