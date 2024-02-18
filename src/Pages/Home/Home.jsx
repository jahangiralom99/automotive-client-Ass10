import AskedToQue from "../../Components/AskedToQue/AskedToQue";
import Banner from "../../Components/Banner/Banner";
import WelcomeAuto from "../../Components/WelcomeAuto/WelcomeAuto";
import AllBrand from "../AllBrand/AllBrand";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <AllBrand />
      <WelcomeAuto></WelcomeAuto>
      <AskedToQue></AskedToQue>
    </div>
  );
};

export default Home;
