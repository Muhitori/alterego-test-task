import { RootState } from "..";

export const userSelector = (state: RootState) => state.auth.user;
