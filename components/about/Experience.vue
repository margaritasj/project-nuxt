<template>
  <div class="bg-green">
    <section class="container">
			<div id="list" class="row">
				<div class="col-md-4 text-center text-uppercase" v-for="(item, index) in items" :item="item" :key="index">
          <h3>{{ item.title }}</h3>
          {{ item.description }}
        </div>
			</div>
    </section>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        items: [
          {
            title: "25",
            description: "Años de experiencia"
          },
          {
            title: "11 MM",
            description: "De soles colocados"
          },
          {
            title: "+150",
            description: "Empresarios satisfechos"
          }
        ]
      }
    }
  }
</script>
<style scoped>
.bg-green {
  background: #01cd78;
  color: #fff;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: .3px;
  padding: 40px 0;
}

.bg-green h3 {
  font-size: 55px;
  font-weight: 700;
  margin-top: 0;
}
</style>


