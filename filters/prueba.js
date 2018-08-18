import Vue from 'vue'

Vue.filter('currency', (value) => {
	read: (value) => {
		return 'S/.' + value.toFixed(2);
	};
	write: (value) => {
		const number = +value.replace(/[^\d.]/g, '');
		return isNaN(number)? 0 : number;
	}
});