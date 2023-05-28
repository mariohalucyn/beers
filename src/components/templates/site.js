import React from 'react';
import Header from '../molecules/Header/Header';
import Footer from '../molecules/Footer/Footer';
import Item from '../organisms/Item/Item';

const Site = () => (
	<>
		<Header />
		<Item id={'1'}></Item>
		<Footer />
	</>
);

export default Site;