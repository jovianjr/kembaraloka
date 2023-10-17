import { useEffect, useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '../Fetcher';

export const CATEGORIES = ['Umum', 'Penugasan', 'Perlengkapan', "Sinkronus dan Action Plan", "Learning Management System"];
const initialContents = CATEGORIES.map(c => ({ category: c, questions: [] }));

export const useFindAllFaqs = () => {
	const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/faqs`;
	const { data, error } = useSWR(url, fetcher);

	const [contents, setContents] = useState(initialContents);

	useEffect(() => {
		if (!data) return;

		const faqs = data.data.map(d => d.attributes);

		const tempContents = initialContents;

		faqs.forEach(faq => {
			const ctgr = faq.category;
			const question = {
				question: faq.title,
				answer: faq.body
			};

			const categoryIndex = tempContents.findIndex(c => c.category === ctgr);
			if (categoryIndex === -1) return;

			tempContents[categoryIndex].questions.push(question);
		});
		setContents([...tempContents]);
	}, [data]);

	return {
		faqs: contents,
		error: error,
		isLoading: !data && !error
	};
};
