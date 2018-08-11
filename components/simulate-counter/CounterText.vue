<template>
  <div class="title-c text-center">
    <p>{{ textC }}</p>
  </div>
</template>
<script>
  export default {
    name: "title-c" ,
    props: {
      textC: String
    }
  }
</script>
<style scoped>
  p {
		margin: 5px 0;
    font-weight: 500;
    color: #797979;
  }
</style>

