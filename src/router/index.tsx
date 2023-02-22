import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { userSelector } from "../store/selectors/auth.selector";

import { Main } from "../components/pages/Main";
import { News } from "../components/pages/News";
import { Profile } from "../components/pages/Profile";

import { ProtectedRoute } from "./ProtectedRoute";

export const Router = () => {
	const isLoggedIn = Boolean(useSelector(userSelector));

	return (
		<Routes>
			<Route index element={<Main />} />
			<Route path='news' element={<News />} />
			<Route element={<ProtectedRoute isAllowed={isLoggedIn} />}>
				<Route path='profile' element={<Profile />} />
			</Route>
		</Routes>
	);
};
