import { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
	isAllowed: boolean;
}

export const ProtectedRoute: FC<Props> = ({ isAllowed }) => {
	if (!isAllowed) {
		return <Navigate to='/' />;
	}

	return <Outlet />;
};
