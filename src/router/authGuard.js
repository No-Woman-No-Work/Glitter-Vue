import flitterApi from '../api/flitterApi.js';
// import { useRouter } from 'vue-router'

const guard = async function () {
  // busca el token que se creó en el login en el localStorage
  const token = localStorage.getItem('access_token'); 

  if (!token) {
    // si no está retorna falso
    console.log('Sin token, la Guarda no te abre el paso')
    return false;
  }

  try {
    // si había token, llama a la api para verificar que sea válido
    const response = await flitterApi.get('/auth/verify-token');
    if (response.data.authenticated) {
      // Almacenar la información adicional del usuario en localStorage o en algún otro lugar
      console.log('La guarda te deja pasar')
      localStorage.setItem('user', JSON.stringify(response.data.user));
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.log('La Guarda ha tenido problemas')
    return false;
  }
};

// Not access to private routes
export const useAuthGuard = async (to, from, next) => {
  
  const authenticated = await guard();

  if (!authenticated) {
    console.log('Has sido redirigido por la Guarda. Loguéate majx')
    next("/login"); // nos dirige a private si el usuario esta autenticado
     
  } else {
    next();
  }
};

// Acces to public zone but with private functionalities as follow or kudos
export const isAuthenticated = async (to, from, next) => {
  const authenticated = await guard();

  if (authenticated) {
    console.log('Zona pública exclusiva para users - follow')
    next("/public-plus"); // nos dirige a private si el usuario esta autenticado
     
  } else {
    next();
  }
 
}