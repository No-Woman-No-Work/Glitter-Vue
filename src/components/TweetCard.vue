<template>
  <div>
    <form @submit.prevent="createTweet">
      <textarea v-model="text" placeholder="Share your thoughts!"></textarea>
      <button type="button" class="postBtn" @click="createTweet">Post</button>
      <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
    </form>
  </div>
</template>

<script>
import flitterApi from "../api/flitterApi"
import { ref } from 'vue';

export default {
  setup() {
    const text = ref('');
    const errorMessage = ref('');

    const createTweet = async () => {
      if (text.value.length > 0 && text.value.length <= 256) {
        const response = await flitterApi.post('/tweet/', {
          text: text.value,
          publishDate: Date.now(),
          author: req.jwtInfo.user_id,
          kudos: []
        });

        if (response.status === 200) {
          text.value = '';
          errorMessage.value = '';
          console.log('Tweet created successfully');
        } else {
          errorMessage.value = 'Failed to create tweet';
          console.error('Failed to create tweet');
        }
      } else if (text.value.length === 0) {
        errorMessage.value = 'Tweet must not be empty';
        console.error('Tweet must not be empty');
      } else {
        errorMessage.value = 'Tweet must be less than or equal to 256 characters';
        console.error('Tweet must be less than or equal to 256 characters');
      }
    };

    return {
      text,
      errorMessage,
      createTweet,
    };
  },
};
</script>

<style scoped>
textarea {
  flex-wrap: wrap;
  margin: auto;
  width: 100%;
  height: 100px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
  margin-bottom: 10px;
}

.postBtn {
  background-color: #FFFFFF;
  border: 1px solid rgb(209, 213, 219);
  border-radius: .5rem;
  box-sizing: border-box;
  color: #111827;
  font-family: "Inter var", ui-sans-serif, system-ui, -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: .875rem;
  font-weight: 600;
  line-height: 1.25rem;
  padding: .75rem 1rem;
  text-align: center;
  text-decoration: none #D1D5DB solid;
  text-decoration-thickness: auto;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.postBtn:hover {
  background-color: rgb(249, 250, 251);
}
</style>