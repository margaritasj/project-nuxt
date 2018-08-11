<template>
  <li class="list"> 
    <span class="list-span"> {{ list }} </span>
  </li>
</template>
<script>
  export default {
    props: {
      list: String
    }
  }
</script>
<style scoped>
  .list-span {
    text-align: left;
    line-height: 20px;
    margin-bottom: 8px;
    font-weight: 500;
    line-height: 1.12;
    font-size: 16px;
    color: #323232;
  }

  .list {
    color: #7ab0bf;
  }

</style>

