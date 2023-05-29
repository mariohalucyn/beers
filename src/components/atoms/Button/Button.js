import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styles';

const Button = ({ children }) => (
	<StyledButton>
		{children}
		{/*button can gets text from inside and manipulate it*/}
	</StyledButton>
);

Button.propTypes = {
	children: PropTypes.string,
};

export default Button;