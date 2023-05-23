import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div `
	position: relative;
	margin: 0;
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
	margin: 0 auto;
	padding: 64px;
	width: 1200px;
	list-style-type: none;
`;

const StyledListItem = styled.li `
	padding: 2px;
	color: ${({ theme }) => theme.colors.black};
`;

const Footer = () => (
	<StyledWrapper>
		<StyledList>
			<StyledListItem>Statue</StyledListItem>
			<StyledListItem>Privacy policy</StyledListItem>
			<StyledListItem>Contact</StyledListItem>
		</StyledList>
		<StyledList>
			<StyledListItem>
                © 2023 Beers
			</StyledListItem>
		</StyledList>
	</StyledWrapper>
);

export default Footer;