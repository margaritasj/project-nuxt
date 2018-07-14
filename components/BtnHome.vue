<template>
	<div class="container-fluid">
		<div class="row text-center d-flex justify-content-center">
			<div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
				<div class="btn-group flex-column" role="group" aria-label="First group">
					<div>
						<img src="~/assets/images/prestamo.png" alt="icon-prestamo" class="icon-prestamo mg-icon">
					</div>
					<button type="button" class="btn btn-primary btn-lg text-uppercase">préstamos</button>
				</div>
				<div class="btn-group flex-column" role="group" aria-label="Second group"> 
					<div>
						<img src="~/assets/images/inversion.png" alt="icon-prestamo" class="icon-inversion mg-icon">
					</div>
					<button type="button" class="btn btn-primary btn-lg text-uppercase">invertir</button>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
.btn {
  width: 7.6rem;
  margin: 0.3rem;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.3rem;
}
.icon-prestamo {
	width: 3rem;
}
.icon-inversion {
	width: 4rem;
}
.mg-icon {
	margin: 0.2rem;
}
</style>

