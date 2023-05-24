import React from 'react';
import styled from 'styled-components';
import Product from '../components/organisms/Product/Product';

const StyledWrapper = styled.html `
	color: ${({ theme }) => theme.colors.black}
`;

const Root = () => (
	<StyledWrapper>
		<Product />
	</StyledWrapper>
);

export default Root;