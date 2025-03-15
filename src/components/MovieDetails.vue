<template>
  <section v-if="movie" class="details" aria-labelledby="movie-title">
    <h1 id="movie-title">{{ movie.title }}</h1>

    <img 
      :src="movie.Images[0]" 
      :alt="movie.Images[0] ? `Poster of ${movie.title}` : 'No movie poster available'"
    />

    <p><strong>Runtime:</strong> {{ movie.runtime }}</p>
    <p><strong>Year:</strong> {{ movie.year }}</p>

    <router-link to="/" class="back-link">Back to Movies</router-link>
  </section>

  <section v-else class="error-message" role="alert">
    <p>Movie not found or movies not loaded.</p>
    <router-link to="/" class="back-link">Go Back</router-link>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["allMovies"]),
    movie() {
      const title = decodeURIComponent(this.$route.params.title);
      return this.allMovies.find((movie) => movie.title === title) || null;
    },
  },
  created() {
    if (this.allMovies.length === 0) {
      this.fetchMovies(); // Fetch movies if store is empty
    }
  },
  methods: {
    ...mapActions(["fetchMovies"]),
  },
};
</script>

<style scoped>
.details {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

h1 {
  font-size: 2em;
  font-weight: bold;
}

.details img {
  width: 50%;
  height: auto;
  border-radius: 8px;
}

.error-message {
  text-align: center;
  font-size: 1.2em;
  font-weight: bold;
  color: #d32f2f;
  margin-top: 20px;
}

.back-link {
  display: inline-block;
  margin-top: 15px;
  padding: 10px 15px;
  background-color: #0057b8;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
}

.back-link:hover,
.back-link:focus {
  background-color: #003d82;
  outline: 2px solid #fff;
}
</style>
