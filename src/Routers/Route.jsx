import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../layout/Home/Home";
import AddCoffeeForm from "../layout/AddCoffeeForm/AddCoffeeForm";
import UpdateCoffeeForm from "../layout/UpdateCoffeeForm/UpdateCoffeeForm";
import ViewCoffee from "../layout/ViewCoffee/ViewCoffee";
// import {AddCoffeeForm} from "../layout/AddCoffeeForm/AddCoffeeForm";


export const router = createBrowserRouter([
    {
        path:'/',
        element: <Root/>,
        children: [
        {
            path: '/',
            element: <Home/>
        },
        {
            path:'/addCoffee',
            element: <AddCoffeeForm/>
        },
        {
            path:'/updateCoffee',
            element: <UpdateCoffeeForm></UpdateCoffeeForm>
        },
        {
            path:'/viewCoffee',
            element:<ViewCoffee></ViewCoffee>
        }
        ]
    },
    
])
