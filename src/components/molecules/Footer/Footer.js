import React from 'react';
import { Link } from 'react-router-dom';
import { StyledList, StyledListItem, StyledWrapper } from './Footer.styles';

const Footer = () => (
	<StyledWrapper>
		<StyledList>
			<StyledListItem>
				<Link to='privacy-policy'>Privacy policy</Link>
			</StyledListItem>
			<StyledListItem>
				<Link to='contact'>Contact</Link>
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