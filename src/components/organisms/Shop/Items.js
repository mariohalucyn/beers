import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button/Button';

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
	gap: 42px;
`;

const StyledListItem = styled.li `
	padding: 24px;
	margin: 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-radius: 20px;
	background-color: ${({ theme }) => theme.colors.lightGray};
	box-shadow: 3px 5px 15px rgba(0, 0, 0, 0.15);

	.price {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	img {
		width: 80px;
		margin: auto;
	}
`;

const Items = () => {
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

	console.log(items);

	return (
		<>
			<StyledWrapper>
				<StyledList>
					{items.map(({ id, name, brewers_tips, image_url, tagline, abv }) => (
						<StyledListItem key={id}>
							<div>
								<h1>{name}</h1>
								<h3>{tagline}</h3>
							</div>
							<img src={image_url} alt={name} />
							<div>
								<p>{brewers_tips}</p>
								<div className={'price'}>
									<h1>{abv}%</h1>
									<Button title={'read'} />
								</div>
							</div>
						</StyledListItem>
					))}
				</StyledList>
			</StyledWrapper>
		</>
	);
};

export default Items;