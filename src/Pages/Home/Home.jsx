// import { useLoaderData } from "react-router-dom";
import AllBrandNames from "../../Components/AllBrandNames/AllBrandNames";
import Banner from "../../Components/Banner/Banner";

const Home = () => {
    
    // const cars = useLoaderData();
    // console.log(cars);
    return (
        <div className="">
            <Banner></Banner>
            <AllBrandNames/>
        </div>
    );
};

export default Home;
