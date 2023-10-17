import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '../Fetcher';
import { FormatPalapediaPost } from 'Utils/Helpers/Palapedia';

export const useFindManyByCategory = (
	category,
	exceptSlugs = [],
	populate = true
) => {
	const [posts, setPosts] = useState([]);

	const url =
		`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/palapedias?filters[category]=` +
		category +
		(populate ? '&populate=*' : '');
	const { data, error } = useSWR(url, fetcher);

	// akan inf loop jika pass array ke useEffect dependency
	// maka, digabung ke string dahulu
	// nanti displit lagi di useEffect
	const exceptSlugsStr = exceptSlugs.join(';');

	useEffect(() => {
		if (!data) return;

		const resPosts = data.data;

		const formattedPosts = resPosts.map(async p => {
			const post = p.attributes;
			return await FormatPalapediaPost(post, populate);
		});

		(async () => {
			const realPosts = await Promise.all(formattedPosts);

			const excepts = exceptSlugsStr.split(';');
			const filteredPost = realPosts.filter(
				post => !excepts.includes(post.slug)
			);
			setPosts(filteredPost);
		})();
	}, [data, exceptSlugsStr, populate]);

	return {
		posts: posts,
		error: error,
		isLoading: !posts && !error
	};
};
