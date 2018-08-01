export default {
	/* 
		Es importante que a la función install le pasemos estos dos parámetros:
 			Vue: es la propia librería y donde vamos a insertar nuestra funcionalidad genérica.
			options: Puede que nuestro plugin necesite configuración por parte del usuario, por tanto se lo permitiremos gracias a este objeto que Vue le inyectará.
 	*/
  install(Vue, options) {
		vue.prototype.$log = {
			info: (text) => console.info(text),
			error: (text) => console.error(text),
			debug: (text) => console.log(text),
			warn: (text) => console.warn(text)
		}
  }
}