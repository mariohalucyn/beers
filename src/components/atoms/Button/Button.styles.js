import styled from 'styled-components';

export const StyledButton = styled.button `
	width: 90px;
  	height: 50px;
	font-size: 16px;
	font-weight: bold;
	color: ${({ theme }) => theme.colors.black};
`;