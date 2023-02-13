<template>
  <div>
    <v-menu v-model="menu" :close-on-content-click="false">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" v-on="on">
          Sort by publish date
          <v-icon right>mdi-menu-down</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item @click="sort('asc')">
          <v-list-item-title class="button-name">Ascending</v-list-item-title>
        </v-list-item>
        <v-list-item @click="sort('desc')">
          <v-list-item-title class="button-name">Descending</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>
  
  <script>
  import flitterApi from "../api/flitterApi";
  import { ref, onMounted } from 'vue';
  
  export default {
    setup() {
      const menu = ref(false);
      const order = ref('desc');
  
      function sort(option) {
        order.value = option;
      }
  
      onMounted(async () => {
        const page = 1;
        const limit = 10;
        const query = `?page=${page}&limit=${limit}&order=${order.value}`;
        try {
          const response = await flitterApi.get(`/tweets${query}`);
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      });
  
      return {
        menu,
        sort,
        order
      };
    }
  };
  </script>
  
  <style scoped>

  div{
    padding-bottom: 1em;
  }

  v-menu {
    color: white;
    background-color: #A0C3D2;
    padding: 0.3em;
    border: none;
    font-size: 0.9em;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
 
  </style>
  