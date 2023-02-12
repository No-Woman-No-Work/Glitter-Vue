<template>
  <user-card />
</template>

<script>
import UserCard from "../components/UserCard.vue";

export default {
  name: "UserProfileView",
  components: {
    UserCard,
  },
}
</script>

<style scoped>
.followers {
  margin-left: 100px;
}

.following {
  margin-right: 100px;
}
</style>