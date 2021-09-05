import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'moviesReducer',
	initialState: {
		uid: '',
		email: '',
		password: '',
	},
	reducers: {
		signup(state, action) {
			const { email, password, id } = action.payload;
			state.uid = id;
			state.email = email;
			state.password = password;
		},
		login(state, action) {
			const { email, password, id } = action.payload;
			state.uid = id;
			state.email = email;
			state.password = password;
		},
		logout(state) {
			state.uid = '';
			state.email = '';
			state.password = '';
		},
	},
});

export const { signup, login, logout } = userSlice.actions;
export default userSlice.reducer;
