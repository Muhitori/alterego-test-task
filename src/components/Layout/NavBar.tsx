import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	Box,
	MenuItem,
	Select,
	SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "i18next";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userSelector } from "../../store/selectors/auth.selector";
import { setUser } from "../../store/slice/auth.slice";
import { languages } from "../../utils/constants";

export const Navbar = () => {
	const dispatch = useDispatch();
	const { t } = useTranslation();
	const isLoggedIn = Boolean(useSelector(userSelector));

	const [language, setLanguage] = useState("en");

	const handleLanguageChange = (event: SelectChangeEvent<string>) => {
		const { value } = event.target;

		setLanguage(value);
		changeLanguage(value);
	};

	const logout = () => dispatch(setUser(null));

	const login = () =>
		dispatch(setUser({ username: "admin", password: "12345" }));

	return (
		<>
			<AppBar position='relative'>
				<Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
					<Box display='flex' gap={2}>
						<Link to='/'>
							<Typography variant='h6'>{t("home")}</Typography>
						</Link>
						<Link to='/news'>
							<Typography variant='h6'>{t("news")}</Typography>
						</Link>
						{isLoggedIn && (
							<Link to='/profile'>
								<Typography variant='h6'>{t("profile")}</Typography>
							</Link>
						)}
					</Box>

					<Box display='flex' gap={2}>
						<Select
							value={language}
							label='Language'
							onChange={handleLanguageChange}>
							{languages.map((language) => (
								<MenuItem value={language}>{language}</MenuItem>
							))}
						</Select>

						{isLoggedIn ? (
							<Button color='inherit' onClick={logout}>
								{t("logout")}
							</Button>
						) : (
							<Button color='inherit' onClick={login}>
								{t("login")}
							</Button>
						)}
					</Box>
				</Toolbar>
			</AppBar>
		</>
	);
};
