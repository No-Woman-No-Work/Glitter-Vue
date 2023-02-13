<template>
  <div>
    <NavBar v-model="navBarSearch" @updateSearch="updateSearch" />
    <router-view :currentSearch="navBarSearch"/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
export default {
  name: "App",
  components: {
    NavBar,
  },
  data: function() {
    return {
      navBarSearch: "hola test search"
    };
  },
  methods: {
      updateSearch(navBarSearch) {
        console.log('navBarSearch updated: ' + navBarSearch)
        this.navBarSearch = navBarSearch;
      }
    }
}
</script>

<style>
#app {
  color: #545454;
}
</style>