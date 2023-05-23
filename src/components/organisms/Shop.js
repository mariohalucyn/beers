import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';

const StyledWrapper = styled.div `
	width: 1200px;
	margin: auto;
	padding: 0;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: auto;
	gap: 42px;
`;

const BeersList = styled.ul `
	margin: 0;
	padding: 0 16px;
	display: grid;
	grid-template-columns: auto;
	grid-template-rows: 1fr 2fr 1fr;
	list-style-type: none;
	border-radius: 20px;
	background-color: ${({ theme }) => theme.colors.lightGray };
	box-shadow: 6px 6px 15px rgba(0,0,0,0.2)
`;

const BeersListItem = styled.li `
	justify-items: center;
	justify-self: center;
	img {
		width: 80px;
	}
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
					<div>
						<h1>{name}</h1>
						<h3>{tagline}</h3>
					</div>
					<BeersListItem>
						<img src={image_url} alt={name} />
					</BeersListItem>
					<BeersListItem>
						<p>{brewers_tips}</p>
						<Button title={'buy'} />
					</BeersListItem>
				</BeersList>
			))}
		</StyledWrapper>
	);
};

export default Shop;