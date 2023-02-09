// import axios, { AxiosResponse } from 'axios';
import flitterApi from '../api/flitterApi.js';
import { defineComponent } from '@vue/composition-api';
import { useRouter } from 'vue-router';


const guard = async function () {
  const token = localStorage.getItem('access_token'); 

  if (!token) {
    return false;
  }

  try {
    const response = await flitterApi.get('/verify-token');
    if (response.data.authenticated) {
      // Almacenar la información adicional del usuario en localStorage o en algún otro lugar
      localStorage.setItem('user', JSON.stringify(response.data.user));
      return true;
    } else {
      return false;
    }
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
        next('/home'); // nos dirige a x si el usuario no esta autenticado: home o login?
      } else {
        next();
      }
    });

    const isAuthenticated = () => {
      router.push({ name: '' }); // nos dirige a x si el usuario esta autenticado: feed?
    };

    return {
      isAuthenticated,
    };
  },
});
