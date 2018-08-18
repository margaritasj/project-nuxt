<template>
  <div class="container">
		<form action="" class="row p-3 pb-5" @submit.prevent="submit">
			<form-item v-for="(info,index) in infos" :info="info" :key="index" class="col-12"/>
			<div class="text-center col-12">
				<form-btn txtBtn="Enviar"/>
			</div>
		</form>
	</div>
</template>
<script>

	import FormItem from "@/components/form/FormItem";
	import FormBtn from "@/components/form/FormBtn";

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
						name:"first_name",
						model: "first_name",
						placeholder:"prueba"
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
