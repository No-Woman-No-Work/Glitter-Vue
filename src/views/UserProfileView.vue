<template>
  <UserCard :username="username" :email="email" :btn="btn" :following="following.length" />
</template>

<script>
import UserCard from "../components/UserCard.vue";
import flitterApi from "../api/flitterApi";
import { ref, onMounted } from 'vue';

export default {
  name: "UserProfileView",
  components: {
    UserCard,
  },
  setup() {
    const username = ref('');
    const email = ref('');
    const btn = ref({
      text: 'Unsubscribe'
    });
    const following = ref('');

    onMounted(async () => {
      const response = await flitterApi.get('/users');
      if (response.data.error) {
        console.error(response.data.error);
      } else {
        username.value = response.data.data.username;
        email.value = response.data.data.email;
        following.value = response.data.data.following;
      }
    });


    return {
      username,
      email,
      btn,
      following,
    }
  },
}
</script>