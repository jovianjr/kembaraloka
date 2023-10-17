import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '../Fetcher';
import { FormatPalapediaPost } from 'Utils/Helpers/Palapedia';

// TODO limit post
// TODO exceptSlugs
export const useFindAll = (populate = true, sortLastPublished = true) => {
	const [posts, setPosts] = useState([]);

	const url =
		`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/palapedias` +
		(populate ? '?populate=*' : '');
	const { data, error } = useSWR(url, fetcher);

	useEffect(() => {
		if (!data) return;

		const resPosts = data.data;

		const formattedPosts = resPosts.map(async p => {
			const post = p.attributes;
			return await FormatPalapediaPost(post, populate);
		});

		(async () => {
			const realPosts = await Promise.all(formattedPosts);

			if (sortLastPublished) {
				const sortedPosts = realPosts.sort(
					(a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
				);
				setPosts(sortedPosts);
			}
		})();
	}, [data, populate, sortLastPublished]);

	return {
		posts: posts,
		error: error,
		isLoading: !posts && !error
	};
};
