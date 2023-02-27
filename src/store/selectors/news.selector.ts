import { RootState } from "..";

export const newsSelector = (state: RootState) => state.news.list;
