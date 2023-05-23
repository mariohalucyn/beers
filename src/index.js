import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './views/Root';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/themes/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<Root />
		</ThemeProvider>
	</React.StrictMode>
);