import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';
import Footer from './Footer';

const StyledWrapper = styled.div `
	width: 1200px;
	padding: 62px 0;
	margin: 0 auto;
`;

const StyledList = styled.ul `
	padding: 0;
	margin: 0 auto;
	list-style-type: none;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: auto;
	gap: 32px;
`;

const StyledListItem = styled.li `
	padding: 24px;
	margin: 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-radius: 20px;
	background-color: ${({ theme }) => theme.colors.lightGray};

	img {
		width: 80px;
		margin: auto;
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
		<>
			<StyledWrapper>
				<StyledList>
					{items.map(({ id, name, brewers_tips, image_url, tagline }) => (
						<StyledListItem key={id}>
							<div>
								<h1>{name}</h1>
								<h3>{tagline}</h3>
							</div>
							<img src={image_url} alt={name} />
							<div>
								<p>{brewers_tips}</p>
								<Button title={'buy'} />
							</div>
						</StyledListItem>
					))}
				</StyledList>
			</StyledWrapper>
			<Footer />
		</>
	);
};

export default Shop;