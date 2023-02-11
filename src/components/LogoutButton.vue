<!-- COMPONENTE para inyectar en el botón de logout -->
<template>
	<button @click='handleLogout'><span class="material-icons">
logout
</span>Logout</button>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
	setup() {
		const router = useRouter()

		function handleLogout() {
			const token = localStorage.getItem('access_token');
			if (token) {
				localStorage.removeItem('access_token');
				router.push('/');
			}
		}

		return {
			handleLogout,
		};
	},
};
</script>

<style scoped>
button {
  color: white;
  background-color: #A0C3D2;
  border-radius: 0.3em;
  padding: 0.3em;
  border: none;
  font-size: 1em;
  cursor: pointer;
}

span.material-icons {
  font-size: 1.4em;
  margin-right: 0.4em;
  vertical-align: middle;
}
</style>


