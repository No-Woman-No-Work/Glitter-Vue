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
        next('/login'); 
      } else {
        next();
      }
    });

    const isAuthenticated = () => {
      router.push({ name: 'private' }); // nos dirige a x si el usuario esta autenticado
    };

    return {
      isAuthenticated,
    };
  },
});



// JAIME /* eslint-disable @typescript-eslint/no-explicit-any */
// import { RouteLocation } from "vue-router";

// const haveAuthGuard = (_to: RouteLocation, _from: RouteLocation, next: any) => {

//   const token = localStorage.getItem("access_token");

//   if (token) {
//     // queremos navegar!
//     next();
//   } else {
//     alert("No estás autenticado");
//     next({ name: "login" });
//   }
// };

// export default haveAuthGuard;