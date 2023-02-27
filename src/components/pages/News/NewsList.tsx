import { Box, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newsSelector } from "../../../store/selectors/news.selector";
import { getNewsAsync, resetNews } from "../../../store/slice/news.slice";
import { PostComponent } from "./Post";

const FIRST_PAGE = 1;

export const NewsList = () => {
	const dispatch = useDispatch();

	const news = useSelector(newsSelector);

	const [page, setPage] = useState(FIRST_PAGE);

	useEffect(() => {
		dispatch(getNewsAsync(FIRST_PAGE));

		return () => {
			dispatch(resetNews());
		};
	}, [dispatch]);

	const handleLoadMore = () => {
		dispatch(getNewsAsync(page + 1));
		setPage(page + 1);
	};

	return (
		<Box display='flex' flexDirection='column' gap={2}>
			{news.map((post) => (
				<PostComponent key={post.id} post={post} />
			))}

			<Button onClick={handleLoadMore} variant='outlined' sx={{ mb: 2 }}>
				Load more
			</Button>
		</Box>
	);
};
