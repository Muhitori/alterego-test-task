import { Box } from "@mui/material";
import { FC, ReactNode } from "react";
import { Navbar } from "./NavBar";

interface Props {
	children: ReactNode;
}

export const Layout: FC<Props> = ({ children }) => {
	return (
		<Box>
			<Navbar />
			{children}
		</Box>
	);
};
