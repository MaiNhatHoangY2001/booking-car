import Header from "../components/Header";

function DefaultLayout({ children }: any) {
    return (
        <div>
            <Header />
            <div className="content">{children}</div>
        </div>
    );
}

export default DefaultLayout;
