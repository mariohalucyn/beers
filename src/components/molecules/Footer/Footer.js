import React from 'react';
import { Link } from 'react-router-dom';
import { StyledList, StyledListItem, StyledWrapper } from './Footer.styles';

const Footer = () => (
	<StyledWrapper>
		<StyledList>
			<StyledListItem>
				<Link to='privacy-policy' >Privacy policy</Link>
			</StyledListItem>
			<StyledListItem>
				<a href="">Contact</a>
			</StyledListItem>
		</StyledList>
		<StyledList>
			<StyledListItem>
				<strong>© 2023 Beers</strong>
			</StyledListItem>
		</StyledList>
	</StyledWrapper>
);

export default Footer;