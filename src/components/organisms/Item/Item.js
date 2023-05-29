import React from 'react'
import { fetchApi } from '../../../helpers/api'
import PropTypes from 'prop-types'
import { StyledWrapper } from '../../atoms/StyledWrapper'
import {
  Description,
  FoodList,
  FoodListItem,
  Image,
  ImageDescription,
  Overview,
  StyledList,
  StyledListItem,
} from './Item.styles'

const Item = ({ id }) => {
  const item = fetchApi(`https://api.punkapi.com/v2/beers/${id}`)
  // api using id in link, that's the simplest way to manipulate beers

  return (
    <StyledWrapper>
      <StyledList>
        {item.map(
          ({
            abv,
            brewers_tips,
            contributed_by,
            description,
            first_brewed,
            food_pairing,
            id,
            image_url,
            name,
            tagline,
          }) => (
            // destructuring all necessary fields
            <StyledListItem key={id}>
              <Overview>
                <Image>
                  <img src={image_url} alt={name} />
                </Image>
                <ImageDescription>
                  <div>
                    <h1>
                      {name.toUpperCase()} - {abv}%
                    </h1>
                    <h3>{tagline}</h3>
                    <strong>First brewed - {first_brewed}.</strong>
                    <p>{brewers_tips}</p>
                  </div>
                  <div>
                    <h2>PAIRING FOOD</h2>
                    <FoodList>
                      {food_pairing.map((food) => (
                        // mapping food to unordered list
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
          )
        )}
      </StyledList>
    </StyledWrapper>
  )
}

Item.propTypes = {
  id: PropTypes.string,
}

export default Item
