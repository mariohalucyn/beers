import React from 'react';
import { fetchApi } from '../../../helpers/api';
import Button from '../../atoms/Button/Button';
import styled from 'styled-components';

const StyledWrapper = styled.div ``;

const StyledList = styled.ul ``;

const StyledListItem = styled.li``;

const Product = () => {
	const beer = fetchApi('https://api.punkapi.com/v2/beers/2');
	console.log(beer);
	return (
		<StyledWrapper>
			<StyledList>
				{beer.map(({ id, name, brewers_tips, image_url, tagline, abv }) => (
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
								<a href="">
									<Button title={'read'} />
								</a>
							</div>
						</div>
					</StyledListItem>
				))}
			</StyledList>
		</StyledWrapper>
	);
};

export default Product;