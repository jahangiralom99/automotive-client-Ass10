import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
AOS.init();

const MainLayout = () => {
  const [hide, setHide] = useState(true);

  return (
    <div data-theme={`${hide ? "light" : "dark"}`} className=" ">
      <Header></Header>
      <div
        className="flex justify-end mr-6 mt-5 mb-4 sticky top-6 z-10"
        onClick={() => setHide(!hide)}
      >
        {hide ? (
          <input type="checkbox" className="toggle" checked />
        ) : (
          <input
            type="checkbox"
            className="toggle"
            checked={() => setHide(!hide)}
          />
        )}
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      ></ToastContainer>
    </div>
  );
};

export default MainLayout;
