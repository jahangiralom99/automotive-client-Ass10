import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const MainLayout = () => {
  return (
    <div className="max-w-screen-xl mx-auto ">
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
