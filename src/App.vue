<template>
  <NavBar/>
  <nav>
  </nav>
  <router-view/>
  <FooterSection/>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
import FooterSection from "@/components/FooterSection.vue"
export default {
  name: "App",
  components: {
    NavBar,
    FooterSection
  }
}
</script>

<style>
#app {
  color: #545454;
}
</style>