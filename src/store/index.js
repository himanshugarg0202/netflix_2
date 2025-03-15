import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    movies: [],
    loading: false,
    error: null,
  },
  mutations: {
    SET_MOVIES(state, movies) {
      state.movies = movies;
    },
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
  },
  actions: {
    async fetchMovies({ commit }) {
      commit("SET_LOADING", true);
      try {
        const response = await axios.get("https://www.apirequest.in/movie/api");
        commit("SET_MOVIES", response.data);
      } catch (error) {
        commit("SET_ERROR", "Failed to load movies.");
      } finally {
        commit("SET_LOADING", false);
      }
    },
  },
  getters: {
    allMovies: (state) => state.movies,
    isLoading: (state) => state.loading,
    getError: (state) => state.error,
  },
});

export default store;
