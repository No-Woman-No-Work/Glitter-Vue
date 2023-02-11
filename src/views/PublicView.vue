<template>
  <div class="tweets-container">
    <div class="container d-flex flex-column justify-content-center align-items-center">
      <SearchBar @searched="onSearch($event)" />
      <div class="mt-2">
        <TweetItem v-for="tweet in tweets" :key="tweet._id" :tweet="tweet" />
      </div>
    </div>
</div>
</template> 

<script>
import flitterApi from "../api/flitterApi";
import { ref, onMounted } from "vue";
import TweetItem from "../components/TweetItem.vue";


export default {
  name: 'PublicView',
  components: {
    TweetItem,
  },
  setup() {
    const tweets = ref("");
    const getTweets = async () => {
      const response = await flitterApi.get("/tweets", {
        params: {
          page: 1,
          limit: 7,
          order: 'desc'
        }
      });
      tweets.value = response.data.docs;
    };

    onMounted(() => {
      getTweets();
    });

    return {
      tweets,
    };
  },
}
</script>

<style>
  .tweets-container {
    margin-top: 1em;
  }
</style>

<!-- jajaja chatgpt al rescate: 
  necesitamos que en el script, una vez hecha la petición a la api, 
  poder acceder a las propiedades de cada tweet obtenido por la base de datos 
  e inyectarlos en el componente tweetItem que vamos a replicar con el v-for 
  arriba en el template , qué nos faltaría en el código?
El código que proporcionaste realiza la petición a la API y guarda los datos 
de los tweets en una variable llamada "tweets". Sin embargo, no está utilizando 
esos datos para inyectarlos en el componente "TweetItem".

Para hacer esto, necesitas agregar una propiedad "tweet" a cada instancia de 
"TweetItem" en el ciclo "v-for". Esta propiedad será igual a cada uno de los 
tweets obtenidos de la API, y se puede acceder desde dentro de "TweetItem" 
como "props.tweet".

Aquí está el código corregido:

<template>
  <div class="container">
    <SearchBar @searched="onSearch($event)" />
    <div class="row row-cols-1 row-cols-md-2 g-4 mt-2">
      <div class="col" v-for="tweet in tweets.value" :key="tweet._id">
        <TweetItem :tweet="tweet" />
      </div>
    </div>
  </div>
  <FooterSection />
</template>
En este código, cada iteración del ciclo "v-for" crea una nueva instancia 
de "TweetItem" y le pasa el objeto "tweet" correspondiente como propiedad 
"tweet". Esto significa que cada una de estas instancias tendrá acceso a 
las propiedades del tweet, como "text", "publishDate", "author", y "kudos", 
que se pueden usar dentro de "TweetItem" para mostrar información sobre 
cada tweet. -->