import styled from 'styled-components';

export const StyledWrapper = styled.div `
	padding: 72px;
`;

export const StyledList = styled.ul `
	list-style-type: none;
	width: 1200px;
	padding: 0;
	margin: auto;
`;

export const StyledListItem = styled.li`
	display: flex;
	flex-direction: column;
	gap: 72px;
`;

export const Overview = styled.div `
	display: grid;
	grid-template-columns: repeat(2, 1fr);
`;

export const Description = styled.div `
	display: flex;
	flex-direction: column;
	
	&::before {
		content: '';
		position: absolute;
		width: 1200px;
		height: 1px;
		background-color: ${({ theme }) => theme.colors.gray};
	}
`;

export const Image = styled.div `
	display: flex;
	flex-direction: column;
	margin: auto; 
	
	img {
		height: 600px;
	}
`;

export const FoodList = styled.ul `
	list-style-type: none;
	padding: 0;
`;

export const FoodListItem = styled.li ``;

export const ImageDescription = styled.div `
	display: flex;
	flex-direction: column;
`;