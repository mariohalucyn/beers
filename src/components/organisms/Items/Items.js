import React from 'react';
import styled from 'styled-components';
import Button from '../../atoms/Button/Button';
import { fetchApi } from '../../../helpers/api';
import { Link } from 'react-router-dom';

const StyledWrapper = styled.div `
	padding: 0;
`;

const StyledList = styled.ul `
	max-width: 400px;
	padding: 64px 16px;
	margin: 0 auto;
	list-style-type: none;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto;
	gap: 42px;
	
	@media (min-width: 768px) {
		max-width: 800px;
		grid-template-columns: repeat(2, 1fr);
	}
	
	@media (min-width: 1200px) {
		max-width: 1200px;
		grid-template-columns: repeat(3, 1fr);
	}
`;

const StyledListItem = styled.li `
	padding: 24px;
	margin: 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 24px;
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
	const beers = fetchApi('https://api.punkapi.com/v2/beers');

	return (
		<StyledWrapper>
			<StyledList>
				{beers.map(({ abv, brewers_tips, id, image_url, name, tagline }) => (
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
								<Link to='/beer' id={id}>
									<Button>buy</Button>
								</Link>
							</div>
						</div>
					</StyledListItem>
				))}
			</StyledList>
		</StyledWrapper>
	);
};

export default Items;