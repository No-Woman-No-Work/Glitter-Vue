import axios from "axios";
import { useRouter } from 'vue-router'

const router = useRouter()

const flitterApi = axios.create({
  baseURL: "http://localhost:3000",
});

const setAuthorizationHeader = (config) => {
  const token = localStorage.getItem("access_token");
  if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
  } else {
      config.headers["Authorization"] = `Bearer ${''}`;
  }
  return config;
};

flitterApi.interceptors.request.use(setAuthorizationHeader);

flitterApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      // handle unauthorized error
      router.push("/login")
    }
    return Promise.reject(error);
  }
);

export default flitterApi;

// En este código, los headers son un objeto que contiene información adicional sobre la petición HTTP que se está realizando. En este caso, el header "Authorization" es utilizado para incluir información sobre la autenticación del usuario.

// Si no hay un token en el localStorage, la función setAuthorizationHeader no agrega un header "Authorization" a la petición HTTP. En otras palabras, si no hay un token en el localStorage, la petición HTTP no incluirá información sobre la autenticación del usuario.