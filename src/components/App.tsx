import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Router } from "../router";
import { persistor, store } from "../store";
import { SnackbarGenerator } from "./SnackbarGenerator";

export const App = () => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<CssBaseline />
					<SnackbarGenerator />

					<Router />
				</PersistGate>
			</Provider>
		</BrowserRouter>
	);
};
