import { serialize } from 'next-mdx-remote/serialize';
import { RemoveUploadBaseUrl } from 'Utils/Helpers/Palapedia';

/**
 * @typedef ThumbnailUrl
 * @property {string} original
 * @property {string} small
 * @property {string} medium
 */

/**
 * @typedef PalapediaPost
 * @property {string} title
 * @property {MDXRemoteSerializeResult} body
 * @property {string} author
 * @property {string} slug
 * @property {string} tags
 * @property {ThumbnailUrl} thumbnailUrl
 */

/**
 * @param {any} post - from object in strapi
 * @param {boolean} populate - true if want to get thumbnail data
 * @returns {Primose<PalapediaPost>}
 */
export const FormatPalapediaPost = async (post, populate) => {
	const bodyText = RemoveUploadBaseUrl(post.body);
	const mdxBody = await serialize(bodyText);

	const formattedPost = {
		title: post.title,
		author: post.author,
		slug: post.slug,
		category: post.category,
		thumbnailUrl: {
			original: populate ? post?.thumbnail?.data?.attributes?.url : '',
			small: populate
				? post?.thumbnail?.data?.attributes?.formats?.small?.url
				: '',
			medium: populate
				? post?.thumbnail?.data?.attributes?.formats?.medium?.url
				: ''
		},
		thumbnailWidth: {
			original: populate ? post?.thumbnail?.data?.attributes?.width : 0,
			small: populate
				? post?.thumbnail?.data?.attributes?.formats?.small?.width
				: 0,
			medium: populate
				? post?.thumbnail?.data?.attributes?.formats?.medium?.width
				: 0
		},
		thumbnailHeight: {
			original: populate ? post?.thumbnail?.data?.attributes?.height : 0,
			small: populate
				? post?.thumbnail?.data?.attributes?.formats?.small?.height
				: 0,
			medium: populate
				? post?.thumbnail?.data?.attributes?.formats?.medium?.height
				: 0
		},
		publishedAt: post.publishedAt,
		// body: mdxBody,
		body: post.body,
		previewText: post.previewText,
		priority: post.priority
	};

	return formattedPost;
};
