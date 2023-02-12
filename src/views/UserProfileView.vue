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
    const following = ref('');
    const btn = ref({
      text: 'Unsubscribe',
      class: 'btn btn-primary btn-rounded btn-lg',
      route: "/unsubscribe"
    });

    const getUser = async () => {
      const response = await flitterApi.get('/users');
      const user = response.data.data;
      username.value = user.username;
      email.value = user.email;
      following.value = user.following;
    };

    onMounted(() => {
      getUser();
    });

    return {
      username,
      email,
      btn,
      following,
    };
  },
};
</script>