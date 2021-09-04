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
			const { email, password } = action.payload;
			state.email = email;
			state.password = password;
		},
		logout(state) {
			state.email = '';
		},
	},
});

export const { signup, login } = userSlice.actions;
export default userSlice.reducer;
