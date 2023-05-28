import React from 'react';
import { fetchApi } from '../../../helpers/api';
import PropTypes from 'prop-types';
import {
	Description,
	FoodList,
	FoodListItem,
	Image,
	ImageDescription,
	Overview,
	StyledList,
	StyledListItem,
	StyledWrapper
} from './Item.styles';


const Item = ({ id }) => {
	const item = fetchApi(`https://api.punkapi.com/v2/beers/${id}`);
	
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