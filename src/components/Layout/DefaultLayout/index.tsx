import Header from '../components/Header';
import Sidebar from './Sidebar';

type Props = {
    children: React.ReactNode
};

function DefaultLayout({ children }: Props)  {
    return (
        <div>
            <Header />

            <div className="app-content">
                <Sidebar />
                <div className="content"> {children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
