import { configureStore } from '@reduxjs/toolkit';
import moviesSlice from './duck/moviesReducer';
import userSlice from './duck/userReducer';

const store = configureStore({
	reducer: {
		moviesStore: moviesSlice,
		userStore: userSlice,
	},
});

export default store;
