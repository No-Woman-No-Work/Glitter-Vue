<!-- COMPONENTE para inyectar en el botón de logout -->

<template>
	<button @click='handleLogout'>Logout</button>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
	setup() {
            const router = useRouter()

		function handleLogout() {
			const token = localStorage.getItem('token');
			if (token) {
				localStorage.removeItem('token');
				router.push('/home');
			}
		}

		return {
			handleLogout,
		};
	},
};
</script>


