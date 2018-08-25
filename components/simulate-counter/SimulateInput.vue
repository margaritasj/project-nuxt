<template>
<div class="myfield">
	<input class="currency-input" type="text" name="amount" @keypress="stripTheGarbage($event)" required/>

  <currency-input class="bg-red">hola</currency-input>

  <button><i class="fas fa-plus jumbos"></i></button>
  <button><i class="fas fa-minus jumbos" :class="{ disabled: isActive }"></i></button>
  <p class="text-center d-none" :class="{ min: isActive }"> Mínimo S/ 22,000</p>
</div>
</template>
<script>

export default {


	data() {
    return {
			amount: 50000,
			isActive: false
    }
  },
  props: {
    data: {
      type: Number
    }
  },
  methods: {
		/* ------------*/	
    stripTheGarbage: e => {
      if ((e.keyCode < 48 && e.keyCode !== 46) || e.keyCode > 59) {
        e.preventDefault();
      }
    },
    /*formatSoles: ()=> {
      if (this.amount != "") {
        let num = this.amount;

				num = Number(num);

        const countDecimals = (value) => {
          if (Math.floor(value) == value) return 0;
          return value.toString().split(".")[1].length || 0;
        };

        const decimal = countDecimals(num);

        if (decimal < 2) {
          num = num.toFixed(2);
        }

        if (decimal > 2) {
          num = num.toFixed(decimal);
        }

        if (parseInt(num) < 1) {
          num = "." + String(num).split(".")[1];
        }

        this.amount = num;
      }
    }*/
  },
  filters: {
    currency: {
      read: value => {
        return '$' + value.toFixed(2)
      },
      write: value => {
        var number = +value.replace(/[^\d.]/g, '')
        return isNaN(number) ? 0 : number
      }
    }
  }
};
</script>

<style scoped>
/* --------------------- style span del símbolo --------------------- */
	.currency-input {
		position: relative;
	}
	.currency-input {
		padding-left: 3rem;
		width: 100%;
	}
	.currency-input .currency-symbol {
		position: absolute;
		top: 50%;
		left: 0;
		width: 3rem;
		text-align: right;
		-webkit-transform: translateY(-50%);
		transform: translateY(-50%);
	}
	.minimo:invalid ~ .currency-symbol {
		opacity: 0.5;
	}
/* ------------------------------- end style ------------------------------- */

.sefi {
  padding-top: 10px;
}
.myfield>.currency-input,
.myfield select {
  width: 100%;
  margin: 0;
  color: #424242;
  font-size: 18px;
  border: 0;
  border-radius: 5px;
  position: relative;
  padding: 10px;
  text-align: center !important;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #f7f7f7;
  text-align-last: center;
  outline: 0;
}

.myfield {
  position: relative;
}

.myfield select {
  cursor: pointer;
}
.myfield i.fa-angle-down {
  position: absolute;
  font-size: 30px;
  bottom: 12px;
  right: 10px;
  color: #898989;
  pointer-events: none;
}

i.jumbos {
  position: absolute;
  top: 10px;
  border: 2px solid #c9c9c9;
  padding-top: 6px;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  cursor: pointer;
}

i.jumbos.fa-plus {
  right: 10px;
}

i.jumbos.fa-minus {
  left: 10px;
}

.minimo {
  color: #62d465;
  font-weight: 600;
}
.disabled {
  background: #efefef !important;
  color: #848181 !important;
  cursor: initial !important;
  pointer-events: none;
}
</style>
