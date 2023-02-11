<template>
  <div class="card">
    <h3>Share something with our community 🐥</h3>
    <form @submit.prevent="createTweet">
      <textarea v-model="text" id="textarea"
        placeholder="Remember we hate KFC and messages that exceed 256 characters"></textarea>
      <button type="button" class="postBtn" @click="createTweet">Post</button>
      <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
    </form>
  </div>
</template>


<script>
import flitterApi from "../api/flitterApi"
import { ref, watch } from 'vue';


export default {
  setup() {
    const text = ref('');
    const errorMessage = ref('');
    const userId = ref('');


    watch(text, (newValue) => {
      errorMessage.value = newValue.length === 0 ? 'Glit must not be empty'
        : newValue.length > 256 ? 'Glit must be less than or equal to 256 characters'
          : '';
    });


    const createTweet = async () => {
      if (errorMessage.value) return;

      try {
        const response = await flitterApi.post('/tweets', {
          text: text.value,
          publishDate: Date.now(),
          author: userId.value,
          kudos: []
        });


        if (response.status === 200) {
          text.value = '';
          console.log('Glit created successfully');
        }
      } catch (error) {
        errorMessage.value = 'Failed to create glit';
        console.error('Failed to create glit: ', error);
      }
    };


    return {
      text,
      errorMessage,
      createTweet,
      userId
    };
  },
};
</script>






<style scoped>
.card {
  margin-bottom: 16px;
  padding: 20px;
  background-color: antiquewhite;
}


textarea {
  flex-wrap: wrap;
  margin: auto;
  width: 100%;
  height: 100px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 1px solid #111111;
  border-radius: 5px;
  background-color: #ffffff;
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