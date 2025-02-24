import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


const Root = () => {
    return (
        <div className="font-rancho">
            <NavBar></NavBar>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;