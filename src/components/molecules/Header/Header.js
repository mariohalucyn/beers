import React from 'react'
import { Link } from 'react-router-dom'
import { StyledList, StyledListItem, StyledWrapper } from './Header.styles'

const Header = () => (
  <StyledWrapper>
    <StyledList>
      <StyledListItem>
        <Link className={'logo'} to="/">
          Beers
        </Link>
        {/*class logo is just text with link to main site*/}
      </StyledListItem>
    </StyledList>
  </StyledWrapper>
)

export default Header
