import { Field, FieldProps } from "formik";
import { TextField } from "@mui/material";
import { FC } from "react";
import { useTranslation } from "react-i18next";

interface Props {
	name: string;
}

export const Input: FC<Props> = ({ name }) => {
	const { t } = useTranslation();

	return (
		<Field name={name}>
			{({ field, form }: FieldProps) => (
				<TextField
					fullWidth
					error={Boolean(form.errors[name])}
					label={t(name)}
					helperText={form.errors[name] && `${t(form.errors[name] as string)}`}
					{...field}
				/>
			)}
		</Field>
	);
};
