import styled from 'styled-components';

export const StyledWrapper = styled.div ``;

export const StyledList = styled.ul `
	max-width: 400px;
	padding: 64px 24px;
	margin: auto;
	list-style-type: none;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto;
	gap: 64px;
	
	@media (min-width: 768px) {
		max-width: 800px;
        padding: 64px 0;
		grid-template-columns: repeat(2, 1fr);
	}
	
	@media (min-width: 1200px) {
		max-width: 1200px;
		grid-template-columns: repeat(3, 1fr);
	}
`;

export const StyledListItem = styled.li `
	padding: 24px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 24px;
	border-radius: 20px;
	background-color: ${({ theme }) => theme.colors.lightGray};
	box-shadow: 3px 5px 15px rgba(0, 0, 0, 0.15);

	.price {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	img {
		width: 80px;
		margin: auto;
    }
`;