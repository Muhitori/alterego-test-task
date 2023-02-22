import { useSelector } from "react-redux";
import { Routes, Route, Outlet } from "react-router-dom";
import { userSelector } from "../store/selectors/auth.selector";

import { ProtectedRoute } from "./ProtectedRoute";
import { Layout } from "../components/Layout";

import { Main } from "../components/pages/Main";
import { News } from "../components/pages/News";
import { Profile } from "../components/pages/Profile";

export const Router = () => {
	const isLoggedIn = Boolean(useSelector(userSelector));

	return (
		<Routes>
			<Route
				element={
					<Layout>
						<Outlet />
					</Layout>
				}>
				<Route index element={<Main />} />
				<Route path='news' element={<News />} />
				<Route element={<ProtectedRoute isAllowed={isLoggedIn} />}>
					<Route path='profile' element={<Profile />} />
				</Route>
			</Route>
		</Routes>
	);
};
