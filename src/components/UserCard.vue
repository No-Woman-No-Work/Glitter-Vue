<template>
  <section class="vh-100">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-md-12 col-xl-4">

          <div class="card" style="border-radius: 15px;">
            <div class="card-body text-center">
              <div class="mt-3 mb-4">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                  class="rounded-circle img-fluid" style="width: 100px;" />
              </div>
              <h4 class="mb-2">{{ username }}</h4>
              <p class="text-muted mb-4"><a href="#!">{{ activity }}</a></p>
              <button type="button" class="btn btn-primary btn-rounded btn-lg">
                {{ btn.text }}
              </button>
              <div class="d-flex justify-content-center text-center mt-5 mb-2">
                <div>
                  <p class="mb-2 h5">8471</p>
                  <p class="followers text-muted mb-0">Followers</p>
                </div>
                <div>
                  <p class="mb-2 h5">4751</p>
                  <p class="following text-muted mb-0">Following</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'UserCard',
  props: ['username', 'email', 'btn', 'following', 'followers'],
  methods: {
    unsubscribe() {
      this.$emit('unsubscribe');
    }
  }
}
</script>

<style scoped>
.followers {
  margin-left: 30px;
}
</style>