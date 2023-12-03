import { useLoaderData } from "react-router-dom";

const Ford = () => {

    const cars = useLoaderData();
    const filterCars = cars.filter(car => car.brandName === "Ford");

    return (
        <div>
            <div className="grid md:grid-cols-2">
                {
                    filterCars.map(car => <div key={car._id} className="card lg:card-side bg-base-100 shadow-xl">
                    <figure><img src={car.photo} alt="Album"/></figure>
                    <div className="card-body">
                      <h2 className="card-title">New album is released!</h2>
                      <p>Click the button to listen on Spotiwhy app.</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                      </div>
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default Ford;