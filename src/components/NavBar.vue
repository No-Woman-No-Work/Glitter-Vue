<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container container-fluid justify-content-between">
    <!-- Left elements -->
    <div class="d-flex">
      <!-- Logo Flitter -->
      <a class="navbar-brand me-2 mb-1 d-flex align-items-center" href="#">
        <img
          src="../assets/img/logo_navbar.svg"
          height="35"
          alt="Flitter Logo"
          loading="lazy"
          style="margin-top: 2px;"
        />
      </a>
      <!-- Search -->
      <form class="input-group w-auto my-auto d-none d-sm-flex" @submit.prevent="search">
        <div class="form-outline">
          <input type="text" class="form-control" placeholder="Search flits..." v-model="searchTerm" />
        </div>
        <button type="submit" class="btn btn-primary btn-form" onClick={search}><i class="fas fa-search"></i></button>
      </form>
    </div>
    <!-- Final left elements -->

    <!-- Center elements ¿¿¿???

    <ul class="navbar-nav flex-row d-none d-md-flex">
    </ul>
    -->

    <!-- Fin center elements -->

    <!-- Right elements -->
    <ul class="navbar-nav flex-row">
      <li class="nav-item me-3 me-lg-1 active" v-if="checkLogout(true)">
        <router-link to="/" class="nav-link" aria-current="page">
          <span><i class="fas fa-home fa-lg"></i></span>
        </router-link>
      </li>
      <li class="nav-item me-3 me-lg-1 active" v-if="checkLogin(true)">
        <router-link to="/private" class="nav-link" aria-current="page">
          <span><i class="fa-solid fa-comments fa-lg"></i></span>
        </router-link>
      </li>
      <li class="nav-item me-3 me-lg-1 active">
        <router-link to="/public" class="nav-link" aria-current="page">
          <span><i class="fas fa-users fa-lg"></i></span>
        </router-link>
      </li>
      <li class="nav-item me-3 me-lg-1 active" v-if="checkLogin(true)">
        <router-link to="/user-profile" class="nav-link" aria-current="page">
          <span><i class="fa-solid fa-user fa-lg"></i></span>
        </router-link>
      </li>
      <li class="nav-item me-3 me-lg-1 active" v-if="checkLogin(true)">
        <span><LogoutButton/></span>
      </li>
    </ul>
    <!-- Right elements -->
  </div>
</nav>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import flitterApi from "../api/flitterApi";
import LogoutButton from "./LogoutButton.vue";
export default {
  name: 'NavBar',
  components: {
    LogoutButton,
  },
  setup() {
    const searchTerm = ref('');
    const router = useRouter();
    // The function returns immediately if the value of searchTerm is falsy to prevent sending an empty search to the server.
    const search = async () => {
      if (!searchTerm.value) {
        return;
      }
      // TODO: add endpoint
      try {
        const response = await flitterApi.get(`/tweets?search=${searchTerm.value}`);
        const data = response.data;
        if (data.length > 0) {
          router.push({
            // TO DO: create these views and routers
            name: 'search-results',
            params: {
              searchTerm: searchTerm.value,
            },
          });
        } else {
          router.push({
            name: 'not-found',
          });
        }
      } catch (error) {
        console.error(error);
      }
    };

    function checkLogin() {
      const token = localStorage.getItem('access_token');
      if (token) {
        return true;
      } else {
        return false;
      }
    }

    function checkLogout() {
      const token = localStorage.getItem('access_token');
      if (!token) {
        return true;
      } else {
        return false;
      }
    }

    return {
      searchTerm,
      search,
      checkLogin,
      checkLogout,
    };
  },
};
</script>

<style scoped>
.material-icons {
  color: white;
  font-size: 1.4em;
  background-color: #A0C3D2;
  padding: 0.3em;
  border-radius: 50%;
  margin: 0.1em;
}
.input-group {
  max-width: 20em;
}
.container {
  max-width: 855px;
}
.btn-form {
  line-height: 5pt;
	padding: 0 20px;
  background: #ffa580;
	letter-spacing: 2px;
	transition: .2s all ease-in-out;
	outline: none;
	border: 1px solid rgba(0, 0, 0, 1);
  box-shadow: 3px 3px 1px 1px #95a4ff, 3px 3px 1px 2px rgba(0, 0, 0, 1);
}
input.form-control {
  border: 1px solid rgba(0, 0, 0, 1);
  box-shadow: 3px 3px 1px 1px #95a4ff, 3px 3px 1px 2px rgba(0, 0, 0, 1);
  background: #f8f4e5;
}
</style>


