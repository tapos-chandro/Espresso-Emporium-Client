import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../layout/Home/Home";
import AddCoffeeForm from "../layout/AddCoffeeForm/AddCoffeeForm";
import UpdateCoffeeForm from "../layout/UpdateCoffeeForm/UpdateCoffeeForm";
import ViewCoffee from "../layout/ViewCoffee/ViewCoffee";



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
            path:'/updateCoffee/:_id',
            element: <UpdateCoffeeForm></UpdateCoffeeForm>
        },
        {
            path:'/viewCoffee/:_id',
            element:<ViewCoffee></ViewCoffee>
        }
        ]
    },
    
])
