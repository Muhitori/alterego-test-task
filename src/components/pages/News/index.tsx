import { Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { NewsList } from "./NewsList";

export const News = () => {
	const { t } = useTranslation();

	return (
		<Container>
			<Typography textAlign='center' variant='h1'>
				{t("news")}
			</Typography>

			<NewsList />
		</Container>
	);
};
