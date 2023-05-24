import React from 'react';
import { fetchApi } from '../../../helpers/api';
import styled from 'styled-components';

const StyledWrapper = styled.div `
	padding: 56px;
`;

const StyledList = styled.ul `
	list-style-type: none;
  width: 1200px;
  margin: 0 auto;
`;

const StyledListItem = styled.li`
	display: flex;
	flex-direction: column;
	gap: 64px;
`;

const Overview = styled.div `
	display: grid;
	grid-template-columns: repeat(2, 1fr);
`;

const Description = styled.div `
display: flex;
flex-direction: column`;

const Image = styled.div `
  display: flex;
  flex-direction: column;
  margin: auto;
  img {
    height: 500px;
  }
`;

const FoodList = styled.ul `
list-style-type: none
`;

const FoodListItem = styled.li ``;

const Item = () => {
	const item = fetchApi('https://api.punkapi.com/v2/beers/2');

	return (
		<StyledWrapper>
			<StyledList>
				{item.map(({ brewers_tips, contributed_by, description, first_brewed, food_pairing, id, image_url, name, tagline }) => (
					<StyledListItem key={id}>
						<Overview>
							<Image>
								<img src={image_url} alt=""/>
							</Image>
							<div>
								<h1>{name}</h1>
								<h3>{tagline}</h3>
								<strong>First brewed {first_brewed}</strong>
								<p>{brewers_tips}</p>
							</div>
						</Overview>
						<Description>
							<h1>PAIRING FOOD</h1>
							<FoodList>
								{food_pairing.map((food) => (
									<FoodListItem key={id}>{food}</FoodListItem>
								))}
							</FoodList>
							<h1>DESCRIPTION</h1>
							<p>{description}</p>
							<h1>CONTRIBUTED BY</h1>
							<p>{contributed_by}</p>
						</Description>
					</StyledListItem>
				))}
			</StyledList>
		</StyledWrapper>
	);
};

export default Item;