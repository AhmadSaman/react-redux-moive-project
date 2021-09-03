import { configureStore } from '@reduxjs/toolkit';
import moviesSlice from './duck/moviesReducer';

const store = configureStore({
	reducer: {
		moviesStore: moviesSlice,
	},
});

export default store;
