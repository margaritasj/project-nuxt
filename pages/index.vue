<template>
  <div class="parallax">
    <header-app v-for="(infoh,index) in infos" :infoh="infoh" :key="index"/>
    <div class="container">
      <BtnHome/> 
    </div>
  </div>
</template>

<script>
  import HeaderApp from "@/components/HeaderApp";
  import BtnHome from "@/components/home/GroupBtn";
  export default {
    name: "Home",
    layout: "empty",
    components: {
      HeaderApp,
      BtnHome
    },
    data() {
      return {
        infos: [
          {
            txta: "CONECTAMOS A PERSONAS",
            txtb: " PARA QUE CUMPLAN SUS METAS "
          }
        ]
      }
    },
    async asyncData() {
      const title = "Prestamype";
      const description = "El Programa de Formación Docente de la universidad está orientado de forma prioritaria a facilitar y apoyar a nuestros docentes al desarrollo de sus necesidades de tipo formativo, dotándoles de las estrategias y recursos necesarios para desarrollar una serie de nuevas competencias profesionales. Por este motivo es preciso reflexionar sobre las nuevas exigencias profesionales y apoyar el desarrollo de dichas competencias desde la formación del profesorado y desde el enfoque de nuestra universidad.";
      const keywords = "Prestamype,inversionistas,empresarios,prestamos,invertir,rentabilidad,garantía,hipotecaria";
      const canonical = "https://www.prestamype.com/";
      const locale = "es_ES";
      const type = "website";
      const image = "images/prestamype.jpg";

      return {
        title,
        description,
        keywords,
        canonical,
        locale,
        type,
        image
      };
    },
    head() {
      return {
        title: this.title + " | Prestamos colaborativos para mypes",
        meta: [
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
            content: this.title
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
            content: this.title
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
  };
</script>

<style scoped>
  @import url(assets/css/root.css);
  @import url(assets/css/header);

  .parallax {
    background-image: url("https://res.cloudinary.com/prestamype/image/upload/v1533859859/prestamype/background/banner-home.png");
    padding: 0rem 1rem;
  }
</style>

