const getUser = async () => {
      const response = await flitterApi.get('/users');
      const user = response.data.data;
      username.value = user.username;
      email.value = user.email;
      following.value = user.following;
    };