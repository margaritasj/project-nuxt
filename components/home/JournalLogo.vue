<template>
  <div class="text-center">
    <a target="_blank" :href="logo.url">
      <img :src="logo.img" class="img m-2" :alt ="logo.name"/>
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
    width: 80px;
    margin: 2px 10px;
  }

  /* ------------ Media para tablet y desktop------------ */
  @media (min-width: 425px) {
    img {
      width: 105px;
    }
  }

  @media (min-width: 768px) {
    img {
      width: 130px;
    }
  }

  @media (min-width: 1024px) {
    img {
      width: 200px;
    }
  }

  @media (min-width: 1440px) {
    img {
      width: 230px;
    }
  }

</style>

