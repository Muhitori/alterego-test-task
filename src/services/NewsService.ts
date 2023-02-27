import axios from "axios";

const BASE_API = process.env.REACT_APP_API_URL as string;
const LIMIT = 10;

export class NewsService {
	static async getNews(page: number) {
		const params = new URLSearchParams();

		params.append("_page", String(page));
		params.append("_page", String(LIMIT));

		const { data } = await axios.get(`${BASE_API}?${params.toString()}`);
		return data;
	}

	static async deleteNews(id: number) {
		const { data } = await axios.delete(`${BASE_API}/${id}`);
		return data;
	}
}
