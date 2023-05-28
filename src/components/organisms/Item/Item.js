import React from 'react';
import { fetchApi } from '../../../helpers/api';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div `
	padding: 72px;
`;

const StyledList = styled.ul `
	list-style-type: none;
	width: 1200px;
	padding: 0;
	margin: 0 auto;
`;

const StyledListItem = styled.li`
	display: flex;
	flex-direction: column;
	gap: 86px;
`;

const Overview = styled.div `
	display: grid;
	grid-template-columns: repeat(2, 1fr);
`;

const Description = styled.div `
	display: flex;
	flex-direction: column;
	
	&::before {
		content: '';
		position: absolute;
		width: 1200px;
		height: 1px;
		background-color: ${({ theme }) => theme.colors.gray};
	}
`;

const Image = styled.div `
	display: flex;
	flex-direction: column;
	margin: auto; 
	
	img {
		height: 600px;
	}
`;

const FoodList = styled.ul `
	list-style-type: none;
	padding: 0;
`;

const FoodListItem = styled.li ``;

const ImageDescription = styled.div `
	display: flex;
	flex-direction: column;
	gap: 32px;
`;

const Item = (props) => {
	const item = fetchApi(`https://api.punkapi.com/v2/beers/${props.id}`);

	return (
		<StyledWrapper>
			<StyledList>
				{item.map(({ abv, brewers_tips, contributed_by, description, first_brewed, food_pairing, id, image_url, name, tagline }) => (
					<StyledListItem key={id}>
						<Overview>
							<Image>
								<img src={image_url} alt={name} />
							</Image>
							<ImageDescription>
								<div>
									<h1>{name.toUpperCase()} - {abv}%</h1>
									<h3>{tagline}</h3>
									<strong>First brewed - {first_brewed}.</strong>
									<p>{brewers_tips}</p>
								</div>
								<div>
									<h2>PAIRING FOOD</h2>
									<FoodList>
										{food_pairing.map((food) => (
											<FoodListItem key={food_pairing}>{food}</FoodListItem>
										))}
									</FoodList>
								</div>
							</ImageDescription>
						</Overview>
						<Description>
							<h1>CONTRIBUTED BY</h1>
							<p>{contributed_by}</p>
							<h1>DESCRIPTION</h1>
							<p>{description}</p>
						</Description>
					</StyledListItem>
				))}
			</StyledList>
		</StyledWrapper>
	);
};

Item.propTypes = {
	id: PropTypes.string,
};

export default Item;