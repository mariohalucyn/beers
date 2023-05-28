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

const StyledWrapper = styled.html `
	color: ${({ theme }) => theme.colors.black}
`;

const Root = () => {
	const [state, setState] = useState('');
	const pullData = (data) => {
		setState(data);
	};

	return (
		<Router>
			<ThemeProvider theme={theme}>
				<Header />
				<StyledWrapper>
					<Routes>
						<Route exact path='/' element={<Items func={pullData} />} />
						<Route exact path='/beer' element={<Item id={state} />} />
						<Route exact path='/privacy-policy' element={<PrivacyPolicy />} />
						<Route exact path='/contact' element={<Contact />} />
					</Routes>
				</StyledWrapper>
				<Footer />
			</ThemeProvider>
		</Router>
	);
};
export default Root;