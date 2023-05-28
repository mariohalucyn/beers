import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styles';

const Button = ({ children }) => (
	<StyledButton>
		{children}
	</StyledButton>
);

Button.propTypes = {
	children: PropTypes.string,
};

export default Button;