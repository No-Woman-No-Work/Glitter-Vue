<template>
  <div>
    <NavBar v-model="navBarSearch" @updateSearch="updateSearch" />
    <router-view v-model="navBarSearch"/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
import { ref } from "vue";
// import { whatch } from "vue";


export default {
  name: "App",
  components: {
    NavBar,
  },
  setup(props, context) {
    const navBarSearch = ref('');

    // You can also use watchEffect to listen for changes on parentProp
    // watch(() => navBarSearch.value, () => {
    //   console.log(`navBarSearch has changed to: ${navBarSearch.value}`);
    // }, {
    //   deep: true,
    // });

    const updateSearch = (newSearch) => {
        console.log('navBarSearch updated: ' + newSearch)
        navBarSearch.value = newSearch;
        context.emit('update:modelValue', navBarSearch.value)
      }

    return {
      navBarSearch,
      updateSearch
    };
  }
}
</script>

<style>
#app {
  color: #545454;
}
</style>