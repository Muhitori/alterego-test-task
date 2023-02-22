import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userSelector } from "../../store/selectors/auth.selector";
import { setUser } from "../../store/slice/auth.slice";

export const Navbar = () => {
	const dispatch = useDispatch();
	const isLoggedIn = Boolean(useSelector(userSelector));

	const logout = () => dispatch(setUser(null));

	const login = () =>
		dispatch(setUser({ username: "admin", password: "12345" }));

	return (
		<>
			<AppBar position='relative'>
				<Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
					<Box display='flex' gap={2}>
						<Link to='/'>
							<Typography variant='h6'>Home</Typography>
						</Link>
						<Link to='/news'>
							<Typography variant='h6'>News</Typography>
						</Link>
						<Link to='/profile'>
							<Typography variant='h6'>Profile</Typography>
						</Link>
					</Box>

					<Box>
						{isLoggedIn ? (
							<Button color='inherit' onClick={logout}>
								Logout
							</Button>
						) : (
							<Button color='inherit' onClick={login}>
								Login
							</Button>
						)}
					</Box>
				</Toolbar>
			</AppBar>
		</>
	);
};
