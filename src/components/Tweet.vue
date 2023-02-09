<template>
  <div className="tweet">
    <div>
      <p>{{ text }}</p>
      <div class="tweet-info">
        <span>{{ author }}</span>
        <span>{{ publishDate }}</span>
        <!-- TODO: IMPLEMENTAR KUDOS -->
        <!-- <button @click="kudos">{{ likes }} Likes</button> -->
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    text: String,
    author: String,
    publishDate: Date,
    // kudos: Number,
  },
};
</script>


<style scoped>
.tweet {
  margin: 5px auto;
  min-width: 480px;
  max-width: 640px;
  min-height: 80px;
  padding: 10px;
  border: 1px solid #ccc;
  display: flex;
  font-size: 1.1rem;
  line-height: 18px;
}
</style>