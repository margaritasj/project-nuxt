<template>
  <div class="container-fluid">
    <div class="row text-center d-flex justify-content-center">
      <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
        <div class="btn-group flex-column" role="group" aria-label="First group">
          <div>
            <img src="~/assets/images/prestamo.png" alt="icon-loan" class="icon-loan mg-icon">
          </div>
          <div class=" text-center">
            <nuxt-link class="btn btn-lg text-uppercase text-white btn-loan" to="/prestamos">
              <span class="d-none d-md-block">pide tu préstamo </span>
              <span class="d-md-none">préstamo</span>
            </nuxt-link>
          </div>
        </div>
        <div class="btn-group flex-column" role="group" aria-label="Second group"> 
          <div>
            <img src="~/assets/images/inversion.png" alt="icon-invert-" class="icon-invert mg-icon">
          </div>
          <nuxt-link class="btn btn-lg text-uppercase text-white text-center btn-invert" to="/invertir">
            <span class="d-none d-md-block">quiero invertir</span>
            <span class="d-md-none">invertir</span>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

</script>

<style scoped>
.btn {
  width: 8rem;
  margin: 0.2rem;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.3rem;
  cursor: pointer;
  letter-spacing: 0.2px;
  padding: 10px 0;
  border: none;
}

.btn-group > .btn:not(:first-child) {
  border-radius: 3px;
}

.icon-loan {
  width: 3rem;
}

.icon-invert {
  width: 4rem;
}

.mg-icon {
  margin: 0.2rem;
}

.btn-loan {
  background: #01cd78;
}

.btn-invert {
  background: #53a6b4;
}

.btn-loan:hover {
  box-shadow: 0 0 20px #01cd78;
}

.btn-invert:hover {
  box-shadow: 0 0 30px #53a6b4;
}

/* ------------ Media para tablet y desktop------------ */
@media (min-width: 375px) {
  .btn {
    width: 9.5rem;
  }
}

@media (min-width: 425px) {
  .btn {
    width: 10rem;
  }
}

@media (min-width: 768px) {
  .btn {
    width: 18rem;
  }
}

@media (min-width: 1024px) {
  .btn {
    width: 15rem;
    display: flow-root;
  }
}

@media (min-width: 1440px) {
  .btn {
    width: 17rem;
  }
}
</style>