import { ROOT_ROUTE } from "./constants";

if (!window.location.pathname.includes(ROOT_ROUTE)) {
	window.history.replaceState("", "", ROOT_ROUTE + window.location.pathname);
}
