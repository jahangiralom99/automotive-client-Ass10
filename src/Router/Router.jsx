import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import AddProducts from "../Pages/AddProducts/AddProducts";
import MyCart from "../Pages/MyCart/MyCart";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivetRoute from "./PrivetRoute";
import UpdateCar from "../Pages/UpdateCar/UpdateCar";
import DetailsCar from "../Pages/DetailsCar/DetailsCar";
import ErrPage from "../Pages/ErrPage/ErrPage";
import AboutUs from "../Pages/AboutUs/AboutUs";
import BrandNameCard from "../Pages/BrandNameCard/BrandNameCard";

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
        path: "/brand/:brandName",
        element: <BrandNameCard />,
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
