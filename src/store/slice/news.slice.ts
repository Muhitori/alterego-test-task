import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { snackbarGenerator } from "../../components/SnackbarGenerator";
import { NewsService } from "../../services/NewsService";
import type { Post } from "../../types/Post";

interface State {
	list: Post[];
	isLoading: boolean;
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
	isLoading: false,
};

export const newsSlice = createSlice({
	name: "news",
	initialState,
	reducers: {
		resetNews: (state) => {
			state.list = [];
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getNewsAsync.fulfilled, (state, action) => {
			state.list = [...state.list, ...action.payload];
			state.isLoading = false;
		});
		builder.addCase(getNewsAsync.pending, (state) => {
			state.isLoading = true;
		});
		builder.addCase(getNewsAsync.rejected, (state) => {
			state.isLoading = true;
		});
		builder.addCase(deletePostAsync.fulfilled, (state, action) => {
			state.list = state.list.filter(({ id }) => action.payload !== id);
		});
	},
});

export const { resetNews } = newsSlice.actions;

export default newsSlice.reducer;
