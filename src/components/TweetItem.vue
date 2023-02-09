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
              <p class="fw-bold mb-1">author <span class="d-flex justify-content-end">publishDate</span></p>
              <p class="text-muted mb-0">text Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum natus, molestiae corrupti earum blanditiis minima ratione et laborum exercitationem tenetur veniam distinctio rerum, facilis quidem enim cumque. Odio, dignissimos provident.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer border-0 bg-light p-2 d-flex justify-content-around">
        <a
          class="btn btn-link m-0 text-reset"
          href="#"
          role="button"
          data-ripple-color="primary"
          >Message<i class="fas fa-envelope ms-2"></i></a>
        <a
          class="btn btn-link m-0 text-reset"
          href="#"
          role="button"
          data-ripple-color="primary">Call<i class="fas fa-phone ms-2"></i>
        </a>
      </div>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'TweetItem',
  props: {
    text: String,
    author: String,
    publishDate: Date,
    // kudos: Number,
  },
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
