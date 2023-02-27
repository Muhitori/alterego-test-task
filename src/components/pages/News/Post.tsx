import {
	Card,
	CardContent,
	CardHeader,
	IconButton,
	Typography,
} from "@mui/material";
import { FC } from "react";
import type { Post } from "../../../types/Post";

import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { deletePostAsync } from "../../../store/slice/news.slice";

interface Props {
	post: Post;
}

export const PostComponent: FC<Props> = ({ post: { id, title, body } }) => {
	const dispatch = useDispatch();

	const handleDelete = () => {
		dispatch(deletePostAsync(id));
	};

	return (
		<Card sx={{ p: 1, fontWeight: 600 }}>
			<CardHeader
				title={title}
				action={
					<IconButton onClick={handleDelete}>
						<CloseIcon />
					</IconButton>
				}
			/>
			<CardContent>
				<Typography variant='body1'>{body}</Typography>
			</CardContent>
		</Card>
	);
};
