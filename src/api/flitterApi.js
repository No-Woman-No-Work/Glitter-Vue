import axios, { } from "axios"

/*


Base URL pendiente de añadir


*/

const flitterApi = axios.create({
      baseURL: "https://api.aquivalaurldelbakendflitter.co/api/loquesea"
})

flitterApi.interceptors.request.use(config =>  {
      const token = localStoragee.getItem('accessToken') || ''
      if(token) {
            config.headers["Authorization"] = `Bearer ${token}`
      }
      return config
})

export default flitterApi