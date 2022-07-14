import { HeaderOnly } from '../components/Layout';
import Assets from '../components/pages/assets';
import DashBoard from '../components/pages/Dashboard';
import Login from '../components/pages/login';

interface PathRouter {
    path: string;
    component: React.ElementType;
    layout?: React.ElementType;
}

const publicRoutes: Array<PathRouter> = [
    { path: '/', component: DashBoard },
    { path: '/assets', component: Assets },
    { path: '/login', component: Login, layout: HeaderOnly },
];

const privateRoutes: Array<Object> = [];

export { publicRoutes, privateRoutes };
