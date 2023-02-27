import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
	persistStore,
} from "redux-persist";
import storage from "redux-persist/es/storage";
import type {} from "redux-thunk/extend-redux";

import authReducer from "./slice/auth.slice";
import newsReducer from "./slice/news.slice";

const reducers = combineReducers({
	auth: authReducer,
	news: newsReducer,
});

const persistConfig = {
	key: "root",
	storage,
	blacklist: ["news"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) => [
		...getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
	],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
