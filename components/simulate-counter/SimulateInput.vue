<template>
<div class="myfield">
  <input v-model="montoNow" name="monto" type="number"/>
  <button><i class="fas fa-plus jumbos"></i></button>
  <button><i class="fas fa-minus jumbos" :class="{ disabled: isActive }"></i></button>
  
  <p class="text-center d-none" :class="{ minimo: isActive }"> Mínimo S/ 22,000</p>
</div>
</template>
<script>
/*import store from "@/createStore"*/

export default {
	data(){
		return {
			monto: "S/50,000",
			delta: 10000,
			min: 20000,
			max: 300000,	
			nmonto: 50000,
			isActive: false,
		}
	},
	props: {
		data: {
			type: Number
		}
	},
	methods: {
	},
	/*computed: {
		montoNow: {
			get(){
				return this.$store.state.storesimulator.monto
				//return this.$store.state.storesimulator.fields[this.data].val
			},
			set(value){
				this.$store.dispatch('storesimulator/up', value)
			}
		}
	}*/
};
</script>

<style scoped>
.sefi {
    padding-top: 10px
}
.myfield input,
.myfield select {
    width: 100%;
    margin: 0;
    color: #424242;
    font-size: 18px;
    border: 0;
    border-radius: 5px;
    position: relative;
    padding: 10px;
    text-align: center!important;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: #F7F7F7;
    text-align-last: center;
    outline: 0
}

.myfield {
    position: relative
}

.myfield select {
    cursor: pointer
}
.myfield i.fa-angle-down {
    position: absolute;
    font-size: 30px;
    bottom: 12px;
    right: 10px;
    color: #898989;
    pointer-events: none
}

i.jumbos {
    position: absolute;
    top: 10px;
    border: 2px solid #c9c9c9;
    padding-top: 6px;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    cursor: pointer
}

i.jumbos.fa-plus {
    right: 10px
}

i.jumbos.fa-minus {
    left: 10px
}

.minimo{
	color:#62d465;
	font-weight:600
}
.disabled{
	background: #efefef!important;
    color: #848181!important;
    cursor: initial!important;
    pointer-events: none;
}
</style>
