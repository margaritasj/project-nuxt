<template>
  <div class="container">
		<form action="" class="row p-3 pb-5" @submit.prevent="submit">
			<!-- <div class="error-message">
				<p v-show="!email.valid">Oh, please enter a valid email address.</p>
			</div> -->
			<form-item v-for="(info,index) in infos" :info="info" :key="index" class="col-12"/>
			<div class="text-center col-12">
				<form-btn txtBtn="Enviar"/>
			</div>
		</form>
	</div>
</template>
<script>
/*----------------------------------------
	import VeeValidate from 'vee-validate';
----------------------------------------*/
	import FormItem from "@/components/form/FormItem";
	import FormBtn from "@/components/form/FormBtn";
/*-----------------------
	Vue.use(VeeValidate);
-----------------------*/
	export default {
		components: {
			FormItem,
			FormBtn
		},
		data() {
			return {
				infos: [
					{
						txtLabel: "Nombres",
						type: "text",
						model: "name",
						required:"",
						name:"Margarita"
					},
					{
						txtLabel: "Apellidos",
						type: "text",
						model: "lastname",
						required:""
					},
					{
						txtLabel:"E-mail",
						type:"email",
						model: "email",
						required:""
					},
					{
						txtLabel:"Teléfono de contacto(opcional)",
						type:"number",
						model: "phone",
						required:""
					}
				]
			}
		}
	}

</script>
