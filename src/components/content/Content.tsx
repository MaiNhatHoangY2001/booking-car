import { ReactElement, useContext } from 'react';
import { BookingCarContext } from '../../context/BookingCarContext';
import Assets from './asseets/Assets';
import './Content.scss';
import Dashboard from './dashboard/Dashboard';

function Content() {
	const context = useContext(BookingCarContext);
	const page = context.stateMenu.page;

	const handleSetPage = (page: number): ReactElement => {
		switch (page) {
			case context.menuTitles.DASHBOARD:
				return <Dashboard />;
			case context.menuTitles.ASSETS:
				return <Assets />;
			default:
				return <Dashboard />;
		}
	};

	return <div className="content">{handleSetPage(page)}</div>;
}

export default Content;
