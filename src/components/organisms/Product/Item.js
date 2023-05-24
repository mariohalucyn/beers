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

`;

const Overview = styled.div `
	display: grid;
	grid-template-columns: repeat(2, 1fr);
`;

const Description = styled.div ``;

const Image = styled.div `
  display: flex;
  flex-direction: column;
  margin: auto;
  img {
    height: 500px;
  }
`;

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
								<p>{description}</p>
							</div>
						</Overview>
						<Description>
							<strong>{first_brewed}</strong>
							<p>{food_pairing}</p>
							<p>{brewers_tips}</p>
							<p>{contributed_by}</p>
						</Description>
					</StyledListItem>
				))}
			</StyledList>
		</StyledWrapper>
	);
};

export default Item;