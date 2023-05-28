import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import List from '../components/templates/List';
import Product from '../components/templates/Product';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/themes/theme';

const StyledWrapper = styled.html `
	color: ${({ theme }) => theme.colors.black}
`;

const Root = () => {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<StyledWrapper>
					<ul>
						<li>
							<Link to='/'>home</Link>
						</li>
						<li>
							<Link to='/beer'>beers</Link>
						</li>
					</ul>
					<Routes>
						<Route exact path='/' element={<List />}></Route>
						<Route exact path='/beer' element={<Product />}></Route>
					</Routes>
				</StyledWrapper>
			</ThemeProvider>
		</Router>
	);
};
export default Root;