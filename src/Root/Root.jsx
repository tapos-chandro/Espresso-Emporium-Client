import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";


const Root = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Outlet/>
        </div>
    );
};

export default Root;