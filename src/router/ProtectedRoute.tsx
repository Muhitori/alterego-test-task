import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ROOT_ROUTE } from "../utils/constants";

interface Props {
	isAllowed: boolean;
}

export const ProtectedRoute: FC<Props> = ({ isAllowed }) => {
	if (!isAllowed) {
		return <Navigate to={ROOT_ROUTE} />;
	}

	return <Outlet />;
};
