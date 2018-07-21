<template>
<!-- Seccion - como funciona -->
	<section class="container bg-white">
		<div class="row mt-5 mb-4">
			<div class="col-12 text-center">
				<h5 class="p-1">Quienes hablan de nosotros</h5>
				<linetitle/>
			</div>
		</div>
		<div class="row img">
			<div class="col-6">
				<journallogo v-for="(logo,index) in logos" :logo="logo" :key="index" class="col-6"/>	
			</div>
		</div>
  </section>
</template>
<script>
import LineTitle from "@/components/index/LineTitle";
import JournalLogo from "@/components/index/JournalLogo";

export default {
  components: {
    linetitle: LineTitle,
    journallogo: JournalLogo
  },
  data() {
    return {
      logos: [
        {
          url: "https://gestion.pe/buscar/?query=prestamype",
          img:
            "https://res.cloudinary.com/prestamype/image/upload/v1532129858/samples/logos/gestion-diario.png"
        },
        {
          url: "https://elcomercio.pe/buscar/?query=prestamype",
          img:
            "https://res.cloudinary.com/prestamype/image/upload/v1532129859/samples/logos/logo-el-comercio.png"
        },
        {
          url:
            "http://www.mundoempresarial.pe/search.html?searchword=prestamype&searchphrase=all",
          img:
            "https://res.cloudinary.com/prestamype/image/upload/v1532129858/samples/logos/logo-mundo-empresarial.png"
        },
        {
          url: "http://larepublica.pe/buscador?buscando=prestamype",
          img:
            "https://res.cloudinary.com/prestamype/image/upload/v1532129858/samples/logos/logo-la-republica.png"
        },
        {
          url: "http://andina.pe/agencia/busqueda.aspx?search=prestamype",
          img:
            "https://res.cloudinary.com/prestamype/image/upload/v1532129858/samples/logos/logo-andina.png"
        },
        {
          url: "http://elperuano.pe/busqueda.aspx?claves=prestamype",
          img:
            "https://res.cloudinary.com/prestamype/image/upload/v1532129858/samples/logos/logo-el-peruano.png"
        },
        {
          url: "https://peru21.pe/buscar/?query=prestamype",
          img:
            "https://res.cloudinary.com/prestamype/image/upload/v1532129859/samples/logos/logo-peru-21.png"
        }
      ]
    };
  }
};
</script>
<style scoped>

		    .rowimg {
        margin-bottom: 10px
    }

</style>

