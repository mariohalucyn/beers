import { useEffect, useState } from 'react';

export const fetchApi = (link) => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch(link)
			.then(response => {
				return response.json();
			})
			.then(data => {
				setItems(data);
			});
	}, []);

	return items;
};
