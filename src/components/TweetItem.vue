<template>
  <div class="tweet list-group list-group-light ">
    <div class="list-group-item d-flex justify-content-between align-items-center border border-white">
        <div class="ms-3 me-3 w-100">
          <div class="d-flex align-items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/77/Avatar_cat.png" alt="profile image" style="width: 45px; height: 45px" class="rounded-circle" />
            &nbsp;&nbsp;
            <p class="fw-bold mb-0">@{{ author }}</p>
            <p class="text-secondary mb-0 ms-auto">{{ formattedDate(publishDate) }}</p>
          </div>
          <p class="mb-2">{{ text }}</p>
          <div class="d-flex" v-if="imagePath">
            <img class="w-100" :src="'http://localhost:3000' + imagePath" />
          </div>
        </div>
    </div>
    <div>
      <div class="card-footer border-0 bg-light p-2 d-flex justify-content-around">
        <button v-for="btn in btns" 
          :key="btn.txt" 
          class="btn" 
          :class="btn.behaviour" 
          @click.prevent="btn.action">
          {{ btn.txt }}
        </button>
      </div>
      <hr class="my-4">
    </div>
  </div>
</template>

<script>
// import { ref } from 'vue';

export default {
  name: 'TweetItem',
  props: ['author', 'publishDate', 'text', 'imagePath', 'btns'],
  setup() {
    // const followUser = () => {
    //   this.$emit('followUser');
    // };
    const formattedDate = date => {
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
      return (new Date(date)).toLocaleDateString('es-ES', options);
    };
  
    return {
      // followUser,
      formattedDate
    };
  }
}
</script>

<style scoped>
.tweet {
  max-width: 50em;
}
.text-secondary {
  font-size: 13px;
} 
</style>
