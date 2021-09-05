import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// action creator
export const fetchTrendingAndPopular = createAsyncThunk(
	'moviesStore/fetchTrendingAndPopuler',
	() => {
		const popular = `https://api.themoviedb.org/3/movie/popular?api_key=c8b25cf3edbf1c810fc3746d2e6f7d62&language=en-US`;
		const trending = `https://api.themoviedb.org/3/trending/movie/week?api_key=c8b25cf3edbf1c810fc3746d2e6f7d62`;
		const requestOne = axios.get(popular);
		const requestTwo = axios.get(trending);
		return axios.all([requestOne, requestTwo]).then(
			axios.spread((...responses) => ({
				popular: responses[1].data,
				trending: responses[0].data,
			}))
		);
	}
);
export const fetchMovies = createAsyncThunk(
	'moviesStore/fetchMovies',
	(pageNo) => {
		const movies = `https://api.themoviedb.org/3/movie/top_rated?api_key=c8b25cf3edbf1c810fc3746d2e6f7d62&language=en-US&page=${pageNo}`;
		return axios.get(movies).then((response) => ({ movies: response.data }));
	}
);
export const fetchActors = createAsyncThunk(
	'moviesStore/fetchActors',
	(pageNo) => {
		const actors = `
    https://api.themoviedb.org/3/person/popular?api_key=c8b25cf3edbf1c810fc3746d2e6f7d62&language=en-US&page=${pageNo}`;
		return axios.get(actors).then((response) => ({ actors: response.data }));
	}
);
export const fetchMovie = createAsyncThunk('moviesStore/fetchActors', (id) => {
	const movie = `https://api.themoviedb.org/3/movie/${id}?api_key=c8b25cf3edbf1c810fc3746d2e6f7d62&language=en-US`;
	return axios.get(movie).then((response) => response.data);
});
// Reducer
const moviesSlice = createSlice({
	name: 'moviesReducer',
	initialState: {
		popular: [],
		movies: [],
		actors: [],
		trending: [],
		movie: [],
		loading: true,
	},
	extraReducers: {
		// handle async actions: pending, fulfilled, rejected (for errors)
		[fetchTrendingAndPopular.pending](state) {
			state.loading = true;
		},
		[fetchTrendingAndPopular.fulfilled](state, action) {
			const { popular, trending } = action.payload;
			state.popular = popular;
			state.trending = trending;
			state.loading = false;
		},
		[fetchMovies.pending](state) {
			state.loading = true;
		},
		[fetchMovies.fulfilled](state, action) {
			const { movies } = action.payload;
			state.movies = movies;
			state.loading = false;
		},
		[fetchActors.pending](state) {
			state.loading = true;
		},
		[fetchActors.fulfilled](state, action) {
			const { actors } = action.payload;
			state.actors = actors;
			state.loading = false;
		},
		[fetchMovie.pending](state) {
			state.loading = true;
		},
		[fetchMovie.fulfilled](state, action) {
			state.movie = action.payload;
			state.loading = false;
		},
	},
});

export default moviesSlice.reducer;
