<template>
	<div class="home">
		<div class="row">
			<div class="col-lg-6">
				<div class="img-cont">
					<img alt="Flitter logo" src="../assets/img/logo_flitter.svg" />
					<h2 class="text-center text-lg-start">
						Welcome to Flitter
					</h2>
				</div>
			</div>
			<div class="col-lg-6">
				<custom-card :btns="btnArray" class="mx-auto custom-card">
					<h4 class="text-center">
						Forgot password
					</h4>
					<div class="change-pass">
						<p>Change your password in three easy steps:</p>
						<ol class="list-unstyled">
							<li><span class="text-primary text-medium">1. </span>Enter your email address below.</li>
							<li><span class="text-primary text-medium">2. </span>Our system will send you a temporary link.</li>
							<li><span class="text-primary text-medium">3. </span>Use the link to reset your password.</li>
						</ol>
					</div>
					<form>
						<div class="mb-3 mt-2">
							<input type="email" class="form-control" placeholder="✉️ E-mail" v-model="email" required />
							<div v-if="error" class="alert alert-danger">{{ error }}</div>
						</div>
					</form>
				</custom-card>
			</div>
		</div>
	</div>
	<FooterSection />
</template>
    
<script>
import flitterApi from "../api/flitterApi"
import { ref } from 'vue'
import CustomCard from '../components/CustomCard.vue'
import FooterSection from "@/components/FooterSection.vue"

export default {
	name: 'PasswordView',
	components: {
		CustomCard,
		FooterSection
	},
	setup() {
		const email = ref('');
		const btnArray = [{ txt: 'Reset Password', class: 'btn-primary', action: "resetPassword" }];
		const error = ref(null);
		const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

		function isEmailValid() {
			return emailRegex.test(email.value)
		}

		const resetPassword = async function sendEmail() {
			if (!isEmailValid()) {
				error.value = 'Please enter a valid email address';
				return
			}
			try {
				await flitterApi.sendEmail(email.value)
				error.value = null
			} catch (err) {
				error.value = err.message
			}
		}

		return {
			email,
			btnArray,
			error,
			resetPassword
		}
	}
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

.change-pass {
	font-size: 13px;
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
		margin-top: 6.2em;
	}

	h2 {
		color: #545454;
		margin: 0;
		margin-top: 0.8em;
		margin-left: 1.4em;
	}
}
</style>
