import React from 'react';
import { Link } from 'react-router-dom';
import { StyledList, StyledListItem, StyledWrapper } from './Header.styles';

const Header = () => (
	<StyledWrapper>
		<StyledList>
			<StyledListItem>
				<Link className={'logo'} to='/'>Beers</Link>
			</StyledListItem>
		</StyledList>
	</StyledWrapper>
);

export default Header;