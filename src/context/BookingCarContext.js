import { createContext, useState } from 'react';

const BookingCarContext = createContext();
const DASHBOARD = 0;
const ASSETS = 1;
const BOOKING = 2;
const SELL_CAR = 3;
const BUY_CAR = 4;
const SERVICES = 5;
const CALENDER = 6;
const MESSAGES = 7;
const SETTINGS = 8;
const LOGOUT = 9;

function BookingCarProvider({ children }) {
	const [page, setPage] = useState(DASHBOARD);


	

	const values = {
		menuTitles: {
			DASHBOARD,
			ASSETS,
			BOOKING,
			SELL_CAR,
			BUY_CAR,
			SERVICES,
			CALENDER,
			MESSAGES,
			SETTINGS,
			LOGOUT,
		},
		stateMenu : {
			page,
			setPage
		}
	};

	return <BookingCarContext.Provider value={values}>{children}</BookingCarContext.Provider>;
}

export { BookingCarContext, BookingCarProvider };
