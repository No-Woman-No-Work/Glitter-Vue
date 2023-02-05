// import axios, { AxiosResponse } from 'axios';
import flitterApi from '../api/flitterApi.js';
import { defineComponent, ref } from '@vue/composition-api';
import { useRouter } from 'vue-router';

// el quivalente en nuestro codigo es flitterApi?

// const axiosInstance = axios.create({
//   baseURL: 'http://your-api-endpoint.com'
// });

// axiosInstance.interceptors.request.use(config => {
//   const token = localStorage.getItem('token');

//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });

const guard = async function () {
  const token = localStorage.getItem('token'); //hay que cambiar token con el nombre de la clave que utilizamos para almacenar el token JWT en el almacenamiento del navegador

  if (!token) {
    return false;
  }

  try {
    const response = await flitterApi.get('/verify-token'); //reemplaza "/verify-token" con la ruta específica que el servidor de backend utiliza para verificar el token JWT
    return response.data.authenticated;
  } catch (error) {
    return false;
  }
};

export default defineComponent({
  setup() {
    const router = useRouter();

    router.beforeEach(async (to, from, next) => {
      const authenticated = await guard();

      if (!authenticated) {
        next('/loquesea'); // nos dirige a x si el usuario no esta autenticado: home o login?
      } else {
        next();
      }
    });

    const handleGoToFeed = () => {
      router.push({ name: 'loquesea' }); // nos dirige a x si el usuario esta autenticado: feed?
    };

    return {
      handleGoToFeed,
    };
  },
});
