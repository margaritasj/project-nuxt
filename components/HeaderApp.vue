<template>
  <!-- Header -->
  <header class="text-white">
    <div class="pt-5 pb-5 text-center">
      <h1 class="title text-uppercase"> {{ infoh.txta }}
        <br class="d-none d-sm-block"> {{ infoh.txtb }}
        <span v-if="true" class="text-uppercase font-weight-normal">{{ infoh.span }}</span>
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
  @import url(assets/css/header.css);
 </style>