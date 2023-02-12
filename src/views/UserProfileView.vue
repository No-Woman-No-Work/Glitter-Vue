<template>
  <UserCard :username="username" :email="email" :btn="btn" :following="following" />
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
      const res = await flitterApi.get('users/:userId');
      const user = await res.json();
      username.value = user.username;
      email.value = user.email;
      following.value = user.following.length;
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