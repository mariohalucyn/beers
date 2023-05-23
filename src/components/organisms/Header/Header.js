import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Account } from '../../../assets/icons/account.svg';

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
	align-items: center;
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