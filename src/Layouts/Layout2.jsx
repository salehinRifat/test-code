import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Layout2 = () => {
    return (
        <div style={{ fontFamily: 'poppins' }}>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout2;