
import AllBrandNames from "../../Components/AllBrandNames/AllBrandNames";
import AskedToQue from "../../Components/AskedToQue/AskedToQue";
import Banner from "../../Components/Banner/Banner";
import WelcomeAuto from "../../Components/WelcomeAuto/WelcomeAuto";

const Home = () => {
  
  return (
    <div>
      <Banner></Banner>
      <AllBrandNames />
      <WelcomeAuto></WelcomeAuto>
      <AskedToQue></AskedToQue>
    </div>
  );
};

export default Home;
