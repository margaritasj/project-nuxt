<template>
  <footer class="container-fluid">
    <div class="row bg-grey pd-f">
      <div class="col-12 col-md-4 pd-md">
        <div class="logo">
          <nuxt-link class="navbar-brand nav-logo js-scroll-trigger" to="/">
            <div class="logo-white logo-green" ></div>
          </nuxt-link>
        </div>
        <p class="font-footer text-justify m-f font-w">Prestamype es una marca de P2P Finance Consulting SAC, empresa registrada en la Superintendencia de Banca y Seguros (SBS – Resolución N° 03470). Más detalles
          <nuxt-link to="/nosotros" class="link-decoration">aquí</nuxt-link>.
        </p>
        <div class="icons m-f">
          <div class="d-flex justify-content pd-top" v-for="(info, index) in infos" :info="info" :key="index">
            <div class="icon">
              <img :src="info.src">
            </div>
            <p class="txt-icon font-w">{{ info.p }} <br> {{ info.b }} </p>
					</div>
        </div>
      </div>
      <div class="col-12 col-md-3 pd-md">
        <h5 class="text-uppercase text-center">mapa del sitio</h5>
        <div class="info text-uppercase font-w font-footer">
          <ul>
            <li v-for="(link, index) in links" :link="link" :key="index">
              <nuxt-link :to="link.url" class="link-decoration">{{ link.txt }}</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-12 col-md-5 pd-md">
        <h5 class="text-uppercase text-center">aviso legal</h5>
        <p class="font-footer text-justify font-w" v-for="(paragraph, index) in paragraphs" :paragraph="paragraph" :key="index">
          {{ paragraph }}
        </p>
      </div>
    </div>
    <div class="row mastfoot">
      <div class="col-12 text-center">
        <p class="text-center ">© 2018 P2P Finance Consulting SAC. Todos los derechos reservados</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      infos:[
        {
          src: "https://res.cloudinary.com/prestamype/image/upload/v1535132390/prestamype/icons/icono_direccion_footer.png",
          p: "Calle Martir Olaya 129 Of 1304",
          b: "Miraflores, Lima"
        },
        {
          src: "https://res.cloudinary.com/prestamype/image/upload/v1535132390/prestamype/icons/icono_correo_footer.png",
          p: "info@prestamype.com"
        },
        {
          src: "https://res.cloudinary.com/prestamype/image/upload/v1535132390/prestamype/icons/icono_telefono_footer.png",
          p: "(01) 480 - 0708"
        }
      ],
      links:[
        {
          url: "/prestamos",
          txt: "Pide tu Préstamo"
        },
        {
          url: "/invertir",
          txt: "Quiero Invertir"
        },
        {
          url: "/nosotros",
          txt: "nosotros"
        },
        {
          url: "/preguntas",
          txt: "preguntas frecuentes"
        },
        {
          url: "/articulos",
          txt: "noticias"
        }
      ],
      paragraphs: [
        "Prestamype pone en relación a personas que buscan un préstamo con inversionistas interesados en prestar directamente su capital. Prestamype evalúa los perfiles de los empresarios, elabora el contrato de préstamo con garantía hipotecaria, realiza la gestión del préstamo y el seguimiento hasta el levantamiento de la hipoteca. No realiza intermediación financiera.",
        "Los contratos de préstamo son de un periodo de 12, 18 o 24 meses, sin periodo mínimo de cancelación de acuerdo al Código del Consumidor (Ley N° 29571) y pueden ser renovados al final del periodo. Su Tasa Costo Efectivo Anual (TCEA) promedio es de 34%.",
        "La TCEA de Prestamype incluye a la tasa de interés y todos los gastos vinculados al préstamo, incluso incluye al levantamiento de la hipoteca. A título de comparación, la tasa de interés anual (TEA, que no incluye los gastos) promedio del sistema financiero para créditos a la microempresa en Perú es de 44% (enero 2017)."
      ]
    }

  }
};
</script>
<style scoped>
.mastfoot {
  background-color: #262626;
  color: #fff;
  font-size: 0.9rem;
  padding: 2rem 0.2rem;
}

.mastfoot p {
  margin-bottom: 0;
}

.bg-grey {
  background: #2d2d2d;
  color: #ffff;
}

.pd-f {
  padding: 2rem 0.6rem;
}

.font-w {
  font-weight: 600;
}

.font-footer {
  font-size: 0.9rem;
}

.m-f {
  margin: 0.5rem;
}

.link-decoration {
  color: #fff !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  text-decoration: none !important;
  padding-bottom: 0.1rem;
}

.icon {
  width: 18px;
}

.txt-icon {
  font-size: 0.9rem;
  padding-left: 1rem;
}

.pd-top {
  padding-top: 0.5rem;
}

h5 {
  font-weight: 800;
}

li {
  padding-top: 1rem;
  list-style: none;
}

.logo-white {
  background-image: url("~/assets/images/logo-prestamype-blanco.png");
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  text-align: center;
  height: 2rem;
  width: 10rem;
  padding: 1rem;
}

/* ------------ Media para tablet y desktop------------ */
@media (min-width: 768px) {
  .pd-md {
    padding: 2.5rem;
  }
}
</style>

