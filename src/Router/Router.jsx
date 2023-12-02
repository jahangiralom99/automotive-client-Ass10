import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import AddProducts from "../Pages/AddProducts/AddProducts";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivetRoute from "./PrivetRoute";


const Router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/addProducts',
                element: <PrivetRoute><AddProducts></AddProducts></PrivetRoute>,
            },
            {
                path: '/myCart',
                element: <MyCart></MyCart>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
            
        ]
    }
])

export default Router;