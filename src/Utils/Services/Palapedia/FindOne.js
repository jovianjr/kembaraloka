import useSWR from 'swr';
import { fetcher } from '../Fetcher';
import { FormatPalapediaPost } from 'Utils/Helpers/Palapedia';
import { useEffect, useState } from 'react';

export const useFindOne = (slug, populate = true) => {
	const [post, setPost] = useState();
	const [notFound, setNotFound] = useState(false);

	const url =
		`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/palapedias?filters[slug]=` +
		slug +
		(populate ? '&populate=*' : '');
	const { data, error } = useSWR(url, fetcher);

	useEffect(() => {
		if (!data) return;

		const resPosts = data.data;

		if (resPosts.length === 0 && !slug) return;

		if (resPosts.length === 0 && slug) {
			setNotFound(true);
			return;
		}
		setNotFound(false);

		const post = resPosts[0].attributes;
		(async () => {
			const formattedPost = await FormatPalapediaPost(post, populate);
			setPost(formattedPost);
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data, populate]);

	return {
		post: post,
		error: error,
		isLoading: !post && !error,
		isNotFound: notFound
	};
};
