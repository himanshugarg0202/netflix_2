<template>
  <div 
    class="card" 
    @click="openMovieDetails" 
    @keydown.enter="openMovieDetails" 
    role="button" 
    tabindex="0" 
    :aria-label="`View details for ${movie.title}`"
  >
    <img 
      :src="movie.Images[0]" 
      :alt="movie.Images[0] ? `Poster of ${movie.title}` : 'No movie poster available'"
    />
    <h2>{{ movie.title }}</h2>
    <p>Runtime: {{ movie.runtime }}</p>
    <p>Year: {{ movie.year }}</p>
  </div>
</template>

<script>
export default {
  props: {
    movie: Object,
  },
  methods: {
    openMovieDetails() {
      const encodedTitle = encodeURIComponent(this.movie.title);
      window.open(`/movie/${encodedTitle}`, "_blank");
    },
  },
};
</script>

<style scoped>
.card {
  width: 250px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  cursor: pointer;
  background-color: #fff;
}

.card:hover {
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.2);
}

.card:focus {
  outline: 2px solid #0057b8;
  border-radius: 10px;
}

.card img {
  width: 100%;
  border-radius: 8px;
}
</style>
