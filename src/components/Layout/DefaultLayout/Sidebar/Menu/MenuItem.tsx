import { NavLink } from 'react-router-dom';

type MenuItemProps = {
    title: string;
    to: string;
    icon: string;
};

function MenuItem({ title, to, icon }: MenuItemProps) {
    return (
        <NavLink to={to} className="dashboard-nav-item">
            <img src={`${process.env.PUBLIC_URL}/assets/icons/` + icon} alt={title} />
            <span className="m-lg-2">{title}</span>
        </NavLink>
    );
}

export default MenuItem;
