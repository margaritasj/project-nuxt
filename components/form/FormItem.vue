<template>
  <div class="text-center">
		<label :for="info.model">{{ info.txtLabel }}</label>
		<input :id="info.model" :type="info.type"  :v-model="info.model" :class="info.class" :placeholder="info.placeholder">
  </div>
</template>
<script>
  /*const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/; */

  export default {
    props:{
      info: Object
    }

  }
</script>
<style scoped>

  label {
    font-weight: 600;
    color: #595959;
    margin-bottom: 5px;
  }
  input {
    width: 100%;
    padding: 10px;
    border: 2px solid #e9e9e9;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 20px;
  }
</style>


