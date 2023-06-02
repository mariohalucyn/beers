import React from 'react'
import Button from '../../atoms/Button/Button'
import { fetchApi } from '../../../helpers/api'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { StyledList, StyledListItem } from './Items.styles'
import { StyledWrapper } from '../../atoms/StyledWrapper'
import styled from 'styled-components'

const StyledSelect = styled.select`
  margin: 0 0 20px 8px;
  padding: 3px;
  color: ${({ theme }) => theme.colors.black};
`

const Items = (props) => {
  const [...data] = fetchApi('https://api.punkapi.com/v2/beers')
  // const [sortState, setSortState] = useState('none')

  return (
    <StyledWrapper>
      <div>
        sort
        <StyledSelect defaultValue={'DEFAULT'}>
          <option value="DEFAULT" disabled>
            None
          </option>
          <option value="ascending">Ascending</option>
          <option value="descending">Descending</option>
        </StyledSelect>
      </div>

      <StyledList>
        {data.map(({ abv, brewers_tips, id, image_url, name, tagline }) => (
          // destructuring all necessary fields
          <StyledListItem key={id}>
            <div>
              <Link onClick={() => props.func(id)} to="/beer">
                <h1>{name}</h1>
              </Link>
              <h3>{tagline}</h3>
            </div>
            <img src={image_url} alt={name} />
            <div>
              <p>{brewers_tips}</p>
              <div className={'price'}>
                <h1>{abv}%</h1>
                <Link onClick={() => props.func(id)} to="/beer">
                  <Button>Read</Button>
                </Link>
              </div>
            </div>
          </StyledListItem>
        ))}
      </StyledList>
    </StyledWrapper>
  )
}

Items.propTypes = {
  func: PropTypes.func,
}

export default Items
