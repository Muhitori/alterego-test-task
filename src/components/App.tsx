import { CssBaseline } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { Router } from "../router";
import { persistor, store } from "../store";
import { SnackbarGenerator } from "./SnackbarGenerator";
import { MAX_SNACK, ROOT_ROUTE } from "../utils/constants";

import "../utils/ensure-basename";

export const App = () => {
	return (
		<HashRouter basename={ROOT_ROUTE}>
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<SnackbarProvider maxSnack={MAX_SNACK}>
						<CssBaseline />
						<SnackbarGenerator />

						<Router />
					</SnackbarProvider>
				</PersistGate>
			</Provider>
		</HashRouter>
	);
};
