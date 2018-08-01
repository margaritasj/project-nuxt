<template>
<!-- Seccion - como funciona -->
	<section class="container bg-white mb-5">
		<div class="row mt-5 mb-1">
			<div class="col-12 text-center">
				<h5 class="p-1">Quienes hablan de nosotros</h5>
				<linetitle/>
			</div>
		</div>
		<div class="row img m-4 d-flex bd-highlight mb-5">
			<journallogo v-for="(logo,index) in logos" :logo="logo" :key="index" class="col-6 col-md-4 mb-2 align-self-center"/>	
		</div>
  </section>
</template>
<script>
import LineTitle from "@/components/home/LineTitle";
import JournalLogo from "@/components/home/JournalLogo";

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
          name: "logo-gestion",
          img:
            "https://res.cloudinary.com/prestamype/image/upload/v1532129858/samples/logos/gestion-diario.png"
        },
        {
          url: "https://elcomercio.pe/buscar/?query=prestamype",
          name: "logo-el-comercio",
          img:
            "https://res.cloudinary.com/prestamype/image/upload/v1532129859/samples/logos/logo-el-comercio.png"
        },
        {
          url:
            "http://www.mundoempresarial.pe/search.html?searchword=prestamype&searchphrase=all",
          name: "logo-mundo-empresarial",
          img:
            "https://res.cloudinary.com/prestamype/image/upload/v1532129858/samples/logos/logo-mundo-empresarial.png"
        },
        {
          url: "http://larepublica.pe/buscador?buscando=prestamype",
          name: "logo-la-republica",
          img:
            "https://res.cloudinary.com/prestamype/image/upload/v1532129858/samples/logos/logo-la-republica.png"
        },
        {
          url: "http://andina.pe/agencia/busqueda.aspx?search=prestamype",
          name: "logo-andina",
          img:
            "https://res.cloudinary.com/prestamype/image/upload/v1532129858/samples/logos/logo-andina.png"
        },
        {
          url: "http://elperuano.pe/busqueda.aspx?claves=prestamype",
          name: "logo-el-peruano",
          img:
            "https://res.cloudinary.com/prestamype/image/upload/v1532129858/samples/logos/logo-el-peruano.png",
        },
        {
          url: "https://peru21.pe/buscar/?query=prestamype",
          name: "logo-peru-21",
          img:
            "https://res.cloudinary.com/prestamype/image/upload/v1532129859/samples/logos/logo-peru-21.png",
        }
      ]
    };
  }
};
</script>
<style scoped>

@media (min-width: 768px) {
  h5 {
    font-size: 2rem;
  }
}

</style>
