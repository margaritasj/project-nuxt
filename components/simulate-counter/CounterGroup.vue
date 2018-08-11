<template>
  <div class="btn-group" role="group" aria-label="Basic example">
		<button type="button" class="btn btn-secondary btn-left"> + </button>
		<input type="number">
		<button type="button" class="btn btn-secondary btn-right"> - </button>
	</div>
</template>
<style scoped>
	input {
		width: 120%;
		margin: 0;
		color: #424242;
		font-size: 18px;
		border: 0;
		border-radius: 5px;
		text-align: center!important;
		-webkit-appearance: none;
		-moz-appearance: none;
		background: #f7f7f7;
		text-align-last: center;
		outline: 0;
		padding: 0.4rem 0;
		position: relative;
	}

	.btn {
		font-size: 1rem;
		color: #424242;
		font-weight: 700;
		border: 2px solid #ccc;
		background-color: #eeee;
		width: 2.4rem;
		height: 2.4rem;
		padding: 5px;
		z-index: 4;
		width: 4rem;
	}

	.btn-left{
		border-top-left-radius: 2rem;
		border-bottom-left-radius: 2rem;
	}

	.btn-right{
		border-top-right-radius: 2rem;
		border-bottom-right-radius: 2rem;
	}

</style>
