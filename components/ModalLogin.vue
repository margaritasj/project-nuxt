<template>
  <!--Login-->
  <div class="modal fade display-none style-modal modal-sm" id="login">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header text-center">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body p-0">
          <form class="container-modal text-center p-3">
            <div class="input-group">
              <div class="input-group-addon p-2">
                <i class="fa fa-user" aria-hidden="true"></i>
              </div>
              <input type="text" class="form-control p-2" placeholder="Usuario">
            </div>
            <br>
            <div class="input-group">
              <div class="input-group-addon p-2">
                <i class="fas fa-key"></i>
              </div>
              <input type="password" class="form-control p-2" placeholder="Contraseña">
            </div>
            <br>
            <button class="btn btn-default btn-green text-uppercase" type="submit">ingresar</button>
            <br>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "modal"
};
</script>
<style scoped>
/* ------------- Para modal en general ------------- */
.style-modal {
  display: block;
  margin-top: 2rem;
  color: black;
  font-weight: 600;
}

.container-modal {
  width: 100%;
}

.display-none {
  display: none;
}

.modal-header {
  padding: 0.25rem;
}

i {
  color: #72a4b2;
  padding: 0.35rem;
}

.input {
  width: 100%;
  border: none;
}

.form-control {
  background: #f1f1f1;
  border-radius: 2rem !important;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.4rem;
}

.btn-green {
  background: #72a4b2;
  color: #fff;
  font-weight: 700;
}

/* ------------ Media para tablet y desktop------------ */
@media (min-width: 375px) {
  .style-modal {
    margin-left: 70px;
    margin-top: 25px;
  }
}

@media (min-width: 425px) {
  .style-modal {
    margin-left: 9rem;
  }
}

@media (min-width: 768px) {
  .style-modal {
    margin-left: 32rem;
    margin-top: 5px;
  }
}

@media (min-width: 1024px) {
  .style-modal {
    margin-left: 45rem;
  }
}
@media (min-width: 1200px) {
  .style-modal {
    margin-left: 65rem;
  }
}
@media (min-width: 1440px) {
  .style-modal {
    margin-left: 75rem;
  }
}
</style>



