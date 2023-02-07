<template>
    <div>
      <h1>Unsubscribe</h1>
      <p>Are you sure you want to unsubscribe from Flitter?</p>
      <button @click="unsubscribe">Yes, unsubscribe me</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      unsubscribe() {
        // Perform the unsubscribe action, e.g. send a request to a server
        console.log('User unsubscribed');
      },
    },
  };
  </script>

<style scoped>

</style>