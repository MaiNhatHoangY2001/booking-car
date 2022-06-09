import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { BookingCarContext } from '../../context/BookingCarContext';
import './Menu.scss';

function Menu() {
	const context = useContext(BookingCarContext);
	const setPage = context.stateMenu.setPage;

	const handleSetPage = (element: any, page: number) => {
		var button = document.querySelectorAll('.dashboard-nav-list button');
		// loop through all 'a' elements
		for (let i = 0; i < button.length; i++) {
			// Remove the class 'active' if it exists
			button[i].classList.remove('active');
		}
		// add 'active' class to the element that was clicked
		element.target.classList.add('active');

		setPage(page);
	};

	return (
		<div className="dashboard-nav">
			<header>
				<a href="#" className="brand-logo">
					<img src={`${process.env.PUBLIC_URL}/assets/icons/logo.png`} alt="logo" />
				</a>
			</header>
			<nav className="dashboard-nav-list">
				<button  onClick={(e) => handleSetPage(e, context.menuTitles.DASHBOARD)} className="dashboard-nav-item active">
					<img src={`${process.env.PUBLIC_URL}/assets/icons/dashboard.png`} alt="Dashboard" />
					<span className="m-lg-2">Dashboard</span>
				</button>
				<button  onClick={(e) => handleSetPage(e, context.menuTitles.ASSETS)} className="dashboard-nav-item">
					<img src={`${process.env.PUBLIC_URL}/assets/icons/asset.png`} alt="asset" />
					<span className="m-lg-2">Assets</span>
				</button>
				<button  onClick={(e) => handleSetPage(e, context.menuTitles.BOOKING)} className="dashboard-nav-item">
					<img src={`${process.env.PUBLIC_URL}/assets/icons/booking.png`} alt="booking" />
					<span className="m-lg-2">Booking</span>{' '}
				</button>

				<button  onClick={(e) => handleSetPage(e, context.menuTitles.SELL_CAR)} className="dashboard-nav-item">
					<img src={`${process.env.PUBLIC_URL}/assets/icons/sell_car.png`} alt="sell_car" />
					<span className="m-lg-2">Sell Cars</span>{' '}
				</button>
				<button  onClick={(e) => handleSetPage(e, context.menuTitles.BUY_CAR)} className="dashboard-nav-item">
					<img src={`${process.env.PUBLIC_URL}/assets/icons/buy_car.png`} alt="buy_car" />
					<span className="m-lg-2">Buy Cars</span>{' '}
				</button>
				<button  onClick={(e) => handleSetPage(e, context.menuTitles.SERVICES)} className="dashboard-nav-item">
					<img src={`${process.env.PUBLIC_URL}/assets/icons/services.png`} alt="services" />
					<span className="m-lg-2">Services</span>{' '}
				</button>
				<button  onClick={(e) => handleSetPage(e, context.menuTitles.CALENDER)} className="dashboard-nav-item">
					<img src={`${process.env.PUBLIC_URL}/assets/icons/calender.png`} alt="calender" />
					<span className="m-lg-2">Calender</span>{' '}
				</button>
				<button  onClick={(e) => handleSetPage(e, context.menuTitles.MESSAGES)} className="dashboard-nav-item">
					<img src={`${process.env.PUBLIC_URL}/assets/icons/messages.png`} alt="messages" />
					<span className="m-lg-2">Messages</span>{' '}
				</button>
				<button  onClick={(e) => handleSetPage(e, context.menuTitles.SETTINGS)} className="dashboard-nav-item footer-nav">
					<img src={`${process.env.PUBLIC_URL}/assets/icons/settings.png`} alt="settings" />
					<span className="m-lg-2">Settings</span>
				</button>
				<button  onClick={(e) => handleSetPage(e, context.menuTitles.LOGOUT)} className="dashboard-nav-item">
					<img src={`${process.env.PUBLIC_URL}/assets/icons/logout.png`} alt="logout" />
					<span className="m-lg-2">Log out</span>
				</button>
			</nav>
		</div>
	);
}

export default Menu;
