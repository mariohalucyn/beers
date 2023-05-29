import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../assets/themes/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Contact from '../components/organisms/Contact/Contact';
import Footer from '../components/molecules/Footer/Footer';
import Header from '../components/molecules/Header/Header';
import Item from '../components/organisms/Item/Item';
import Items from '../components/organisms/Items/Items';
import PrivacyPolicy from '../components/organisms/PrivacyPolicy/PrivacyPolicy';

const GlobalStyle = styled.html `
	color: ${({ theme }) => theme.colors.black};
	background-color: ${({ theme }) => theme.colors.white};
	display: flex;
	min-height: calc(100vh - 500px);
	// calc using 100 viewport height and total height of header and footer that's way to fix footer on bottom
`;

const Root = () => {
	const [state, setState] = useState('1');
	// potential issue about initial state when user will refresh browser
	const pullData = (data) => {
		setState(data);
	};
	// pullData function is downloading data from another component with using `func={pullData}`

	return (
		<Router>
			<ThemeProvider theme={theme}>
				<Header />
				<GlobalStyle>
					<Routes>
						<Route exact path='/' element={
							<Items func={pullData} />
						} />
						<Route exact path='/beer' element={
							<Item id={state} />
						} />
						<Route exact path='/privacy-policy' element={
							<PrivacyPolicy />
						} />
						<Route exact path='/contact' element={
							<Contact />
						} />
					</Routes>
				</GlobalStyle>
				<Footer />
			</ThemeProvider>
		</Router>
	);
};

export default Root;