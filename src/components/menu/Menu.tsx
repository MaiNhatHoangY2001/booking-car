import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.scss';

function Menu() {
	return (
		<div className="dashboard-nav">
			<header>
				<a href="#" className="brand-logo">
					<img src={`${process.env.PUBLIC_URL}/assets/icons/logo.png`} alt="logo" />
				</a>
			</header>
			<nav className="dashboard-nav-list">
				<a href="#" className="dashboard-nav-item active">
					<img src={`${process.env.PUBLIC_URL}/assets/icons/dashboard.png`} alt="Dashboard" />
					<span className="m-lg-2">Dashboard</span>
				</a>
				<a href="#" className="dashboard-nav-item">
					<img src={`${process.env.PUBLIC_URL}/assets/icons/asset.png`} alt="asset" />
					<span className="m-lg-2">Assets</span>
				</a>
				<a href="#" className="dashboard-nav-item">
					<img src={`${process.env.PUBLIC_URL}/assets/icons/booking.png`} alt="booking" />
					<span className="m-lg-2">Booking</span>{' '}
				</a>

				<a href="#" className="dashboard-nav-item">
					<img src={`${process.env.PUBLIC_URL}/assets/icons/sell_car.png`} alt="sell_car" />
					<span className="m-lg-2">Sell Cars</span>{' '}
				</a>
				<a href="#" className="dashboard-nav-item">
					<img src={`${process.env.PUBLIC_URL}/assets/icons/buy_car.png`} alt="buy_car" />
					<span className="m-lg-2">Buy Cars</span>{' '}
				</a>
				<a href="#" className="dashboard-nav-item">
					<img src={`${process.env.PUBLIC_URL}/assets/icons/services.png`} alt="services" />
					<span className="m-lg-2">Services</span>{' '}
				</a>
				<a href="#" className="dashboard-nav-item">
					<img src={`${process.env.PUBLIC_URL}/assets/icons/calender.png`} alt="calender" />
					<span className="m-lg-2">Calender</span>{' '}
				</a>
				<a href="#" className="dashboard-nav-item">
					<img src={`${process.env.PUBLIC_URL}/assets/icons/messages.png`} alt="messages" />
					<span className="m-lg-2">Messages</span>{' '}
				</a>
				<a href="#" className="dashboard-nav-item footer-nav">
					<img src={`${process.env.PUBLIC_URL}/assets/icons/settings.png`} alt="settings" />
					<span className="m-lg-2">Settings</span>
				</a>
				<a href="#" className="dashboard-nav-item">
					<img src={`${process.env.PUBLIC_URL}/assets/icons/logout.png`} alt="logout" />
					<span className="m-lg-2">Log out</span>
				</a>
			</nav>
		</div>
	);
}

export default Menu;
