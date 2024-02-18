import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { ToastContainer } from "react-toastify";
AOS.init();

const MainLayout = () => {
  return (
    <div className="px-4 ">
      <Header></Header>
      <div className="max-w-screen-xl mx-auto">
        <hr />
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
    </div>
  );
};

export default MainLayout;
