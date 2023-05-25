import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Account } from '../../../assets/icons/account.svg';

const StyledWrapper = styled.div `
	margin: 0 auto;
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
	list-style-type: none;
	padding: 32px;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	
	@media(min-width: 1200px) {
		width: 1200px;
		margin: 0 auto;
	}
`;

const StyledListItem = styled.li `
	font-size: 20px;
	font-weight: bold;
	color: ${({ theme }) => theme.colors.black};
	
	svg {
		width: 32px;
		height: 32px;
		fill: ${({ theme }) => theme.colors.black};
	}
`;

const Header = () => (
	<StyledWrapper>
		<StyledList>
			<StyledListItem>logo</StyledListItem>
			<StyledListItem>
				<Account />
			</StyledListItem>
		</StyledList>
	</StyledWrapper>
);

export default Header;