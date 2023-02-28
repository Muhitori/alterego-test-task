import { RootState } from "..";

export const newsSelector = (state: RootState) => state.news.list;
export const newsLoadingSelector = (state: RootState) => state.news.isLoading;
