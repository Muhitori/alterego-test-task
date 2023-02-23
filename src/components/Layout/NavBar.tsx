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
import { AuthModal } from "../AuthModal";
import { User } from "../../types/User";

export const Navbar = () => {
	const dispatch = useDispatch();
	const { t } = useTranslation();
	const isLoggedIn = Boolean(useSelector(userSelector));

	const [language, setLanguage] = useState("en");
	const [isAuthModalOpened, setAuthModalOpened] = useState(false);

	const handleLanguageChange = (event: SelectChangeEvent<string>) => {
		const { value } = event.target;

		setLanguage(value);
		changeLanguage(value);
	};

	const login = (user: User) => dispatch(setUser(user));
	const logout = () => dispatch(setUser(null));

	const openAuthModal = () => setAuthModalOpened(true);
	const closeAuthModal = () => setAuthModalOpened(false);

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
								<MenuItem key={language} value={language}>
									{language}
								</MenuItem>
							))}
						</Select>

						{isLoggedIn ? (
							<Button color='inherit' onClick={logout}>
								{t("logout")}
							</Button>
						) : (
							<Button color='inherit' onClick={openAuthModal}>
								{t("login")}
							</Button>
						)}
					</Box>
				</Toolbar>
			</AppBar>

			<AuthModal
				open={isAuthModalOpened}
				onClose={closeAuthModal}
				submit={login}
			/>
		</>
	);
};
