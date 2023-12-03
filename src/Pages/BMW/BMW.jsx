import { Link, useLoaderData } from "react-router-dom";

const BMW = () => {
  const cars = useLoaderData();
  const filterCars = cars.filter((car) => car.brandName === "BMW");

  return (
    <div className="mt-12">
      <div  className="grid grid-cols-1 md:grid-cols-1 gap-8 items-center justify-items-center">
        {filterCars.map((car) => (
            <div
                data-aos="slide-up"
                data-aos-duration="600"
            key={car._id}
            className="card flex-col md:flex-row card-side bg-base-100 shadow-xl"
          >
            <figure>
              <img className="md:w-[500px]" src={car.photo} alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{car.name}</h2>
              <p className="font-bold">{car.type}</p>
              <p className="font-bold">Price :{car.price}$</p>
              <div className="card-actions ">
                <Link to={`/bmwUpdate/${car._id}`} className="btn btn-outline">Update </Link>
                <Link to={`/bmw/${car._id}`} className="btn btn-outline">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default BMW;
