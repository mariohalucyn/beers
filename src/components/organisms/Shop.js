import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div `
	width: 1200px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: auto;
`;

const BeersList = styled.ul `
	width: 300px;
	display: flex;
	flex-direction: column;
	list-style-type: none;
	background-color: ${({ theme }) =>theme.colors.red }
`;

const Shop = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		fetch('https://api.punkapi.com/v2/beers')
			.then(response => {
				return response.json();
			})
			.then(data => {
				setItems(data);
			});
	}, []);

	return (
		<StyledWrapper>
			{items.map(({ id, name, brewers_tips, image_url, tagline }) => (
				<BeersList key={id}>
					<li>{name}</li>
					<li>{tagline}</li>
					<img width='100px' src={image_url} alt={name} />
					<li>{brewers_tips}</li>
				</BeersList>
			))}
		</StyledWrapper>
	);
};

export default Shop;