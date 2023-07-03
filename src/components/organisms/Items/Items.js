import React from 'react'
import Button from '../../atoms/Button/Button'
import { fetchApi } from '../../../helpers/api'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { StyledList } from './Items.styles'
import { StyledWrapper } from '../../atoms/StyledWrapper'

const Items = (props) => {
  const [...data] = fetchApi('https://api.punkapi.com/v2/beers')

  return (
    <StyledWrapper>
      <StyledList>
        {[...data].map(
          ({ abv, brewers_tips, id, image_url, name, tagline }) => (
            // destructuring all necessary fields
            <li key={id}>
              <div>
                <Link onClick={() => props.func(id)} to="/beer">
                  <h1>{name}</h1>
                </Link>
                <h3>{tagline}</h3>
              </div>
              <Link className="image" onClick={() => props.func(id)} to="/beer">
                <img src={image_url} alt={name} />
              </Link>
              <div>
                <p>{brewers_tips}</p>
                <div className={'price'}>
                  <h1>{abv}%</h1>
                  <Link onClick={() => props.func(id)} to="/beer">
                    <Button>Read</Button>
                  </Link>
                </div>
              </div>
            </li>
          )
        )}
      </StyledList>
    </StyledWrapper>
  )
}

Items.propTypes = {
  func: PropTypes.func,
}

export default Items
