<template>
  <h2 class="title-h2">{{txt}}</h2>
</template>

<script>
  export default {
    props: {
      txt: String
    }
  }
</script>

<style scoped>
  .title-h2 {
    font-size: 23px;
    font-weight: 700;
    margin-bottom: 30px;
    margin-top: 40px;
  }
</style>

