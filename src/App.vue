<template>
  <NavBar/>
  <nav>
  </nav>
  <router-view/>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
export default {
  name: "App",
  components: {
    NavBar,
  }
}
</script>

<style>
#app {
  color: #545454;
}
</style>