import { Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const Main = () => {
	const { t } = useTranslation();

	return (
		<Container>
			<Typography textAlign='center' variant='h1'>
				{t("home")}
			</Typography>
		</Container>
	);
};
