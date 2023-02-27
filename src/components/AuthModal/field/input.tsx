import { Field, FieldProps, useFormikContext } from "formik";
import { TextField } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import type { User } from "../../../types/User";

interface Props {
	name: keyof User;
}

export const Input: FC<Props> = ({ name }) => {
	const { errors, touched } = useFormikContext<User>();
	const { t } = useTranslation();

	const hasError = touched[name] && Boolean(errors[name]);

	return (
		<Field name={name}>
			{({ field }: FieldProps) => (
				<TextField
					fullWidth
					error={hasError}
					label={t(name)}
					helperText={hasError && `${t(errors[name] as string)}`}
					{...field}
				/>
			)}
		</Field>
	);
};
