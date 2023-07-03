import React from 'react'
import { Link } from 'react-router-dom'
import { StyledList, StyledWrapper } from './Footer.styles'

const Footer = () => (
  <StyledWrapper>
    <StyledList>
      <li>
        <Link to="privacy-policy">Privacy policy</Link>
      </li>
      <li>
        <Link to="contact">Contact</Link>
      </li>
    </StyledList>
    <StyledList>
      <li>
        <strong>© 2023 Beers</strong>
      </li>
    </StyledList>
  </StyledWrapper>
)

export default Footer
