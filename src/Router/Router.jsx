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
import UpdateCar from "../Pages/UpdateCar/UpdateCar";
import DetailsCar from "../Pages/DetailsCar/DetailsCar";
import ErrPage from "../Pages/ErrPage/ErrPage";
import AboutUs from "../Pages/AboutUs/AboutUs";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrPage></ErrPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/BMW",
        element: <BMW></BMW>,
        loader: () =>
          fetch("https://automotive-server-asss-m10.vercel.app/cars"),
      },
      {
        path: "/toyota",
        element: <Toyota></Toyota>,
        loader: () =>
          fetch("https://automotive-server-asss-m10.vercel.app/cars"),
      },
      {
        path: "/tesla",
        element: <Tesla></Tesla>,
        loader: () =>
          fetch("https://automotive-server-asss-m10.vercel.app/cars"),
      },
      {
        path: "/ford",
        element: <Ford></Ford>,
        loader: () =>
          fetch("https://automotive-server-asss-m10.vercel.app/cars"),
      },
      {
        path: "/mercedes",
        element: <MercedesBenz></MercedesBenz>,
        loader: () =>
          fetch("https://automotive-server-asss-m10.vercel.app/cars"),
      },
      {
        path: "/lamborghini",
        element: <Lamborghini></Lamborghini>,
        loader: () =>
          fetch("https://automotive-server-asss-m10.vercel.app/cars"),
      },
      {
        path: "/Update/:id",
        element: <UpdateCar></UpdateCar>,
        loader: ({ params }) =>
          fetch(
            `https://automotive-server-asss-m10.vercel.app/cars/${params.id}`
          ),
      },
      {
        path: "/details/:id",
        element: <DetailsCar></DetailsCar>,
        loader: ({ params }) =>
          fetch(
            `https://automotive-server-asss-m10.vercel.app/cars/${params.id}`
          ),
      },
      {
        path: "/addProducts",
        element: (
          <PrivetRoute>
            <AddProducts></AddProducts>
          </PrivetRoute>
        ),
      },
      {
        path: "/myCart",
        element: (
          <PrivetRoute>
            <MyCart></MyCart>
          </PrivetRoute>
        ),
        loader: () =>
          fetch("https://automotive-server-asss-m10.vercel.app/carts"),
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default Router;
