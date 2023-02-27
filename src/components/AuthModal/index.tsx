import * as Yup from "yup";
import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
	Grid,
} from "@mui/material";
import Slide from "@mui/material/Slide";
import { FC, useRef } from "react";
import { Formik, Form, FormikProps } from "formik";
import { snackbarGenerator } from "../SnackbarGenerator";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import type { User } from "../../types/User";

import { Input } from "./field/input";
import { PASSWORD, USERNAME } from "../../utils/constants";

const validationSchema = Yup.object().shape({
	username: Yup.string().required("required"),
	password: Yup.string().required("required"),
});

const initialValues: User = {
	username: "",
	password: "",
};

interface Props {
	open: boolean;

	onClose: () => void;
	submit: (user: User) => void;
}

export const AuthModal: FC<Props> = ({ open, onClose, submit }) => {
	const navigate = useNavigate();
	const formRef = useRef<FormikProps<User> | null>(null);

	const { t } = useTranslation();

	const handleSubmit = (data: User) => {
		const { username, password } = data;

		if (username === USERNAME && password === PASSWORD) {
			submit(data);
			navigate("profile");
			snackbarGenerator.success("Authorized!");
			onClose();
		} else {
			snackbarGenerator.error("Email or password does not match.");
		}
	};

	const submitForm = () => {
		if (formRef.current) {
			formRef.current.handleSubmit();
		}
	};

	return (
		<Dialog
			onClose={onClose}
			open={open}
			fullWidth
			maxWidth='sm'
			TransitionComponent={Slide}>
			<DialogTitle textAlign='center'>{t("auth modal title")}</DialogTitle>
			<DialogContent>
				<Grid
					height='100%'
					container
					justifyContent='center'
					alignItems='center'>
					<Grid item sm={8} pt={1}>
						<Formik
							innerRef={formRef}
							initialValues={initialValues}
							validationSchema={validationSchema}
							onSubmit={handleSubmit}>
							<Form>
								<Box width='100%' display='flex' flexDirection='column' gap={2}>
									<Input name='username' />
									<Input name='password' />
								</Box>
							</Form>
						</Formik>
					</Grid>
				</Grid>
			</DialogContent>
			<DialogActions sx={{ display: "flex", justifyContent: "space-around" }}>
				<Button onClick={onClose} variant='contained' color='error'>
					{t("cancel")}
				</Button>
				<Button onClick={submitForm} variant='contained' color='primary'>
					{t("confirm")}
				</Button>
			</DialogActions>
		</Dialog>
	);
};
