import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div `
	background-color: ${({ theme }) => theme.colors.lightGray};

	&::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 1px;
		background-color: ${({ theme }) => theme.colors.gray};
	}
`;

const StyledList = styled.ul `
	margin: 0 auto;
	padding: 32px;
	width: 1200px;
	list-style-type: none;
	display: flex;
	justify-content: space-between;
`;

const StyledListItem = styled.li `
	font-size: 20px;
	font-weight: bold;
	color: ${({ theme }) => theme.colors.black};
`;

const Header = () => (
	<StyledWrapper>
		<StyledList>
			<StyledListItem>left</StyledListItem>
			<StyledListItem>logo</StyledListItem>
			<StyledListItem>right</StyledListItem>
		</StyledList>
	</StyledWrapper>
);

export default Header;