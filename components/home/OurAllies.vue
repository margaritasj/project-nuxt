<template>
<!-- Seccion nos respaldan -->
	<section class="container bg-white">
		<div class="row mt-5 mb-1">
			<div class="col-12 text-center">
				<h5 class="p-1">Nos respaldan</h5>
				<linetitle/>
			</div>
		</div>
		<div class="row img m-4 d-flex bd-highlight mb-5">
			<journallogo v-for="(logo,index) in logos" :logo="logo" :key="index" class="col-6 col-md-3 align-self-center"/>	
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
            name: "logo-ccl",
            img:
              "https://res.cloudinary.com/prestamype/image/upload/v1532449200/samples/logos/logo-ccl.png"
          },
          {
            name: "logo-equifax",
            img:
              "https://res.cloudinary.com/prestamype/image/upload/v1532449200/samples/logos/equifax.png"
          },
          {
            name: "logo-emprende",
            img:
              "https://res.cloudinary.com/prestamype/image/upload/v1532449200/samples/logos/logo-emprende-up.png"
          },
          {
            name: "logo-up",
            img:
              "https://res.cloudinary.com/prestamype/image/upload/v1532449200/samples/logos/logo-up.png"
          }
        ]
      };
    }
  };
</script>
<style scoped>

  .banner, banner * {
    transition: all .3s linear;
  }

  @media (min-width: 768px) {

    h5 {
      font-size: 2rem;
    }
  }
  
</style>
