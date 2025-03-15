<template>
  <div class="container">
    <h1>Movie List</h1>

    <div v-if="loading" class="loading" role="status" aria-live="polite">
      Loading movies...
    </div>

    <div v-else-if="error" class="error" role="alert">
      {{ error }}
    </div>

    <section v-else class="movies" aria-label="List of movies" tabindex="0">
      <MovieCard v-for="movie in movies" :key="movie.title" :movie="movie" />   
    </section>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import MovieCard from "./MovieCard.vue";

export default {
  name: "MovieList",
  components: {
    MovieCard,
  },
  computed: {
    ...mapGetters(["allMovies", "isLoading", "getError"]),
    movies() {
      return this.allMovies;
    },
    loading() {
      return this.isLoading;
    },
    error() {
      return this.getError;
    },
  },
  mounted() {
    this.fetchMovies();
  },
  methods: {
    ...mapActions(["fetchMovies"]),
  },
};
</script>

<style>
.container {
  text-align: center;
  padding: 20px;
  color: #333;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
  font-weight: bold;
}

.loading, .error {
  font-size: 1.2em;
  font-weight: bold;
  margin: 20px 0;
}

.loading {
  color: #0057b8;
}

.error {
  color: #d32f2f;
}

.movies {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.movies:focus {
  outline: 2px solid #0057b8;
  border-radius: 5px;
}

@media (max-width: 480px) {
  .movies {
    flex-direction: column;
    align-items: center;
  }
  h1 {
    font-size: 1.5em;
  }
}

@media (min-width: 481px) and (max-width: 768px) {
  .movies {
    gap: 15px;
  }
  h1 {
    font-size: 1.75em;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .movies {
    gap: 20px;
  }
}

@media (min-width: 1025px) and (max-width: 1440px) {
  .movies {
    gap: 25px;
  }
}

@media (min-width: 1441px) and (max-width: 1920px) {
  .movies {
    gap: 30px;
  }
}
</style>
