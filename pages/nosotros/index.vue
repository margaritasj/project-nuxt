<template>
  <div>
    <!-- Header -->
    <div class="parallax p-header">
      <HeaderApp v-for="(infoh,index) in infos" :infoh="infoh" :key="index"/>
    </div>
    <!-- Sections -->
    <about/>
    <team/>
    <experience/>
  </div>
</template>

<script>
 
  import HeaderApp from "@/components/HeaderApp";
  import About from "@/components/about/About";
  import Team from "@/components/about/Team";
  import Experience from "@/components/about/Experience";
  export default {
    components: {
      HeaderApp,
      About,
      Team,
      Experience
    },
    data() {
      return {
        infos: [
          {
            txta: "Conoce más de nosotros,",
            txtb: " tus socios para crecer."
          }
        ]
      }
    },
    async asyncData() {
      const title = "Prestamype";
      const subtitle ="Empresa registrada en la SBS";
      const description = "Prestamype es una marca de P2P Finance Consulting SAC, empresa registrada en la Superintendencia de Banca y Seguros (SBS – Resolución N° 03470). Es una empresa pionera en finanzas alternativas en el Perú. Pone en relación a inversionistas que buscan un mejor rendimiento para sus ahorros de forma segura, con empresarios que desean obtener un préstamo para hacer crecer su negocio.";
      const keywords = "Prestamype,empresarios,sbs,invertir,ahorros,rentabilidad,garantía,hipoteca,dinero,inversión,lima,peru";
      const subject = "Prestamype, Inversión segura con garantía hipotecaria en lima";
      const canonical = "https://www.prestamype.com/nosotros";
      const locale = "es_ES";
      const type = "website";
      const image = "images/prestamype.jpg";

      return {
        title,
        subtitle,
        description,
        keywords,
        subject,
        canonical,
        locale,
        type,
        image
      };
    },
    head() {
      return {
        title: "Registrados en la SBS | " + this.title,
        meta: [
          {
            hid: "subtitle",
            name: "subtitle",
            content: this.subtitle
          },
          {
            hid: "description",
            name: "description",
            content: this.description
          },
          {
            hid: "keywords",
            name: "keywords",
            content: this.keywords
          },
          {
            hid: "subject",
            name: "subject",
            content: this.subject
          },
          {
            hid: "canonical",
            name: "canonical",
            content: this.canonical
          },

          // Meta Facebook
          {
            hid: "og:locale",
            property: "og:locale",
            content: this.locale
          },
          {
            hid: "og:type",
            property: "og:type",
            content: this.type
          },
          {
            hid: "og:title",
            property: "og:title",
            content: "¿Qué es prestamype? | " + this.title
          },
          {
            hid: "og:url",
            property: "og:url",
            content: this.canonical
          },
          {
            hid: "og:site_name",
            property: "og:site_name",
            content: this.title
          },
          {
            hid: "og:image",
            property: "og:image",
            content: this.image
          }
        ]
      }  
    }
  }
</script>
<style scoped>

  @import url(assets/css/root.css);
  @import url(assets/css/header.css);

  .parallax {
    background-image: url("https://res.cloudinary.com/prestamype/image/upload/v1533859858/prestamype/background/nosotrosc.png");
  }

</style>
