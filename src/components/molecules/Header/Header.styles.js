import styled from 'styled-components';

export const StyledWrapper = styled.div `
	background-color: ${({ theme }) => theme.colors.lightGray};

	&::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 1px;
		background-color: ${({ theme }) => theme.colors.gray};
	}
`;

export const StyledList = styled.ul `
	list-style-type: none;
    height: 100px;
    padding: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	
	@media(min-width: 1200px) {
		width: 1200px;
		margin: auto;
	}
`;

export const StyledListItem = styled.li `
	font-size: 20px;
	font-weight: bold;
	color: ${({ theme }) => theme.colors.black};
	
	svg {
		width: 32px;
		height: 32px;
		fill: ${({ theme }) => theme.colors.black};
	}
	
	.logo {
		text-decoration: none;
		font-size: 26px;
		color: ${({ theme }) => theme.colors.black};
	}
`;