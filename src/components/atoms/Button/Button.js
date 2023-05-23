import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button `
	width: 90px;
  	height: 50px;
	font-size: 16px;
	font-weight: bold;
	color: ${({ theme }) => theme.colors.black};
`;
const Button = ({ title }) => (
	<StyledButton>
		{title}
	</StyledButton>
);

Button.propTypes = {
	title: PropTypes.string,
};

export default Button;