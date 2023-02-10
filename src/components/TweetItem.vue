<template>
 <div class="tweet list-group list-group-light ">
    <div class="list-group-item d-flex justify-content-between align-items-center border border-white">
      <div class="d-flex align-items-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/77/Avatar_cat.png" alt="profile image" style="width: 45px; height: 45px" class="rounded-circle"/>
        <div class="mb-4 ms-3">
          <div class="d-flex">
            <p class="fw-bold mb-0 mr-2">{{ tweet.author.username }}author&nbsp;</p>
            <p class="font-weight-bold text-secondary mb-2">&#8231;&nbsp;{{ tweet.publishdate }}publishdate</p>
          </div>
          <p class="mb-2">{{ tweet.text }}Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto tenetur consequatur, dolorem impedit reprehenderit eaque magni officiis quaerat amet ullam autem expedita numquam natus quod. Obcaecati quasi pariatur expedita et.</p>
        </div>
    </div>
    </div>
    <div>
      <div
        class="card-footer border-0 bg-light p-2 d-flex justify-content-around">
        <button 
				v-for="btn in btns" 
				:key="btn.txt" 
				class="btn" 
				:class="btn.class" 
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
  props: ['tweet', 'btns']
  };
</script>

<style scoped>
.tweet {
  max-width: 50em;
}
</style>
