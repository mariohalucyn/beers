import React from 'react';
import Shop from '../components/organisms/Shop/Shop';
import styled from 'styled-components';

const StyledWrapper = styled.html `
	color: ${({ theme }) => theme.colors.black}
`;

const Root = () => (
	<StyledWrapper>
		<Shop />
	</StyledWrapper>
);

export default Root;