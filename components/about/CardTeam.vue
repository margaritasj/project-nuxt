<template>
  <div class="col-12 col-md-4">
    <img class="card-img-top img" :src="team.img" :alt="team.name">
    <div class="card-body row">
      <div class="col-2 linkin">
				<a :href="team.url" target="_blank"><i class="fab fa-linkedin"></i></a>
			</div>
      <div class="col-10 name">
        <div class="text-uppercase">{{ team.name }}</div>
        <div class="text-uppercase font-weight-bold">{{ team.profession }}</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props:{
      team: Object
    }
  }
</script>
<style scoped>
.img {
  display: block;
  position: relative;
  background: rgba(0,0,0,.1);
}

.linkin i {
  -webkit-transition: font-size .5s ease;
  -moz-transition: font-size .5s ease;
  -o-transition: font-size .5s ease;
  transition: font-size .5s ease;
  color: #333;
  font-size: 30px;
}

.linkin i:hover {
  font-size: 40px;
}

.name {
  text-align: left;
  padding-left: 10px;
}
</style>

