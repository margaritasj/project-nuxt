<template>
  <!-- Header -->
  <header class="text-white p-3">
    <div class="pt-4 text-center">
      <h1 class="title text-uppercase"> {{ infoh.txta }}
        <br class="d-none d-sm-block"> {{ infoh.txtb }}
      </h1>
    </div>
  </header>
</template>

<script>
  export default {
		props: {
			infoh: Object
		}
	};
</script>

<style scoped>
  @import url(assets/css/header);
 </style>