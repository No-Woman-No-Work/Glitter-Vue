<template>
	<div class="home">
		<div class="row">
			<div class="col-lg-6">
				<div class="img-cont">
					<img alt="Flitter logo" src="../assets/img/logo_flitter.svg" />
					<h2 class="text-center text-lg-start">
                        Hi! Please login in
					</h2>
				</div>
			</div>
			<div class="col-lg-6">
			<custom-card :btns="btnArray" class="mx-auto custom-card">
				<h4 class="text-center">
				Login in
				</h4>
        <form>
          <div class="mb-3 mt-2">
            <input
              type="email"
              class="form-control"
              placeholder="✉️ E-mail"/>
          </div>
          <div class="mb-3 mt-2">
            <input
              type="password"
              class="form-control"
              placeholder="🔒 Password" />
          </div>
        </form>
				</custom-card>
			</div>
		</div>
	</div>
</template>


<script>
	// @ is an alias to /src
	import CustomCard from '../components/CustomCard.vue'
	export default {
		name: 'LoginView',
		components: {
			CustomCard,
		},
		data() {
			return {
				btnArray: [
					{
						txt: 'LogIn',
						class: 'btn-secondary',
					}
				],
			}
		},
	}
</script>

<style scoped>
	.home {
		max-width: 895px;
		margin: auto;
	}
	.img-cont {
		display: flex;
		flex-direction: column;
	}
	img {
		max-width: 315px;
		margin: 1em auto 0 auto;
	}
	.custom-card {
		max-width: 398px;
		margin-top: 1.6em;
	}
  h2 {
    color: #545454;
  }
	@media (min-width: 992px) {
		.home {
			margin: 4em auto;
		}
		img {
			margin: 1em;
			margin-top: 6.9em;
		}
    .custom-card {
		margin: 0;
		margin-top: 7.6em;
    }
		h2 {
      color: #545454;
			margin: 0;
			margin-top: 0.8em;
			margin-left: 1.3em;
		}
	}
</style>