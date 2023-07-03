import React from 'react'
import { Link } from 'react-router-dom'
import { StyledList, StyledWrapper } from './Header.styles'

const Header = () => (
  <StyledWrapper>
    <StyledList>
      <li>
        <Link to="/">Beers</Link>
      </li>
    </StyledList>
  </StyledWrapper>
)

export default Header
