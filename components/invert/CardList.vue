<template>
  <section class="container-fluid bg-img pt-5 pb-5">
    <div class="card m-2 p-1">
      <div class="row">
        <div class="col-12 col-lg-6 line-bottom">
          <h4 class="m-4 minititle">Características</h4>
          <ul class="text-left pl-5">
            <item-list v-for="(list,index) in characteristics" :list="list" :key="index"/>
          </ul>
        </div>
        <div class="col-12 col-lg-6">
          <h4 class="m-4 minititle">Beneficios</h4>
          <ul class="text-left pl-5">
            <item-list v-for="(list,index) in benefits" :list="list" :key="index"/>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ItemList from "@/components/ItemList";
export default {
  components: {
    ItemList
  },
  data() {
    return {
      characteristics: [
        "Todos los solicitantes de préstamo pasan por un estricto proceso de selección legal y financiera.",
        "El préstamo es directo entre las dos partes, con plazos de 12, 18 o 24 meses. El monto mínimo de inversión es de S/ 22,000.",
        "El solicitante abona los intereses mensualmente a tu cuenta bancaria, con una tasa fijada por contrato.",
        "Todos los préstamos cuentan con una garantía hipotecaria que vale más de 2 veces el monto préstado. Las garantías se inscriben a tu nombre en Registros Públicos.",
        "Toda la operación es bancarizada y vía notarial, brindándote la mayor seguridad."
      ],
      benefits: [
        "Eliges el perfil en el cual quieres invertir.",
        "Retorno anual promedio del 20% (tasa de interés nominal anual).",
        "La garantía hipotecaria cubre cualquier caso de incumplimiento.",
        "Prestamype se encarga de todo el trámite, así como del seguimiento de pagos y cobranza.",
        "En caso de incomplimiento, Prestamype realiza la ejecución de la garantía sin costos adicionales, en un promedio de 5 meses."
      ]
    };
  }
};
</script>
<style scoped>

  .bg-img {
    background-image: url("~/assets/images/fondoemp.png");
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    text-align: center;
    height: auto;
    width: 100%;
  }

  .minititle {
    font-size: 20px;
    margin-bottom: 25px;
    padding: 0 15px;
    color: #7ab0bf;
  }

  .card {
    border:none;
  }

  .text-left{
    margin-right: 15px;
  }

  .line-bottom {
    border-bottom: 2px solid #f6f6f6;
  }

  /* ------------ Media para tablet y desktop------------ */
  /* Medium devices (tablets, 768px and up)*/
  @media (min-width: 992px) {
    .line-bottom{
      border-bottom: none;
    } 
  }


</style>

