import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { snackbarGenerator } from "../../components/SnackbarGenerator";
import { NewsService } from "../../services/NewsService";
import type { Post } from "../../types/Post";

interface State {
	list: Post[];
}

export const getNewsAsync = createAsyncThunk(
	"news/get",
	async (page: number) => {
		try {
			const news = await NewsService.getNews(page);

			return news;
		} catch (err) {
			snackbarGenerator.error("Something went wrong.");
		}
	}
);

export const deletePostAsync = createAsyncThunk(
	"news/delete",
	async (id: number) => {
		try {
			await NewsService.deleteNews(id);
			snackbarGenerator.success("Post deleted");

			return id;
		} catch (err) {
			snackbarGenerator.error("Something went wrong.");
		}
	}
);

const initialState: State = {
	list: [],
};

export const newsSlice = createSlice({
	name: "news",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getNewsAsync.fulfilled, (state, action) => {
			state.list = [...state.list, ...action.payload];
		});
		builder.addCase(deletePostAsync.fulfilled, (state, action) => {
			state.list = state.list.filter(({ id }) => action.payload !== id);
		});
	},
});

export default newsSlice.reducer;
