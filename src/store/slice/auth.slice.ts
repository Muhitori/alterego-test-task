import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../../types/User";

interface State {
	user: User | null;
}

const initialState: State = {
	user: null,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<User | null>) => {
			state.user = action.payload;
		},
	},
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
