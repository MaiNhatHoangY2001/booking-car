type MenuProps = {
    children: React.ReactNode;
};

function Menu({ children }: MenuProps) {
    return <nav>{children}</nav>;
}
export default Menu;
