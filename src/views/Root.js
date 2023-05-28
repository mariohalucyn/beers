import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from '../assets/themes/theme';
import PrivacyPolicy from '../components/templates/PrivacyPolicy';
import Header from '../components/molecules/Header/Header';
import Footer from '../components/molecules/Footer/Footer';
import Items from '../components/organisms/Items/Items';
import Item from '../components/organisms/Item/Item';

const StyledWrapper = styled.html `
	color: ${({ theme }) => theme.colors.black}
`;

const Root = () => {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<Header />
				<StyledWrapper>
					<Routes>
						<Route exact path='/' element={<Items />} />
						<Route exact path='/beer' element={<Item id='2' />} />
						<Route exact path='/privacy-policy' element={<PrivacyPolicy />} />
					</Routes>
				</StyledWrapper>
				<Footer />
			</ThemeProvider>
		</Router>
	);
};
export default Root;