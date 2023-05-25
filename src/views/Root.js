import React from 'react';
import styled from 'styled-components';
import List from '../components/templates/List';

const StyledWrapper = styled.html `
	color: ${({ theme }) => theme.colors.black}
`;

const Root = () => (
	<StyledWrapper>
		<List />
	</StyledWrapper>
);

export default Root;