<template>
  <div class="btn-toolbar row text-center d-flex justify-content-center pb-5" role="toolbar" aria-label="Toolbar with button groups">
    <div class="btn-group flex-column" role="group" v-for="(icon, index) in icons" :icon="icon" :key="index">
      <div>
        <img :src="icon.img" :alt="icon.name" :class="icon.name" class="mg-icon">
      </div>
      <nuxt-link class="btn btn-lg text-uppercase text-white" :class="icon.color" :to="icon.url">
        <span class="d-none d-md-block">{{ icon.txta }}</span>
        <span class="d-md-none">{{ icon.txtb }}</span>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        icons: [
          {
            img: "https://res.cloudinary.com/prestamype/image/upload/v1535070235/prestamype/icons/prestamo.png",
            name: "icon-loan",
            color: "btn-loan",
            url: "/prestamos",
            txta: "pide tu préstamo",
            txtb: "préstamo"
          },
          {
            img: "https://res.cloudinary.com/prestamype/image/upload/v1535070200/prestamype/icons/inversion.png",
            name: "icon-invert",
            color: "btn-invert",
            url: "/invertir",
            txta: "quiero invertir",
            txtb: "invertir"
          }

        ]
      }
    }
  }
  
</script>
<style scoped>

  .btn {
    width: 8rem;
    margin: 0.4rem;
    font-size: 1rem;
    font-weight: 700;
    padding: 0.5rem;
    cursor: pointer;
    letter-spacing: 0.2px;
    padding: 10px 0;
    border: none;
    position: relative;
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

  @media (min-width: 1024px) {
    .btn {
      width: 10rem;
      display: flow-root;
    }
  }

  @media (min-width: 1440px) {
    .btn {
      width: 15rem;
    }
  }
  
</style>