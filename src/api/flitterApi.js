import axios, { } from "axios"

/*


Base URL pendiente de añadir


*/

// creamos La conexión con la api (backend)
const flitterApi = axios.create({
      baseURL: "https://api.aquivalaurldelbakendflitter.co/api/loquesea"
})

// si en cada petición que se haga con los métodos post o get de flitterapi se recibe un token
// se configuran los encabezados ( sí token es falsy, se queda como cadena vacía)
flitterApi.interceptors.request.use(config =>  {
      const token = localStorage.getItem('accessToken') || ''
      if(token) {
            config.headers["Authorization"] = `Bearer ${token}`
      }
      return config
})

export default flitterApi