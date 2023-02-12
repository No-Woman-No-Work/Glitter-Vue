<template>
  <div class="tweet list-group list-group-light ">
    <div class="list-group-item d-flex justify-content-between align-items-center border border-white">
      <div class="d-flex align-items-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/77/Avatar_cat.png" alt="profile image"
          style="width: 45px; height: 45px" class="rounded-circle" />
        <div class="mb-4 ms-3">
          <div class="d-flex">
            <p class="fw-bold mb-0 mr-2">@{{ author }}&nbsp;</p>
            <p class="font-weight-bold text-secondary mb-2">&#8231;&nbsp;{{ publishDate }}</p>
          </div>
          <p class="mb-2">{{ text }}</p>
          <div class="d-flex" v-if="imagePath">
            <img :src="'http://localhost:3000' + imagePath" />
          </div>
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

export default {
  name: 'TweetItem',
  props: ['author', 'publishDate', 'text', 'imagePath', 'btns'],
  methods: {
    followUser() {
      this.$emit('followUser');
    }
  }
}
</script>

<style scoped>
.tweet {
  max-width: 50em;
}
</style>
