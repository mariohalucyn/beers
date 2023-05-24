import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div `
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }) => theme.colors.lightGray};
	
	&::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 1px;
		background-color: ${({ theme }) => theme.colors.gray};
	}
`;

const StyledList = styled.ul `
	list-style-type: none;
	height: 200px;
	padding: 32px;
	margin: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	
	@media(min-width: 1200px) {
		width: 1200px;
		margin: 0 auto;
	}
`;

const StyledListItem = styled.li `
	padding: 2px;
	color: ${({ theme }) => theme.colors.black};
	
	a {
		text-decoration: none;
		color: ${({ theme }) => theme.colors.black};
	}
`;

const Footer = () => (
	<StyledWrapper>
		<StyledList>
			<StyledListItem>
				<a href="">Statue</a>
			</StyledListItem>
			<StyledListItem>
				<a href="">Privacy policy</a>
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