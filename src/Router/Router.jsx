import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import AddProducts from "../Pages/AddProducts/AddProducts";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivetRoute from "./PrivetRoute";
import BMW from "../Pages/BMW/BMW";
import Toyota from "../Pages/Toyota/Toyota";
import Tesla from "../Pages/Tesla/Tesla";
import Ford from "../Pages/Ford/Ford";
import MercedesBenz from "../Pages/MercedesBenz/MercedesBenz";
import Lamborghini from "../Pages/Lamborghini/Lamborghini";


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
                path: '/BMW',
                element: <BMW></BMW>,
                loader: () => fetch('http://localhost:3000/cars')
            },
            {
                path: '/toyota',
                element: <Toyota></Toyota>,
                loader: () => fetch('http://localhost:3000/cars')
            },
            {
                path: '/tesla',
                element: <Tesla></Tesla>,
                loader: () => fetch('http://localhost:3000/cars')
            },
            {
                path: '/ford',
                element: <Ford></Ford>,
                loader: () => fetch('http://localhost:3000/cars')
            },
            {
                path: '/mercedes',
                element: <MercedesBenz></MercedesBenz>,
                loader: () => fetch('http://localhost:3000/cars')
            },
            {
                path: '/lamborghini',
                element: <Lamborghini></Lamborghini>,
                loader: () => fetch('http://localhost:3000/cars')
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