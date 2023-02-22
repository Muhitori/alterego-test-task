import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Router } from "../router";
import { store } from "../store";
import { SnackbarGenerator } from "./SnackbarGenerator";

export const App = () => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<CssBaseline />
				<SnackbarGenerator />

				<Router />
			</Provider>
		</BrowserRouter>
	);
};
