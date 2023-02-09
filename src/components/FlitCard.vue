<template>
  <div>
    <form @submit.prevent="createTweet">
      <textarea v-model="text" placeholder="Enter your tweet here"></textarea>
      <button type="submit">Post Tweet</button>
    </form>
  </div>
</template>

<script>
import flitterApi from "../api/flitterApi"

export default {
  setup() {
    const text = ref('');

    const createTweet = async () => {
      const response = await flitterApi.post('/api/tweets', {
        text: text.value,
        publishDate: Date.now(),
        author: req.jwtInfo.user_id,
      });

      if (response.status === 200) {
        text.value = '';
        console.log('Tweet created successfully');
      } else {
        console.error('Failed to create tweet');
      }
    };

    return {
      text,
      createTweet,
    };
  },
};
</script>