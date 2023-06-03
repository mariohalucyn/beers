import React from 'react'
import { StyledWrapper } from '../../atoms/StyledWrapper'
import { StyledContact } from './Contact.styles'
import Mushroom from '../../../assets/pictures/mario mushroom.png'

const Contact = () => (
  <StyledWrapper>
    <StyledContact>
      <div>
        <h1>Kacper Gajda</h1>
        <h3>kgajda226@gmail.com</h3>
        <p>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          I'm a hobbyist programmer now I'm learning JavaScript actually react
          and this is example of site you can make with this framework (or
          actually library)
        </p>
        <ul>
          links to my socials
          <li>https://github.com/mariohalucyn</li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div>
        <img src={Mushroom} alt="mushroom profile picture" />
      </div>
    </StyledContact>
  </StyledWrapper>
)

export default Contact
