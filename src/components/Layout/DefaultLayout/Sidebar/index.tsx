import config from '../../../../config';
import Menu, { MenuItem } from './Menu';
import './Sidebar.scss';

function Sidebar() {
    return (
        <div className="dashboard-nav">
            <header>
                <a href="/" className="brand-logo">
                    <img src={`${process.env.PUBLIC_URL}/assets/icons/logo.png`} alt="logo" />
                </a>
            </header>
            <nav className="dashboard-nav-list">
                <Menu>
                    <MenuItem title="Dashboard" to={config.routes.dashboard} icon="dashboard.png" />
                    <MenuItem title="Assets" to={config.routes.assets} icon="asset.png" />
                    <MenuItem title="Booking" to={config.routes.booking} icon="booking.png" />
                    <MenuItem title="Sell cars" to={config.routes.sell_cars} icon="sell_car.png" />
                    <MenuItem title="Buy cars" to={config.routes.buy_cars} icon="buy_car.png" />
                    <MenuItem title="Services" to={config.routes.services} icon="services.png" />
                    <MenuItem title="Calender" to={config.routes.calender} icon="calender.png" />
                    <MenuItem title="Messages" to={config.routes.messages} icon="messages.png" />
                    <MenuItem title="settings" to={config.routes.setting} icon="settings.png" />
                    <MenuItem title="Logout" to={config.routes.logout} icon="logout.png" />
                </Menu>
            </nav>
        </div>
    );
}

export default Sidebar;
