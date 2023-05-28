import styled from 'styled-components';

export const StyledWrapper = styled.div `
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

export const StyledList = styled.ul `
	list-style-type: none;
	height: 200px;
    padding: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	
	@media(min-width: 1200px) {
		width: 1200px;
		margin: auto;
	}
`;

export const StyledListItem = styled.li `
	color: ${({ theme }) => theme.colors.black};
	
	a {
		text-decoration: none;
		color: ${({ theme }) => theme.colors.black};
	}
`;