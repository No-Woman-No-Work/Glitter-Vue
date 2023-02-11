<template>
  <nav class="navbar navbar-expand-lg bg-light">
    <div class="container justify-content-evenly d-flex align-items-center text-center">
      <router-link to="/" class="nav-link active" aria-current="page">
        <span class="material-icons">home</span>
      </router-link>
      <form class="input-group" @submit.prevent="search">
        <div class="form-outline">
          <input type="text" class="form-control" placeholder="Search flits..." v-model="searchTerm" />
        </div>
        <button type="submit" class="btn btn-primary" onClick={search}>Go</button>
      </form>
      <template v-if="this.$route.name === 'private'">
        <LogoutButton />
      </template>
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
    LogoutButton
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
    return {
      searchTerm,
      search,
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
</style>


