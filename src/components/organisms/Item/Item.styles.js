import styled from 'styled-components';

export const StyledList = styled.ul `
	list-style-type: none;
	padding: 24px;
	margin: 0 auto;

  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const StyledListItem = styled.li`
    padding: 0;
    margin: 0 auto;
	display: flex;
	flex-direction: column;
    gap: 48px;
`;

export const Overview = styled.div `
	display: grid;
	grid-template-columns: 1fr;

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
  }

    @media (min-width: 1200px) {}
`;

export const Description = styled.div `
	display: flex;
	flex-direction: column;
    position: relative;
	
	&::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 1px;
		background-color: ${({ theme }) => theme.colors.gray};
	}
`;

export const Image = styled.div `
	display: flex;
	flex-direction: column;
	margin: auto; 
	
	img {
		max-height: 400px;
	}
`;

export const FoodList = styled.ul `
	list-style-type: none;
	padding: 0;
    margin: 0;
`;

export const FoodListItem = styled.li ``;

export const ImageDescription = styled.div `
	display: flex;
	flex-direction: column;
`;