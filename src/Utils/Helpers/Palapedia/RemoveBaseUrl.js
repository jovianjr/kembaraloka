// import { CMS_BASEURL } from 'Utils/Keys/Palapedia/Constants';

/**
 * @param {string} bodyText
 * @returns {string} removed strapi's upload response url
 */

// FIXME setting dari strapinya
export const RemoveUploadBaseUrl = bodyText => {
	// const re = new RegExp(`/${CMS_BASEURL}/uploads/g`);
	const re = new RegExp('http://localhost:1337/uploads', 'g');
	return bodyText.replace(re, `${process.env.NEXT_PUBLIC_STRAPI_URL}/uploads`);
};
