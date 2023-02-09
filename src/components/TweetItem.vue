<template>
<div>
  <div class="col-xl-6 mb-4">
    <div class="card border border-white">
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center">
          <div class="d-flex align-items-center">
            <img
              src="https://sm.mashable.com/mashable_sea/photo/default/man-fakes-death-cat-q6u_2z9w.png"
              alt="User avatar"
              style="width: 50px; height: 50px"
              class="rounded-circle"
            />
            <div class="ms-3">
              <p class="fw-bold mb-1">{{author}}<span class="d-flex justify-content-end">{{publishDate}}</span></p>
              <p class="text-muted mb-0">{{text}}Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum natus, molestiae corrupti earum blanditiis minima ratione et laborum exercitationem tenetur veniam distinctio rerum, facilis quidem enim cumque. Odio, dignissimos provident.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer border-0 bg-light p-2 d-flex justify-content-around">
        //FOLLOW
        <button 
          v-for="btn in btns" 
          :key="btn.txt" 
          class="btn" 
          :class="btn.class" 
          @click.prevent="btn.action">
          {{ btn.txt }}
				</button>
        //KUDOS
        <p>{{ tweet.kudos.length }} kudos</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'TweetItem',
  props: ['text', 'author', 'publishDate', 'kudos']
  };
</script>

<style scoped>
/*
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
*/
</style>
