import { Link, useLoaderData, useParams } from "react-router-dom";

const BrandNameCard = () => {
  const { brandName } = useParams();
  const cars = useLoaderData();
  const filterCars = cars.filter((car) => car.brandName === brandName);
  console.log(filterCars);

  return (
    <div>
          <h1 className="text-center mt-8 mb-8 text-3xl font-semibold">All Car {filterCars[0].brandName}</h1>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-1 gap-8 items-center justify-items-center">
        {filterCars.map((car) => (
          <div
            data-aos="slide-up"
            data-aos-duration="600"
            key={car._id}
            className="card flex-col md:flex-row card-side bg-base-100 shadow-xl"
          >
            <figure>
              <img
                className="md:w-[500px] md:h-72"
                src={car.photo}
                alt="Movie"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{car.name}</h2>
              <p className="font-bold">{car.type}</p>
              <p className="font-bold">Price :{car.price}$</p>
              <div className="card-actions ">
                <Link to={`/Update/${car._id}`} className="btn btn-outline">
                  Update{" "}
                </Link>
                <Link to={`/details/${car._id}`} className="btn btn-outline">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandNameCard;
