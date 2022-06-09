import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BookingCarProvider } from './context/BookingCarContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<BookingCarProvider>
			<App />
		</BookingCarProvider>
	</React.StrictMode>
);
