import { Field, FieldProps, useFormikContext } from "formik";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import { FC, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import type { User } from "../../../types/User";
import { VisibilityOff, Visibility } from "@mui/icons-material";

interface Props {
	name: keyof User;
}

export const PasswordInput: FC<Props> = ({ name }) => {
	const { errors, touched } = useFormikContext<User>();
	const { t } = useTranslation();

	const [showPassword, setShowPassword] = useState(false);

	const toggleShowPassword = useCallback(() => {
		setShowPassword(!showPassword);
	}, [showPassword]);

	const hasError = touched[name] && Boolean(errors[name]);

	return (
		<Field name={name}>
			{({ field }: FieldProps) => (
				<TextField
					fullWidth
					error={hasError}
					label={t(name)}
					helperText={hasError && `${t(errors[name] as string)}`}
					type={showPassword ? "text" : "password"}
					InputProps={{
						endAdornment: (
							<InputAdornment position='end'>
								<IconButton
									aria-label='toggle password visibility'
									onClick={toggleShowPassword}
									edge='end'>
									{showPassword ? <VisibilityOff /> : <Visibility />}
								</IconButton>
							</InputAdornment>
						),
					}}
					{...field}
				/>
			)}
		</Field>
	);
};
